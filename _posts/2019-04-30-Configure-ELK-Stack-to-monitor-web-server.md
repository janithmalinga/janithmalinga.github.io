---
layout: post
title:  "Configure ELK Stack to monitor web server"
date:   2019-04-30 09:19:24 +0530
categories: jekyll update
---
ELK Stack is a combination of three opensource softwares (elasticsearch, logstash and kibana) which makes an excellent log collection, analysing and monitoring platform. Before reading this blog post I recomend you to get a good understanding about what is ELK Stack(If you don't have any idea what ELK Stack is) which I'm not going to discuss here, You can read everything about ELK Stack in elasticsearch web site.  

This article is mainly about "How to configure ELK Stack to monitor web server"

First of all let's understand the main purpose, whenever something happens in our web server we need to see the activity. What are the activities which could happen? Same IP send multiple requests within a few second which can be a bruteforce attack, sending a malicious payload which can be sqli or xss attack, Lot of bytes transferred to a single IP which can be a server compremisation, etc... 

In this exercise we are going to build elk stack on a ubuntu 18.04 computer. The commands may change if you are using different OS. So let's build the elk stack.

### Install Elasticsearch

Use [this][install-elasticsearch] reference to install elasticsearch

### Install logstash

Use [this][install-logstash] reference to install logstash

### Install kibana

Use [this][install-kibana] reference to install kibana

Ok installation part is done now we need to configure these three components to work together. There is no need to configure kibana it already configured to talk to elasticsearch at the installation. 

### Configuring logstash

We are going to use filebeat in web server to send logs. So the input should be beats and the port should be the exact same as in filebeat. Logstash should send it's output to elasticsearch. We can use filter to aggregate the values. Below is a simple logstash config file we are going to use in this exercise.

[install-elasticsearch]:  https://github.com/janithmalinga/ELK-Stack-Stuff/blob/master/elasticsearch/elasticsearch.md
[install-logstash]:       https://github.com/janithmalinga/ELK-Stack-Stuff/blob/master/logstash/logstash.md
[install-kibana]:         https://github.com/janithmalinga/ELK-Stack-Stuff/blob/master/kibana/kibana.md
