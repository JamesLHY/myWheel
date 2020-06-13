# pure-wheel 一个基于 Vue 的轮子

[![Build Status](https://travis-ci.org/JamesLHY/myWheel.svg?branch=master)](https://travis-ci.org/JamesLHY/myWheel)
![npm](https://img.shields.io/npm/v/pure-wheel)
## 介绍

学习 Vue 过程中做的一个UI框架
## 开始使用

1. CSS样式

    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing:border-box} // IE 8 及以上浏览器默认支持此样式
    ```

    还需要设置默认颜色等变量（后续将改为SCSS）
    ```
    :root{
         --button-height:32px;
         --font-size: 14px;
         --button-bg:white;
         --button-active-bg:#eee;
         --border-radius:4px;
         --color:#333;
         --border-color:#999;
         --border-color-hover:#666;
       }  //IE 15 及以上支持此样式
    ```
   
2. 安装 
    ```
   npm i --save pure-wheel
    ```   
 
3. 引入
    ```
    import {Button, ButtonGroup,Icon} from 'pure-wheel'
    import 'pure-wheel/dist/index.css'
   
    export default{
        name:'app',
        components: {
            HelloWorld,
            'g-button': Button,
            'g-icon': Icon    
        }
   }
    ```
   

    
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
作者：lhy

