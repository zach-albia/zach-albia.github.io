---
title: A simple puzzle solver - Part 1 
date: "2020-02-13"
template: "post"
draft: false
slug: "zio-puzzle-jewel-solver-part-1"
category: "Programming"
tags:
  - "Functional Programming"
  - "Domain Modeling"
  - "Scala"
description: A toy project
socialImage: "/media/is-this-tetris.jpg"
---

There's this game, Block Puzzle Jewel, available on [iOS](https://apps.apple.com/us/app/block-puzzle-jewel-legend/id1195770330) and [Android](https://play.google.com/store/apps/details?id=com.differencetenderwhite.skirt&hl=en).
One time I was obsessed and played it a lot for a spell.
It's kinda like Tetris without time pressure. Kinda.
I was so bad at it I thought I'd have a go at a solver that plays better than me.

This will be a series of posts on making a simple solver.
Nothing too fancy with machine learning yet as I've yet to learn it.
Maybe I'll come back to this as soon as I grok ML.

# Learning the game
So I set out to play it and the first thing that came to mind was
"Hey, this sure looks like Tetris, maybe I should play it like Tetris".

![Nope](is-this-tetris.jpg "Pfft, noob.")

Bad idea. Couldn't even get past the 500-point mark.
It was fun playing more rounds, but ultimately inefficient.

## The rules


- Some new shapes start appearing after a certain point threshold is crossed.

On a long enough timeline, the solution space shrinks to 0.

When it does, it's game over. 

As I was starting to suck less at it,
I noticed one strategy was giving me better scores: keep the board clear.

# A brute-force solution
