---
layout: post
title:  "Using LFI and SMTP to Get a Reverse Shell"
date:   2020-02-12 08:12:24 +0530
categories: redteam ctf
---

Local file inclusion or LFI can be used in many ways to execute remote commands and get a reverse shell injecting commands through 
apache access log or injecting commands through error logs are some of them. This article is little bit different than those techniques
we are going to send the payload through SMTP(mail) and then we are going to execute remote commands.

This image shows the lfi that I have found,

![LFI by burpsuite](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/lfi-smtp-1.png)


