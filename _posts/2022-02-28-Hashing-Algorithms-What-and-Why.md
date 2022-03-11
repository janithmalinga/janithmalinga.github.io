---
layout: post
title:  "Hashing Algorithms What it is? and How to identify"
date:   2022-02-28 08:12:24 +0530
categories: redteam general
---

Hashing is an special type of encryption algorithm which provides a fixed length of unique output string for any input. The input can be an image, document, anything you name it. 

## What is the purpose of using a hash?

When you download a document from internet how can you trust that is the same document that the original auther created, or is there some changes that have been done by any suspicious middle man. There are thousends of questions can arrise when the transport media can not be trusted. Well the answer for that is <b>hash</b>.

Hashing algorithm takes the document as an input and it gives us a unique string with fixed length as an output. So when you need to send the document to another person you can send the hash string along with the file. So that the other person can generate the hash using same algorithm and check if both are same. The hash can not be same for different files even if you add a single character the hash will gives you a different output.

## Types of hashes
Here are some most populer hash algorithms,
<ol>
  <li>MD5</li>
  <li>SHA1</li>
  <li>SHA2</li>
</ol>

### MD5 Hash

Message Digest 5 is an hashing algorithm which produces the output of 128 bit message digest represent in 32bit string.

### SHA1

Secure hashing algorithm produces an output of 160bit message digest represent by 40bit string.

### SHA2

Due to the security issues in SHA1 the improved version of algorithm is introduced it is called SHA2. SHA2 produces hash with below size of message digests,
<ul>
  <li>224 - SHA224</li>
  <li>256 - SHA256</li>
  <li>384 - SHA384</li>
  <li>512 - SHA512</li>
</ul>

and it represents the output in both 32bit and 64bit strings.

<table>
  <tr>
    <td>HASH</td>
    <td>Msg Digest size</td>
    <td>Represent String length</td>
  </tr>
  
  <tr>
    <td>MD5</td>
    <td>128 bits</td>
    <td>32 digits</td>
  </tr>
  
  <tr>
    <td>SHA-1</td>
    <td>160 bit</td>
    <td>40 digits</td>
  </tr>
  
  <tr>
    <td>SHA-2</td>
    <td>224,256,384,512</td>
    <td>64 bits</td>
  </tr>
  </table>
