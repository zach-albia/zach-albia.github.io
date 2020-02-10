---
title: My FP Journey
date: "2020-02-10"
template: "post"
draft: false
slug: "my-fp-journey"
category: "Personal"
tags:
  - "Functional Programming"
description: "The long and winding road that led me to pure functional programming"
socialImage: "/media/winding-road.jpg"
---

I wasn't always into FP. I could've been, but it took me a little over 3 years ago to buy into it and get to where I am now, which I think is at a decent-enough level.ʲᵒᵇ ᵖˡˢ

My first programming language was this odd little thing called Scheme; taught to us in our sophomore year in high school. There was this lambda symbol emblazoned on the shortcut to what I remember to be its IDE with a REPL. Come to think of it, I'm pretty sure it was called [Dr. Scheme](http://cs.brown.edu/courses/cs009/02/drscheme_intro/scheme.html) then.

## Contents

```toc
exclude: Contents
tight: true
```

<figure class="float-right" style="width: 300px">
	<img src="/media/dr-scheme.jpg" alt="Dr. Scheme screenshot">
	<figcaption>Dark mode wasn't a thing then...</figcaption>
	<figcaption class="attrib"><a href="https://www.flickr.com/photos/vazexqi/114030692/">Scheme</a> by vazexqi under CC BY</figcaption>
</figure>

It was weird. I had to come to terms with the peculiar way it specified operations and their arguments in what I was later taught was _prefix notation_. We were then taught to do arithmetic, define variables and functions.

We got far enough into it to make programs that could calculate averages, as well as some school grades our teacher had us do for our final practical exam. But that was pretty much it, and we only spent a semester on it.

One thing that stuck to me was this perception in my class that Scheme was just this toy language you couldn't make anything interesting with. Oddly enough, there had been these game apps that appeared to be a part of the Scheme installation. We were happy to be playing them while regarding Scheme as a toy language.

We had heard about other languages like C, Java from other people. To most of us who were learning programming for the first time, Scheme just wasn't something suitable for serious, real-world™ programming. I don't even remember being told it was functional.

# High School & Uni
They taught us Java in senior high and in college; it had the reputation of being _real-world_. I bemoaned having to write ifs, switches and loops repeatedly. I've spent more time than I'll admit pulling hairs over one-off errors that had me worry about the _how_ more than the _what_. It almost felt like it was sheer luck I got the _what_ right eventually—not very well even then.

Every class that looked like it represented data had to have _getters_ and _setters_ as a hedge for when you might want to _do something else_ with _encapsulated_ data. It was tedious. Ever since reading the [DDD blue book](https://domainlanguage.com/ddd/blue-book/) after college, I stopped exposing everything. Only the bare minimum needed.

<figure class="float-left" style="width: 300px">
	<img src="/media/cs-form.jpg" alt="Windows Forms C#">
	<figcaption>Code was shoved into some Form{number}.cs</figcaption>
	<figcaption class="attrib"><a href="https://www.flickr.com/photos/shokai/3470835562">C#.NETでForm</a> by Sho Hashimoto under CC BY</figcaption>
</figure>

Soon enough we decided to use C# for projects. We used it as another Java, taking advantage of Visual Studio's Form Designer for WYSIWYG WinForms development. We ended up shoving all our application logic in our custom GUI classes and writing all application behavior in hundreds up to over a thousand lines of event handler code.

We weren't exactly taught modern-day software engineering, mind you. It was all about completing diagrams before you write any code—traditional waterfall. Visual Studio [rotted our minds](http://charlespetzold.com/etc/DoesVisualStudioRotTheMind.html), that's for sure.

That they were having us build whole applications was a head-scratcher. Never mind we had an "Object-oriented design" course after "Software engineering". Those lessons would have come in handy in taming the complexity of our thousand-liner event handlers. That said, design patterns are advanced concepts in OOP. It's one thing to know what they are, it's another to know how they combine together and which parts should go where.

In the end, most of our school projects didn't use design patterns much, if at all.

In fairness to our school, we did have a "Programming Languages" course. It was valuable how it exposed us to other paradigms. It did mention Haskell, FP, and even logic programming languages like Prolog. Schools should be pushing other paradigms like functional and logic **more** and **earlier**. Looking back at how I wasn't convinced to do FP cements my view FP needs more PR.

## Some respite in SQL
Databases were something else. Learning SQL was eye-opening, revealing a much more intuitive way of gleaning information from mounds of data than just looping over it. This was the feeling I got working through [SQL Zoo](https://sqlzoo.net). In class, we were taught the Oracle SQL dialect. The Oracle brand reminded me of its namesake in Greek mythology. To quote Wikipedia,

> "...a person or agency considered to provide wise and insightful counsel or prophetic predictions or precognition of the future".

I even remember my grandma telling me how I should learn Oracle because word around was it was this big-time, high-paying tech thing. Even my grandma was in on it!

## In SQL we trust
Our GUI applications were merely frontends to our databases backends. Application logic was just front-end logic, meant to ferry SQL statements over to the backend. We were told to use database triggers to implement key domain logic and keep boundaries consistent. It was good enough. It was a testament to how well-suited database systems were for working on data, and how easy it was to build queries that got us exactly what we wanted.

Why was this the case? I'd credit it to SQL being founded on solid math, along with the expressive power afforded by its declarative model. I've since realized SQL and FP had something in common: being declarative.

# Into the real world
PHP and JavaScript were interesting; They were my first run-in with languages with closures, first-class functions and higher-order functions. But the first language where I started using them heavily was C#. Using LINQ in C# was something that dramatically changed how I viewed programming. I hadn't realized it but it was my first run-in with monads. I was pretty amazed how I got to essentially write queries within the language (LINQ stands for **L**anguage **IN**tegrated **Q**uery after all). It also turned out I could do it with collections!

![My long and winding journey towards FP has been one of the avoidance of pain](
  /media/winding-road.jpg
  "Winding road"
)
  
The more OOP experience I got, the more I realized "good OOP" looked more and more like FP. There's "composition over inheritance", "prefer immutability", and the fact that many design patterns owe their existence to the lack of first-class functions in languages like Java.

## Rediscovering JavaScript
I had been using JavaScript for a long time and before I knew it I've been using its functional features more and more. Instead of for and while loops, I've been using higher-order functions (HOF) in array methods like `map`, `flatMap`, `filter`, and `reduce`. I also expanded my usage of interesting HOFs to those in underscore and lodash. The one that tipped me over to the FP side however was a little-known library called [highland.js](https://highlandjs.org/). It was impressive how I could just write a whole Node program as one long stream.

Something that had been plaguing frontend JavaScript (thanks to AJAX) and Node and for some time was callback hell. It got so bad that I'd sometimes just factor out each layer of a stack of callbacks into its own function. The `Promise` abstraction came along and I was stunned how I could effectively keep indentation in check. Promises were infectious though, use it in one place and soon enough you're going to have to use it everywhere.

I didn't know it then but `Promise` was an [almost monad](https://buzzdecafe.github.io/2018/04/10/no-promises-are-not-monads). The arrival and widespread adoption of generators and `async` and `await` syntax wasn't going to happen until a few years later.

# Teaching myself FP
Around 2015, I was sold on FP. I was especially interested in the promises it made, particularly in its suitability for concurrent and parallel programming. I also happened to have been drawn to Groovy in particular because of Bob Martin's [Clean Code video series](https://cleancoders.com/) and his endorsement of dynamic programming languages.

## A dalliance with Groovy
I was flirting with [GPars](http://www.gpars.org/) actors and its other concurrency primitives. I tried actors and just didn't see how they could compose in the way I've been getting used to—functionally. Maybe it was just my lack of industry experience but there weren't too many good examples to go by.

Googling Groovy often yielded comparisons with some other language called Scala. I was impressed with Groovy's HOFs and the one-liners but this other statically-typed language seemed to manage to be as expressive and concise as its dynamic counterpart!

## Scala
Some time later I came upon a [video](https://www.youtube.com/embed/b6yLwvNSDck) comparing Node to Play, a web framework written in Scala. I just had to know what the fuss was all about.

Poring over [Programming in Scala](https://booksites.artima.com/programming_in_scala_4ed), I immediately fell in love with the language. It removed my misgivings about clunky static type systems like Java's. It showcased data structures and case classes that were immutable **by default**. It boasted powerful HOFs; a batteries-included (although arcane at times) standard library; a beautiful, terse syntax; and a way to have minimally-intrusive strong and static types thanks to type inference.

### Akka?
Of course, the next step was figuring out how to cash in on FP using Scala. I have to admit I had been mostly dismissive of Akka's actor model because it wasn't the model of composability I was getting used to. Later on, I learned of the strength of actors in modeling system boundaries, and its suitability for distributed systems. Indeed, ["Akka is much more than just actors; there’s streaming, persistence and clustering, just to name the three most popular modules."](https://blog.softwaremill.com/scalaz-8-io-vs-akka-typed-actors-vs-monix-part-1-5672657169e1), and it has gotten much better at composition.

Something I've been finding out over time however, was a problem with Akka: its reliance on Scala's problematic built-in `Future`. Before I got around to diving deep into Akka, another book caught my attention.

### [The Red Book (Functional Programming in Scala)](https://www.manning.com/books/functional-programming-in-scala)
This is not an easy book but it is well worth it. Personally, I've had to pore over this book 2-3 times over the course of a few months just to _get_ it. Don't let the title fool you, the title doesn't give the impression that it's advanced material—something I came to realize only 3 years after. But what it had instilled in me would forever change how I saw programming, i.e. what pure FP had to offer. After I felt I had learned enough, the challenge was to start applying what I've learned to the real world.

### Scalaz, Cats
Scalaz (all of FP?) had this scary reputation but the red book prepared me very well. It was pretty straightforward and pleasant to read Eugene Yokota's [Learning Scalaz](http://eed3si9n.com/learning-scalaz/). I learned it around the point when iteratees were _the_ abstraction for purely functional stream processing. Another great book on Scalaz, [Functional Programming for Mortals](https://leanpub.com/fpmortals), came out in 2018. I think many functional Scala users will agree it's easier to go straight to learning Scalaz or Cats than [FPiS](#the-red-book-functional-programming-in-scala). [Cats](https://typelevel.org/cats/) was a fork of Scalaz that has come into its own as a core library in the vibrant [Typelevel ecosystem](https://typelevel.org/). They offer a great selection of libraries for the practical application of pure FP.

### FP, DDD, and functional effects
So far, getting into functional Scala was great and all but I felt there were still a few gaps in my knowledge. How do I do domain modeling? How does the DDD I learned while working in an OOP paradigm translate to FP? I turned to Debashish Ghosh's [Functional and Reactive Domain Modeling](https://www.manning.com/books/functional-and-reactive-domain-modeling). Great book. It helps bridge the gap between knowing FP and using it in projects.

Another question I started asking: how was I supposed to go about putting various functional effects together? `Either` and `Option` are great. `Reader` can be pretty handy. All these effects are nice and all but when using them together, it can get pretty hairy—especially when using them to write sequential code. This is because monads don't compose. Monad transformers, the would-be band-aid to this, aren't exactly known for their ergonomics and performance. Also, free monads just come with a lot of boilerplate. Not to mention they work better in some domains (think [Slick](http://scala-slick.org/), [Doobie](https://tpolecat.github.io/doobie/)) than others. Over time I felt I had to look at some other ways to do pure FP.

### Eff and Tagless Final
FP can be hard in its own way. Sure, OOP/imperative spaghetti code bases are harder but FP can get pretty verbose and messy. When I was learning [Eff](https://atnos-org.github.io/eff/index.html), I wrote [another article](/posts/eff-in-context) on it in the context of other FP approaches. Touted as an alternative to monad transformers, it offered a better way to put effects together. Granted, the typings can get arcane. It does have a great adoption story in Zalando though. It's up there among my favorite IO effects in Scala today, along with Monix and ZIO.

While getting my hands dirty with Functional and Reactive Domain Modeling, I remember chapters went by where the author would replace a domain service's effect type from `Try`, to `Future`, to `Kleisli` (which we write the `Reader` monad in terms of), and some others I may have missed. To me it begged the question: what if I could just parameterize my domain logic over some `F[_]` that I could bind to as late as possible? I experimented with the idea and eventually found out it was a part of a thing that had a name: tagless final. My current take on it is while there are benefits to using the principle of least power which tagless final allows you to write your domain logic with, the typeclasses one uses had better come with some laws. Then again, I don't have any professional experience using tagless final and neither have I used it in production for some non-trivial project so my opinion could still very well change. 

Not related to programming or anything technical, but I fell into a rut around this time in my FP journey. I hadn't been productive and I often found myself drained and not being able to code. Just opening my projects was taxing.

I had read about ZIO around this time from Mateus Kubuszok's excellent article on [IO monads](https://kubuszok.com/2019/io-monad-which-why-and-how/). It got me curious enough to check ZIO out.

### [ZIO](https://zio.dev)
What can I say? I was impressed. It has gotten to be my favorite functional effect right now. It has been a pleasure coding in it. I love that you can do pretty much anything in ZIO without having to know what a Coyoneda is (I still don't know).

Don't get me wrong, it helps to know typeclasses. It helps to know stuff like monoids, functors, applicatives, monads, traversables, and foldables. But there's something to be said about just using those typeclasses implicitly in your code (not Scala implicits) or as John De Goes would put it, "stealth FP".

FP can be verbose at times, like an animé character calling out their every move. ZIO is the character that bucks the trend and just does it.

Overall, I believe it's a perfect fit for Scala's language features with just the amount of type information—all the while making practical FP very accessible.

### Looking Forward

<figure class="float-right" >
  <img src="/media/scala-logo.jpg" />
  <figcaption>I mean come on, that's such a cool logo</figcaption>
  <figcaption class="attrib">
    <a href="https://www.flickr.com/photos/99087984@N00/5247567841">"scala-lang-logo"</a> by alejandrocrosa <br/>under CC BY-NC-SA 2.0
  </figcaption>
</figure>

A [#ScalaThankYou](https://twitter.com/search?q=%23scalaThankYou) is in order here. I love Scala. I love doing FP in it. It has such a great ecosystem and I've come to love the distinct, yet compatible ecosystems that have sprung up around it. I love Akka, Scalaz, Typelevel, and ZIO and all the other wonderful things people have built. The future is looking brighter with the promise of Scala 3. It's growing past its JVM beginnings: [Scala JS](https://www.scala-js.org/) 1.0.0 is [right around the corner](https://www.scala-js.org/news/2019/12/13/announcing-scalajs-1.0.0-RC2/) and Scala Native is looking better and looks pretty active.

I'm excited to see what amazing stuff its ecosystems come up with next. Maybe Scala will help make FP the default paradigm for writing applications?

# Next Steps
FP is a vast domain in itself. It's a great default paradigm for most modern applications. There is a lot of FP to do in various amounts in languages that will allow some of it. Haskell is certainly in my backlog of stuff to learn. Hopefully it gets the mind share it deserves.

However, there's still the matter of adoption. To this end I'm looking to continue my FP journey by sharing what I've learned so far with people in my country. I couldn't turn up any metrics, but my hunch is that the development culture here is still pretty much dominated by procedural and OOP, with languages such as PHP and JavaScript. Java and C# would score higher in corporate settings.

I'm currently working on video and web content in my mother tongue, Cebuano, in a bid to increase the adoption of FP here. I don't think the English-speaking world needs it as much as there's already tons of content out there, but I might as well localize into English too for completeness. 

All that said, [I could really use a job](https://www.linkedin.com/in/zach-albia).

I'm passionate about making stuff in functional Scala.

I could use some help in my journey, maybe you could use my help in yours. 
