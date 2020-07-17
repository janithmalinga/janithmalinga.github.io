---
layout: post
title:  "Finding Passwords Hidden In Images (Steganography)"
date:   2020-02-18 08:12:24 +0530
categories: redteam ctf
---

While conducting a ctf I have found an image with ssh key hidden in it, In this post I'm going to talk about how to extract a hidden ssh key from a image and then 
extract using john the ripper.

## Check for hidden passwords using strings
```
strings image.jpg
```

## Check with steghide for hidden ssh keys
```
steghide extract -sf image.jpg
```
![steghide](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_stegno/stegno-01.png)

we have found the key in encrypted format. Let's Decrypt the file and find the password.

## Convert to john type using ssh2john
```
ssh2john.py id_rsa > id_john
```
![steghide](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_stegno/stegno-02.png)

## Crack the password using john

Final task is to crack the password using john. To complete this task I'm using rockyou.txt as my password file.
```
john id_rsa_john --wordlist=/usr/share/wordlists/rockyou.txt
```
![steghide](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_stegno/stegno-03.png)
