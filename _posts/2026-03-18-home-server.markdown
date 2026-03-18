---
layout: post
title:  "Making a Home Server"
description: "Making my own rudimentary Linux server at home"
date:   2026-03-18
categories: linux
---

Recently, I've been delving into Linux as a hobby - it's fun to customize your system *(I've also found Arch Linux to be fun, but I don't trust myself enough for it)*, and I've even switched to Fedora on my home computer.

About a week ago, I dug out my Dad's old PC out of the closet and installed Ubuntu Server on it.

It came pre-installed with SSH capabilities, which to me was mind-blowing already: being able to remotely control a server was something I didn't think I could do without a bunch of fancy tools.

I installed Plex Media Server onto it (which let me host my DVD rips in my home to where anyone could watch them) - if you're looking to get away from a major streaming service and have a computer and your favorite DVDs, I highly recommend it!

Next, I used a service called [Tailscale][ts] to let me access my local-hosted server from anywhere (over what they call a "tailnet"), which was super awesome.

Lastly, and probably the most interesting: I found an Ubuntu package called [Motion][mt] that lets me preview my camera feed, and it even saves videos when it detects motion.

Being able to SSH in remotely while I'm at university has been fun and I learned a lot about how Linux and computers in general work along the way.

![motd](/images/posts/31826.png){: width="100%" }

<h3>My custom MOTD header for the server</h3>

[ts]:   https://tailscale.com/
[mt]:   https://motion-project.github.io/
