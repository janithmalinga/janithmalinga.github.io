---
layout: post
title:  "Port Forwarding Fun!"
date:   2019-11-30 09:19:24 +0530
categories: General
---

### this post I'm going to discuss how to do port forwarding and connect hosts with different networks.

### I have 2 hosts which is in 2 different networks and it do not have dirrect connectivity. Below are the IP status of the hosts.

COMPUTER A(linux):
```
IP1: 10.10.10.1
IP2: 10.1.1.1
```
Computer C(Linux):
```
P1: 10.3.3.1
IP2: 10.2.2.1
```
### To connect these two hosts i'm going to use another host which connect to the networks of both computers.

Computer B(Windows):
```
IP1: 10.1.1.2
IP2: 10.2.2.2
```
Here are the command to connect two computers.

Computer A ==> Computer B
```
ssh -p 9002 -L20000:127.0.0.1:20000 userA@10.1.1.2
```
Computer B ==> Computer C
```
netsh interface portproxy add v4tov4 listenaddress=10.1.1.2 listenport=20000 connectaddress=10.3.3.1 connectport=20000
```
Computer C ==> Computer C
```
ssh -p 9002 -L20000:10.3.3.1:80 user@10.1.1.2
```
