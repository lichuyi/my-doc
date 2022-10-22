---
title: npm的多脚本命令执行
date: 2022-06-22 11:52:30
permalink: /pages/8fbf8e/
categories:
  - 知识碎片
tags:
  - npm
---

npm 的多脚本命令执行
在 package.json 中可以设置自定义脚本命令。
串行执行（series）：脚本之间使用 && ( 两个 & 符号 ) 连接，脚本会一个个按顺序执行，前一个脚本执行结束，才能后执行下一个脚本。
node test.js && node test2.js

并行执行（parallel）：脚本之间使用 & ( 一个 & 符号 ) 连接，脚本会同时执行，同时执行可以提高执行效率。
node test.js & node test2.js

在 window 或其他不支持&的时候，可以使用 npm-run-all 进行操作

```cmd
npm i npm-run-all -g


//  串行执行（series）
npm-run-all -s 脚本1 脚本2 脚本3 脚本4

//  并行执行（parallel）
npm-run-all -p 脚本1 脚本2 脚本3 脚本4
```
