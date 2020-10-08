---
layout: post
title:  "Zip File Password Cracking"
date:   2020-01-17 11:11:04 +0530
categories: redteam ctf
---

There are several password crackers to crack encrypted zip files, In this blog I'm going to talk about fcrackzip tool to crack the passwords.

## First let's create the encrypted zip file
```
zip --encrypt user.zip user.txt
```
![Create zip file](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_zip/zip-1.png)

## Use fcrackzip to crack the password
```
fcrackzip -u -D -p /usr/share/wordlists/rockyou.txt user.zip
```
![Decrypt zip file](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_zip/zip-2.png)
