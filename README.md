# framework_aria

Learning materials about some cool frameworks like Node.js, jQuery, and others.

<p align="center">
  <a href="#introduction">introduction</a> •
  <a href="#table-of-contents">table of contents</a> •
  <a href="#download">Download</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

<p id="introduction"></p>

## 🚀 introduction
In the context of web development, I have studied frameworks. This file encompasses various libraries such as Node.js, jQuery, providing swift speed for a website. This resource serves as a guide for utilizing these framework libraries.

<p align="left"> <a href="#">
  <img alt="jQuery" src="https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white" />
  <img alt="node.js" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white" />
  </a>
</p>

<p id="table-of-contents"></p>

## 📋 Table of Contents
<details id="back">
  <summary><b>JQuery</b></summary>
  
  1. **introduction**
     - jQuery is a nimble and lightweight JavaScript library crafted to streamline HTML manipulation, animation, event handling, and document interaction.
  2. **Install JQuery with CDN**
     - One of the easiest ways to install jQuery is by using a CDN. Add the following script in the <head> of your HTML:
       ``` <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> ```
  3. **Install JQuery with Local Storage**
     - Download jQuery from the official website.
     - Copy the jQuery file (usually named jquery-x.x.x.min.js) to your project folder.
     - Add the following script in the <head> of your HTML:
       ```<script src="path/to/jquery-x.x.x.min.js"></script>```
  4. **Install JQuery with NPM or YARN**
     - If you are using Node.js and npm or Yarn as your package manager, you can install jQuery through the terminal:
       ```
       # Using npm
       npm install jquery

       # Using Yarn
       yarn add jquery
       ```
     - After installation, you can import jQuery in your JavaScript file:
       ```import $ from 'jquery';```
  5. **Implementation examples**
     - Without jQuery
       ```
       document.getElementById('hideButton').addEventListener('click', function() {
         document.getElementById('myElement').style.display = 'none';
       });
       ```
     - with jQuery
       ```
       $(document).ready(function() {
         $('#hideButton').click(function() {
           $('#myElement').hide();
         });
       });
       ```
</details>

<p id="download"></p>

## 🔨 download

1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where you want to save this project.
3. Use the following command to download the project from the GitHub repository:
```sh
git clone https://github.com/ariafatah0711/framework_aria.git
```

<p id="related"></p>

## 📈 related

<p id="license"></p>

## ©️ license
<a href="https://github.com/ariafatah0711" alt="CREATED"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=CREATED%20BY&message=ariafatah0711&color=000000"></a>
<a href="https://github.com/ariafatah0711/ariafatah0711/blob/main/LICENSE" alt="LICENSE"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=LICENSE&message=MIT&color=000000"></a>
