---
title: Using Refined Types in Scala
date: "2017-10-21"
template: "post"
draft: false
slug: "using-refined-types-in-scala"
category: "Domain Modeling"
tags:
  - "Domain Modeling"
  - "Refined Types"
  - "Scala"
description: "Refined types are pretty cool for domain modeling it turns out"
socialImage: "/media/42-line-bible.jpg"
---


# Refined

[Refined](https://github.com/fthomas/refined) has some practical, useful ideas. There are obvious, clear benefits to domain modeling with refined types. Learning to use the library and getting used to it does have some overhead though, as with any new thing. We'll be getting into the nitty-gritty of that overhead as I learn the library.

To have something to base this series on, I'll work on `adriann`'s [Simple Programming Problems](https://adriann.github.io/programming_problems.html), starting with Elementary Problem 3. We're skipping 1 and 2 because they're trivial and don't benefit from refined types, anyway.

Here's the problem statement:

> 3. Modify the previous program such that only the users Alice and Bob are greeted with their names.

And here's a solution to Problem 3:

```scala
import scala.io.StdIn._

object Prob3 {

  def main(args: Array[String]): Unit =
    println(greet(readLine("What's your name")))

  def greet(name: String) =
    if (name == "Alice" || name == "Bob") s"Hello, $name!"
    else "Go away!"
}
```

So we're reading a line, making a greeting out of the name the user enters, and printing that greeting to the console. Our greeting can be polite, if your name's either *Alice* or *Bob*. We changed the problem a bit by being a bit standoffish to anyone with any other name.

What if we we're given an empty `String`? It'd be awkward to say `"Go away, !"`. Like stuttering, but in writing. Let's say we don't ever want an empty `String` for `greet`.

Enter refined types.

First off, we could fix it in a lot of ways, but there's already [a good writeup](https://beyondthelines.net/programming/refined-types/) on why refined types are, at least IMO, one of the better ways. So let's use them here.

First, we change our `greet`'s signature:

```scala
def greet(name: String Refined NonEmpty)
```

Already, we run into a problem in `main`, because `readLine` returns a `String`, while `greet` now wants a `NonEmptyString`. While we're at it, let's add an alias for brevity:

```scala
type NonEmptyString = String Refined NonEmpty
```

We also have another, more pernicious problem in that we're comparing the equality of a `String` to a `NonEmptyString`, which is a patently bad idea. The culprit here is `name == "Alice" || name == "Bob"`.

At this point, I think it's a good time to use Scalaz's type-safe `Equal`. Let's change the expression to `name === "Alice" || name === "Bob"`.

Now we have three errors, namely:

```scala
[error] value === is not a member of eu.timepit.refined.api.Refined[String,eu.timepit.refined.collection.NonEmpty]
[error]     if (name === "Alice" || name === "Bob") s"Hello, $name!"
[error]              ^
[error] value === is not a member of eu.timepit.refined.api.Refined[String,eu.timepit.refined.collection.NonEmpty]
[error]     if (name === "Alice" || name === "Bob") s"Hello, $name!"
[error]                                  ^
[error] type mismatch;
[error]  found   : String
[error]  required: eu.timepit.refined.api.Refined[String,eu.timepit.refined.collection.NonEmpty]
```

This is a strictly better outcome than trying to compare the name read from user input, only for our conditional to always come up `false` because they aren't the same type! So how do we make our Equal typeclass work for refined types?

It turns out `refined` has support for `Equal` so let's go with that and `import eu.timepit.refined.scalaz._`. Note that we've had to add the dependency in `build.sbt` with: `libraryDependencies += "eu.timepit" %% "refined-scalaz" % "0.8.4"`. Refined also provides a way to automatically *lift* literals into refined types, so let's use them with `import eu.timepit.refined.auto._`.

Now that we've resolved the errors in our conditional, we are left with the following new error:

```scala
[error] compile-time refinement only works with literals
[error]     println(greet(readLine("What's your name? ")))
[error]                           ^
```

And for good reason. There isn't a way for our compiler to know if our user is entering a `NonEmptyString`! The user can choose _not_ to enter anything after all. With that in mind, we have to resolve the type **at runtime**. To do this, we *refine* our user input at runtime.

```scala
import eu.timepit.refined.refineV

val refinedUserInput: Either[String, Refined[String, NonEmpty]] = 
      refineV[NonEmpty](readLine("What's your name? "))
```

When refining values at runtime, we end up with an `Either[String, Refined[_, _]]`. At this point, we know we've reached the edge of our program. We *have* to rewrite `main`. 

```scala
def main(args: Array[String]): Unit = {
  refineV[NonEmpty](readLine("What's your name? ")) match {
    case Right(s) => println(greet(s))
    case Left(e) => ??? // what to do here?
  }
```

By using refined types, we are *eventually forced* to deal with the case where our user enters an invalid name. Let's say we decide to just tell the user that they didn't enter a name. We can do that here.

```scala
def main(args: Array[String]): Unit = {
  refineV[NonEmpty](readLine("What's your name? ")) match {
    case Right(s) => println(greet(s))
    case _ => println("You didn't enter a name!")
  }
```

We can even ask the user again, with recursion.

```scala
def main(args: Array[String]): Unit =
  refineV[NonEmpty](readLine("What's your name? ")) match {
    case Right(s) => println(greet(s))
    case _ =>
      println("You didn't enter a name!")
      main(args)
  }
```

Here's the whole code:

```scala
import scalaz._
import Scalaz._
import eu.timepit.refined.api.Refined
import eu.timepit.refined.collection.NonEmpty
import eu.timepit.refined.scalaz._
import eu.timepit.refined.auto._
import eu.timepit.refined.refineV

import scala.io.StdIn._

object Prob3 {

  type NonEmptyString = String Refined NonEmpty

  def main(args: Array[String]): Unit =
    refineV[NonEmpty](readLine("What's your name? ")) match {
      case Right(s) => println(greet(s))
      case _ =>
        println("You didn't enter a name!")
        main(args)
    }

  def greet(name: String Refined NonEmpty): String =
    if (name === "Alice" || name === "Bob") s"Hello, $name!"
    else s"Go away, $name!"
}
```
