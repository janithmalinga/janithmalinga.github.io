---
layout: post
title:  "Drop SSH Key To Get a Normal Shell"
date:   2020-02-12 11:11:04 +0530
categories: redteam ctf
---

Sometimes when we conduct pentesting we get a least privilaged shell which we can't do anything, the simplest way to change that shell to 
fully functional shell is droping ssh key and connect using ssh. 

## generate SSH key
```
ssh -f myssh-key
```
This command will create 2 files in the current folder
<ol>
<li>myssh-key - This is the private key</li>
<li>myssh-key.pub - This is the public key which needs to be in other machine authorized_keys file</li>
</ol>

## Copy The Public Key
![Copy Public Key](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_ssh/1.png)

## Paste it to the victim machine authorized_keys file
![Paste Key](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_ssh/2.png)

## Change the permission of private key
```
chmod 600 myssh-key
```

## Connect using ssh
```
ssh -i myssh-key user@<IP>
```
