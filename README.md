---
title: Programming Seminar Guide
layout: post
author: steffueue
permalink: /programming-seminar-guide/
source-id: 1mVwS7yajdtnJhOV5cxcfNvjQW-dvuSqar1HY10CSe80
published: true
---
Programming Seminar Guide

by Stephanie Stroka and Kaspar Etteron 18 and 19 November 2017

## Introduction to computers, programming and the Internet

Slides available at [http://www.it-course.ch/ITCC1.pdf](http://www.it-course.ch/ITCC1.pdf) and [http://www.it-course.ch/ITCC2.pdf](http://www.it-course.ch/ITCC2.pdf).

##### ITCC1

* 2: Hardware and Software

* 3: Input and Output

* 7: Bits and bytes (word length and overflow)

* 9: Operations (load & store, arithmetic & logical, control flow)

* 10: Assembly (example program)

* 19: Programming Language

* 20: Source Code

* 21: Compiler and Interpreter

* 22: Text Terminal (demo)

* 23: Demo: Integer Factorization

* 24: Operating System

* 25: Process (show the Activity Monitor on the Mac)

##### ITCC2

* 3: Introduction (circuit switching vs. packet switching)

* 5: Protocols (compensate for deficiencies of network like packet loss and bit errors)

* 6: Performance («ping» various servers on the command line)

* 7: Layers (provide different functionalities and allow composition, e.g. Wi-Fi/Ethernet)

* 8: Internet Layer (route packets through the network from IP address to IP address)

* 9: IP Address (IPv4 address: 32-bit identifier, i.e. only 2^32 = 4'294’967’296 addresses)

* 9: Dynamic Host Configuration Protocol (DHCP) ("plug-and-play") (show in settings)

* 12: Transport Layer (responsible for transporting packets between processes)

* 13: Port Numbers (16-bit number that designates the process for the operating system)

* 14: Transmission Control Protocol (provide reliable, in-order byte-stream data transfer)

* 15: Network Address Translation (alleviate the IPv4 address exhaustion, add firewall)

* 16: Firewall (show settings in system preferences)

* 17: Application Layer (many text-based, client-server protocols for specific purposes)

* 18: Domain Name System (DNS) («host», «dig» or «nslookup» on command line)

    * host and dig do not work on Windows. 

        * Use nslookup instead of host. The address is the one on the bottom.

    * to look up mail servers with nslookup, you can do so by typing

nslookup "set type=MX"

* 19: Simple Mail Transfer Protocol (SMTP) (port 25)

Look up the server that handles the mail for a certain domain:

$ host domain

Connect to the mail server and transmit the mail:

$ telnet mailserver 25

helo mailserver

mail from: sender@domain

rcpt to: recipient@domain

data

From: "Sender" <sender@domain>

To: "Recipient" <recipient@domain>

Subject: Subject

Message

.

quit

If you want to try this out on Windows 10, you need to enable telnet again. Check this article:

[https://social.technet.microsoft.com/wiki/contents/articles/38433.windows-10-enabling-telnet-client.aspx](https://social.technet.microsoft.com/wiki/contents/articles/38433.windows-10-enabling-telnet-client.aspx)

* 21: World Wide Web (system of interlinked hypertext documents accessed via the Internet)

* 22: Hypertext Transfer Protocol (HTTP) (port 80)

For websites served via HTTP (finish with an empty line and use an actual domain):

$ telnet domain 80

GET / HTTP/1.0

Host: domain

For websites served via HTTPS (finish with an empty line and use an actual domain):

$ openssl s_client -connect domain:443

GET / HTTP/1.0

Host: domain

## Introduction to the Hypertext Markup Language (**HTML**)

HTML is a [markup language](https://en.wikipedia.org/wiki/Markup_language) that describes the structure of Web pages. 

HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.

Browsers do not display the HTML tags, but use them to render the content of the page. 

### Before we start

#### Step 1:

Make sure that you have the brackets editor installed, or get it from [http://brackets.io/](http://brackets.io/).

#### Step 2:

Brackets has a feature that allows you to see how your web page is going to look like. This is called *live preview*. *Live preview* only works if you have Google Chrome installed, so make sure it is or download it from [here](https://www.google.com/chrome/browser/desktop/index.html). 

#### Step 3:

Create a new directory on your file system, e.g.* "Programming Seminar 2017"*. Switch to the directory and create another directory, called *"frontend"*. This will be your working directory.

### A first example

#### Step 1:

Create a new file in brackets and save it as index.html. This is our webpage.

Click on live preview ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_0.png) You should see a new empty window.

Now type anything in the editor, e.g. "Hello World", save (Ctrl + S) and reload the web page. You should see the text "Hello World" in your browser.

Live preview only updates automatically if you have proper HTML markup, which we do not have so far. We need the basic construct:

<table>
  <tr>
    <td><html>
    <head>
    </head>
    <body>
        Hello World
    </body>
</html></td>
  </tr>
</table>


#### Step 2:

HTML tags structure your content. Here are a few that are useful:

<table>
  <tr>
    <td><html></td>
    <td>Defines the start and end of an HTML web page.</td>
  </tr>
  <tr>
    <td><head></td>
    <td>Contains links to required CSS files, title definitions and document meta-data.</td>
  </tr>
  <tr>
    <td><title></td>
    <td>Defines the title of the web page. Belongs into the <head> tag.</td>
  </tr>
  <tr>
    <td><link></td>
    <td>References another external resource that is required for the web page, e.g. a CSS file. Belongs into the <head> tag.</td>
  </tr>
  <tr>
    <td><script></td>
    <td>Contains JavaScript code or links to a JavaScript file. Can be places anywhere in the HTML document, but it is recommended to put it before the closing </body> tag. The reason is that script files might be large and therefore slow down the loading of the visible webpage for the user.</td>
  </tr>
  <tr>
    <td><body></td>
    <td>Contains HTML tags that structure the content of the page.</td>
  </tr>
  <tr>
    <td><div></td>
    <td>Defines a section of the document.</td>
  </tr>
  <tr>
    <td><h1>, <h2>, <h3>,...</td>
    <td>A header (the numbers indicate different sizes. h1 is the biggest, h6 the smallest).</td>
  </tr>
  <tr>
    <td><p></td>
    <td>A paragraph.</td>
  </tr>
  <tr>
    <td><a></td>
    <td>A link to another web page.</td>
  </tr>
  <tr>
    <td><img></td>
    <td>An image.</td>
  </tr>
  <tr>
    <td><form></td>
    <td>Indicates that a form is following.</td>
  </tr>
  <tr>
    <td><input></td>
    <td>A text field that allows to insert a single-line text.</td>
  </tr>
  <tr>
    <td><textarea></td>
    <td>A multi-line text field.</td>
  </tr>
  <tr>
    <td><button></td>
    <td>A button.</td>
  </tr>
  <tr>
    <td><ul></td>
    <td>An unordered list.</td>
  </tr>
  <tr>
    <td><ol></td>
    <td>An ordered list.</td>
  </tr>
  <tr>
    <td><li></td>
    <td>A list item.</td>
  </tr>
</table>


A complete list can be found here: [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp). 

#### Step 3:

HTML tags can have attributes. Here are a few examples:

**General:**

<table>
  <tr>
    <td><div id="..."></td>
    <td>Uniquely identifies this tag with a label. This allows CSS rules or JavaScript functions to reference the tag.</td>
  </tr>
  <tr>
    <td><p style="..."></td>
    <td>Inline CSS.</td>
  </tr>
  <tr>
    <td><p class="..."></td>
    <td>Sets a class of styles. Multiple tags may apply the same style by defining the same class attribute.</td>
  </tr>
  <tr>
    <td><button onclick="..."></td>
    <td>Inline JavaScript, triggered when the content inside of the tag is clicked.</td>
  </tr>
</table>


Link:

<table>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/HTML"></td>
    <td>Adds a target to the link.</td>
  </tr>
</table>


Image:

<table>
  <tr>
    <td><img src="mickey.png"></td>
    <td>Adds an image source.</td>
  </tr>
</table>


To try out, save the following image into the working directory (html) as mickey.png:

Input:

<table>
  <tr>
    <td><input type=""></td>
    <td>There are different types of input, such as text, pw-text (shows *** instead of plain text), checkbox and radio.</td>
  </tr>
</table>


#### Step 4:

Apply:

<table>
  <tr>
    <td><html>
    <head>
        <title>Programming Seminar 2017</title>
        <link rel="stylesheet" type="text/css" href="main.css"/>
    </head>
    <body>
        <div id="main">
            <h1>Hello World!</h1>
            <h2>This is all about programming!</h2>
            <p>
                We are here in Olten, trying out some HTML. 
                <br/>
                For more references, check out <a href="https://www.w3schools.com/html/" target="_blank">this webpage</a>
            </p>
            <img src="mickey.png"/>
            <form action="/api/message" method="get">
                <label>Firstname:</label>
                <input name="firstname" type="text"/><br/>
                <label>Message:</label>
                <textarea name="msg"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div id="messages">
            <h2>Messages</h2>
            <div class="message">
                Message 1
            </div>
            <div class="message">
                Message 2
            </div>
        </div>
    </body>
</html></td>
  </tr>
</table>


## Introduction to Cascading Style Sheets (**CSS**) for styling

HTML is only about the logical structure. As you can see, a plain HTML page actually looks pretty ugly. This is where CSS comes into play. You can define different colors, sizes, fonts and positions using CSS.

### Format

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_1.png)

**Selector**: on which elements does this style apply

	Examples:

* div, a, p: the style is applied on all tags of this type.

* #messages: the style is applied on the tag with the id 'messages'.

* .message-group: the style is applied on all tags with the class 'message-group'.

**Property**: which property of the element is defined

	Examples:

* background-color: Sets a color

* background-image: Sets an image

* width: Defines the horizontal size of the element.

* height: Defines the vertical size of the element.

* font-family: Applies a certain font.

* text-alignment: Aligns the text on the left, right or center.

* border: Adds a border to the element.

* padding: Sets spacing inside of the element, e.g. between the border and the text inside.

* margin: Sets spacing outside of the element, eg. between the window edge and the border.

**Value**: which value is the property assigned with. The value depends on which property you are setting. The best resource to figure out which property values exist is this one: [https://www.w3schools.com/cssref/](https://www.w3schools.com/cssref/). 

### Most important style properties

#### Sizes

width, height

#### Colors

color, background-color

#### Fonts

font-size, font-family

#### Text-Alignment

text-alignment

#### Positioning

position, margin, padding

Have a look at the examples here: [https://www.w3schools.com/css/](https://www.w3schools.com/css/). 

### Example

Create a new file *main.css*:

<table>
  <tr>
    <td>/* All elements with class 'name' will have a font-size of 12px. */
.name {
    font-size: 12px;
}

/* All elements with class 'message-froup' will have a vertical spacing inside of the box (= padding) of 10px and a horizontal padding of 0px. */
.message-group {
    padding: 10px 0;
}

/* The element with the id 'messages' will have a spacing outside of the box (= margin) at the bottom. */
#messages {
    margin-bottom: 40px;
}</td>
  </tr>
</table>


You need to reference the main.css file in your index.html:

<table>
  <tr>
    <td><html>
    <head>
        <title>Programming Seminar 2017</title>
        <link rel="stylesheet" type="text/css" href="main.css"/>
    </head>
    <body>
        <!-- This is the body -->
    </body>
</html></td>
  </tr>
</table>


### IDs and Classes

The following table summarizes how HTML and CSS relate to each other. *<tag>* is a placeholder in this case, e.g. for <div>, <p>, <a>, etc.

<table>
  <tr>
    <td>HTML</td>
    <td>CSS</td>
  </tr>
  <tr>
    <td><tag></td>
    <td>tag { property: value; }</td>
  </tr>
  <tr>
    <td><tag id="unique">...</tag></td>
    <td>#unique { property: value; }</td>
  </tr>
  <tr>
    <td><tag class="common">...</tag></td>
    <td>.common { property: value; }</td>
  </tr>
</table>


The value of the id attribute ("unique" in the above example) should be unique throughout the document, whereas classes can be reused on as many tags in the document as you want.Make sure to replace the part in italic with actual tags, properties and values.

### Bootstrap

Bootstrap is a popular front-end component tool-kit. By simply including it you will see how your website design improves. Use the following template to start with bootstrap.

<table>
  <tr>
    <td><!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- JQuery library -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <!-- Bootstraps JavaScript library -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  </body>
</html></td>
  </tr>
</table>


[https://getbootstrap.com/docs/4.0/getting-started/introduction/](https://getbootstrap.com/docs/4.0/getting-started/introduction/) gives a good overview of the functionality and all available components of bootstrap. You can copy the examples into your own webpage.

Also have a look at the web page examples to get inspired:

[https://getbootstrap.com/docs/4.0/examples/](https://getbootstrap.com/docs/4.0/examples/)

[https://bootswatch.com/](https://bootswatch.com/)

## Introduction to JavaScript (**JS**) for dynamic web content

JavaScript is a programming language typically used in the web. Every browser runs JavaScript, so it is very easy to try it out, even as a programming beginner.

### Before we start

#### Step 1

Set up Brackets:

Linting helps the developer to catch errors early by showing error and warning messages in the editor. Brackets, by default, comes with JSlint, which does not have correct error and warnings for the JavaScript library that we will be using. Therefore, we need to use a better suited linting mechanism: JSHint.

Open brackets. In the menu, click on Debug -> Open Preferences File and add the following lines to the file:

<table>
  <tr>
    <td>    "language": {
        "javascript": {
            "linting.prefer": ["JSHint"],
            "linting.usePreferredOnly": true
        }
    }</td>
  </tr>
</table>


It should look similar to this:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_2.png)

(Don't forget the comma before the last property!)

### Core Concepts

Core concepts of any programming language are introduced in this section.

#### Variables

We are already familiar with the concept of variables from mathematics, e.g. in an equation f(x) = x we have x as a variable.

In JS, we can declare and assign a variable like this:

<table>
  <tr>
    <td>var x;</td>
  </tr>
</table>


#### Operators

We know classical operators from mathematics. In programming, they fall under the category of arithmetic operators.

##### Arithmetic operators

You are surely already familiar with those:

+, -, /, *

Here are a couple of other operators in JavaScript:

<table>
  <tr>
    <td>Operator</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>%</td>
    <td>The modulo operator. It calculates the remainder of an integer division.</td>
  </tr>
  <tr>
    <td>++</td>
    <td>The increment operator. It increments the value of a variable. If applied before the variable (++x), the increment happens before x is used. If applied after the variable (x++), the increment happens after x is used.</td>
  </tr>
  <tr>
    <td>--</td>
    <td>The decrement operator. It decrements the value of a variable. If applied before the variable (--x), the decrement happens before x is used. If applied after the variable (x--), the decrement happens after x is used.</td>
  </tr>
  <tr>
    <td>**</td>
    <td>The power-of operator. For example x ** 2 is x2.</td>
  </tr>
  <tr>
    <td>&, |</td>
    <td>The bitwise and and or. See Wikipedia for details.</td>
  </tr>
</table>


In JavaScript, there are a couple of other operators:

##### Assignment operators

We can assign a value to a variable..

###### Examples: 

x = 5

y = "some text"

z = x

##### Comparison operators

We can compare variables and values with each other. The result of a comparison operator is either true or false.

###### Examples: 

x == y  : If x and y are equal, the result is true, otherwise false.

x != y : If x and y are equal, the result is false, otherwise true.

x > y      : If x is bigger than y, the result is true, otherwise false.

x >= y    : If x is bigger or equal than y, the result is true, otherwise false.

x < y      : If x is smaller than y, the result is true, otherwise false.

x <= y    : If x is smaller or equal than y, the result is true, otherwise false.

##### Logical operators

Logical operators are only applied to values that are true or false or variables that have the value true or false.

<table>
  <tr>
    <td>Operator</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>&&</td>
    <td>The AND operator. 
The result of the calculation a && b is demonstrated with the following truth table:

a
b
a && b
false
false
false
false
true
false
true
false
false
true
true
true
</td>
  </tr>
  <tr>
    <td>||</td>
    <td>The OR operator.
The result of the calculation a || b is demonstrated with the following truth table:

a
b
a || b
false
false
false
false
true
true
true
false
true
true
true
true
</td>
  </tr>
  <tr>
    <td>!</td>
    <td>The negation operator.
The result of the calculation !a is demonstrated with the following truth table:

a
!a
false
true
true
false
</td>
  </tr>
</table>


##### String operator

There is exactly one string operator. It is called the concat operator and used for concatenation.

###### Example

var word1 = "Hello ";

var word2 = "World!";

var sentence = word1 + word2;

The sentence will be "Hello World!".

#### Functions

Functions are also well known from mathematics, e.g. f(x) = x.

Functions are given an input and produce an output.

In JS, we can define a new function like this:

<table>
  <tr>
    <td>function sum(x, y) {
  return x + y;
}</td>
  </tr>
</table>


From then on, we can call a function by its name:

<table>
  <tr>
    <td>sum(3, 2);</td>
  </tr>
</table>


There are predefined functions available in the browser. A very useful one is the following, which prints a string (= a character sequence) to the console.

<table>
  <tr>
    <td>console.log("Hello World!");</td>
  </tr>
</table>


#### Control Flow

Sometimes we need to make decisions based on an input or a calculation. Our program might not always follow the same path.

<table>
  <tr>
    <td>if (x > y) {
  console.log("x is bigger");
} else if (y > x) {
  console.log("y is bigger");
} else {
  console.log("x is equal to y");
}</td>
  </tr>
</table>


The *else if* and the *else *statement are optional.

#### Loops

A loop repeats an action (or statement) a number of times, until [condition] evaluates to false.

<table>
  <tr>
    <td>for ([initialExpression]; [condition]; [stepExpression]) {
  [statement]
}</td>
  </tr>
</table>


###### Examples

	The following example will print out the numbers 0 to 9. The number 10 is never printed, 

because the condition evaluates to false when i equals 10. i is a variable that is created for 

the scope of the statement (inside the curly brackets).

	for (i = 0; i < 10; i++) {

	    console.log(i);

}

The example below does the opposite. It starts with the number 9 and prints all numbers 

until 0.

for (i = 9; i <= 0; i++) {

	    console.log(i);

}

For reference, there are also other ways to build loops in JavaScript:

<table>
  <tr>
    <td>while ([condition]) { }               // statement must change the condition
do { } while ([condition])            // statement is executed at least once
for ([variable] in [object]) { }      // variable is the key of the iteration
for ([variable] of [array]) { }       // variable is the value of the array</td>
  </tr>
</table>


#### Types

JavaScript has an implicit and dynamic type system, which means that you cannot explicitly state what type a variable is (i.e., is it textual, a number, etc.?)

<table>
  <tr>
    <td>Boolean - can be either true or false
Null - has exactly one value: null
String - text
Number
  Integer - … -3, -2, -1, 0, 1, 2, 3 … 
  Floating point number - e.g. -1.6534, 204.43, 3.1415       ~ (with less precision)
  Infinity - through division by 0</td>
  </tr>
</table>


However, you can figure out the type of a variable x by executing typeof x.

### JavaScript Example

This expression outputs the string "Hello World!" on the console:

<table>
  <tr>
    <td>console.log("Hello World!");</td>
  </tr>
</table>


This function calculates the square of a number:

<table>
  <tr>
    <td>var square = function(number) {
	return number * number;
}</td>
  </tr>
</table>


The following example, which is embedded in HTML, prompts for a number (through a popup), calculates the factorial and outputs the factorial (again through a popup) when the button "Calculate" is clicked.

<table>
  <tr>
    <td><button onclick="alert(factorial(prompt('Number: ')))">Calculate</button>
<script>
            // Everything in the script tag is written in JavaScript!

            function factorial(x) {
                var result = 1;
                for (i = 1; i <= x; i++) {
                    result = result * i;
                }
                return result;
            }

            // And a recursive implementation
            function factorial2(x) {
                if (x == 1) { return 1; }
                else { return x * factorial2(x - 1); }
            }
</script></td>
  </tr>
</table>


### JavaScript Object Notation (JSON)

JSON is typically used to build objects in JavaScript and transfer data from a client to a server. An object is represented by key-value pairs. The key can have any label and the value can be a string, integer

<table>
  <tr>
    <td>{
  "name" : "Stephanie",
  "age" : 30,
  "job" : "Software Engineer",
  "interests" : ["programming", "reading", "dogwalking"]
}</td>
  </tr>
</table>


Note: We use commas in between the properties.

### JQuery

JQuery is a JavaScript library. A library is a collection of functions that someone wrote to make your life easier and not to re-invent the wheel.

Reference: [https://jquery.com/](https://jquery.com/) 

#### Examples

<table>
  <tr>
    <td>$("#unique"); // Returns the HTML tag/element with the id="unique".
$(".common"); // Returns all the HTML tags/elements with class="common".
$("div"); // Returns all the <div> elements in the document.

$("#section1").hide(); // Hides the tag/element with the id="unique".
$("#section1").show(); // Shows the tag/element with the id="unique".

function executeOnClick() { // Declares a new function.
    alert("The paragraph has been clicked!");}

$("#paragraph").click(executeOnClick); // Registers the above function on the tag with the id="paragraph" so that it is executed when the tag is clicked.

var paragraph = $("<p class='common'>Hello World</p>"); // Creates a paragraph element with the class 'common' and stores it in the variable.

$("#submit").click(function() { // Registers an anonymous function on the tag with the id="submit" so that it is executed when the tag is clicked.
    var name = $("#name").val(); // Retrieves the value of the input field with the id="name" and stores it in a variable with the name "name".
    var message = $("#message").val(); // Does the same with the textarea.

    var newHeader = $("<h4 class='name'>" + name + "</h4>"); // Creates a new header with a class 'name' and the value of the element with id 'name'.
    var newParagraph = $("<p class='message'>" + message + "</p>"); // Creates a new paragraph with a class 'message' and the value of the element with id 'message'.
    $("#messages").append(newHeader); // Appends the new header to the element with the id 'messages'.
    $("#messages").append(newParagraph); // Appends the new paragraph to the element with the id 'messages'.

    // Prepares the data that is going to be sent to the backend.
    var data = {
        "name" : $('#name').val(),
        "message" : $('#message').val()
    }
    // Sends the data to the backend using the HTTP method POST.
    $.ajax({
        type: "POST",
        url: "https://psbackend.herokuapp.com/api/messages",
        data: data,
        success: function() {
      console.log("Data successfully posted");
        }
    });

});

// Requests data to the backend using the HTTP method GET and outputs it on the console.
$.ajax({
  url: 'https://psbackend.herokuapp.com/',
  method: 'GET'
}).done(function(data) {
console.log(data);});</td>
  </tr>
</table>


## Introduction to **Node.js** for server-side scripting

### Before we start

#### Step 1

Download node js here: [https://nodejs.org/en/](https://nodejs.org/en/). Please choose the LTS version!

#### Step 2

Download the example from here: [https://github.com/stephaniestroka/nodejstutorial](https://github.com/stephaniestroka/nodejstutorial) by clicking on "Clone or download" -> "Download ZIP". 

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_3.png)

#### After you have downloaded the zipfile, please extract it in a suited directory, e.g.

on Windows:

C:\Users\Stephanie Stroka\Documents\Studienstiftung\Programming Seminar 2017\

on MacOS:

/Users/KasparEtter/Documents/Studienstiftung/Programming Seminar 2017/

#### Step 3

If you are on Windows, open the *node.js command prompt* (see screenshot below) or another terminal, e.g. *PowerShell*.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_4.png)

If you are on MacOS or Linux, open the terminal.

#### Step 4

Switch into the directory by using the command "cd", e.g. 

On Windows:

cd 'C:\Users\Stephanie Stroka\Documents\Studienstiftung\Programming Seminar 2017\nodejstutorial'

On MacOS/Linux:

cd /Users/KasparEtter/Documents/Studienstiftung/Programming Seminar 2017/nodejstutorial

#### Step 5

Download required NPM modules.

<table>
  <tr>
    <td>npm install express --save
npm install body-parser --save
npm install sqlite3 --save</td>
  </tr>
</table>


Note: We experienced problems with people that had nodejs in version 9.2.0. Please make sure that it is 8.9.1. To do so, you can use the command "node -v" on the command line/terminal. -v stands for version.

### A first example

Let's take one step back before looking at the example that we just downloaded. To understand how an HTTP request is accepted and executed on the server side, we are going to create a new server JavaScript file called "*firstexample.js*", which accepts a network request and respond with a simple "Hello World!".

#### Step 1

Create a file called firstexample.js.

#### Step 2

Copy the following code:

<table>
  <tr>
    <td>const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello World!");
})

app.listen(8080, () => console.log('App listening on port 8080!'))</td>
  </tr>
</table>


In this example, we use the express module to accept requests on port 8080 with HTTP method GET on the default path /.

#### Step 3

Now go back to the NodeJS command prompt or terminal and start the node server by typing:

<table>
  <tr>
    <td>node server.js</td>
  </tr>
</table>


#### Step 4

Visit [http://localhost:8080/](http://localhost:8080/) and observe what happens.

Congratulations, you build your first webserver that accepts requests on path / and responds with "Hello world".

#### Code details

The require function loads an external module. In this case, the module *express *is loaded, which handles incoming HTTP requests and outgoing HTTP responses.

const express and const app are two variable declarations for variables that are read-only. So it is not possible to override them after they are assigned.

express() creates a new object and initializes the webserver. The webserver object is stored in the variable app.

With app.get() we declare that the webserver should handle incoming requests on path / with the function that is given as a second argument.

With app.listen() we say that the webserver should listen on port 8080 for incoming network requests.

### Serving static files example

In this next example, we are going to serve static files from the "public" directory. Static files are files that do not have to be dynamically generated on the server side. In our case, that's the index.html, main.css, index.js and the image mickey.png. All those files can be found in the nodejstutorial base directory under the public directory.

#### Step 1

Change the code as follows:

<table>
  <tr>
    <td>const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(8080, () => console.log('App listening on port 8080!'))</td>
  </tr>
</table>


#### Code details

As you can observe, we removed the get function that serves requests for / and instead called the function "use()" with the argument express.static(), which itself takes the directory in which our public files are as an argument.

### Define APIs (Application Programming Interface)

Sometimes we want to generate data dynamically instead of serving static data from the public directory. In our example, we eventually want to be able to accept requests on the path /api/messages for adding new messages and receiving a list of existing messages,

We can observe this in the existing server.js from the downloaded example.

(Only code snippets are shown from know on. Please have a look at server.js for the complete file)

<table>
  <tr>
    <td>// Defines a new API at the URL path /api/messages with method GET.
// If called, all messages are returned to the client.
app.get('/api/messages', function (req, res) {
    // Retrieve all stored messages
});

// Instructs the app to parse a URL-encoded POST request body.
app.use(bodyParser.urlencoded());

// Defines a new API at the URL path /api/messages with method POST.
// If called, a name-message object is read from the request body and 
// passed to the addMessage() function.
app.post("/api/messages", function (req, res) {
    // Store a new message
});</td>
  </tr>
</table>


In the above example, we declare two API methods on path /api/messages: The first one listens for incoming GET requests and the second one for incoming POST requests. Before the second one, we also need to give a hint about how the request body is supposed to be parsed (in our case, it is URL encoded).

### Implement the APIs

We now want to add some functionality to the APIs. 

#### Step 1

First of all, to keep the code clean and maintainable, we want to create a new module. This helps us to keep logically coherent code together.

To do so, we can observe that we have a messages.js file in the api directory.

This messages.js file contains our messages module. It contains two methods that are accessible from outside, namely addMessage() and getMessages():

<table>
  <tr>
    <td>exports.addMessage = function(message) {
}

exports.getMessages = function(onresult) {
};</td>
  </tr>
</table>


To make those methods available to the outside, they need to be prefixed with "exports." (in other, more correct terms, they are added to the exports object, which is available in the NodeJS  development environment).

Now we can go back to the server.js and observe that the messages module is imported using "require()":

<table>
  <tr>
    <td>// Includes our own 'messages' module, which you can find in in the base directory under 'api/messages.js'.
const messages = require('./api/messages');</td>
  </tr>
</table>


We can also observe the content of the API definitions from the previous section:

<table>
  <tr>
    <td>// Defines a new API at the URL path /api/messages with method GET.
// If called, all messages are returned to the client.
app.get('/api/messages', function (req, res) {
    messages.getMessages(function (rows) {
        res.send(rows);
    });
});

// Instructs the app to parse a URL-encoded POST request body.
app.use(bodyParser.urlencoded());

// Defines a new API at the URL path /api/messages with method POST.
// If called, a name-message object is read from the request body and passed to the addMessage() function.
app.post("/api/messages", function (req, res) {
    messages.addMessage(req.body);
    res.sendStatus(200);
});</td>
  </tr>
</table>


In the GET /api/messages implementation, we call getMessages() and in the POST /api/messages implementation we call addMessage() with the request body which should be correctly parsed thanks to the bodyParser.urlEncoded().

To understand the details of the addMessage() and getMessages() functions, we first give an overview of SQL in the next section.

## Introduction to **SQL** for the persistence of data

SQL stands for [Structured Query Language](https://en.wikipedia.org/wiki/SQL) and consists of a [data definition language](https://en.wikipedia.org/wiki/Data_definition_language), [data manipulation language](https://en.wikipedia.org/wiki/Data_manipulation_language), and [data control language](https://en.wikipedia.org/wiki/Data_control_language). Its purpose is to store and retrieve data to and from a [relational database](https://en.wikipedia.org/wiki/Relational_database_management_system). Such a database keeps all its data in tables (similar to an Excel sheet). There are many relational databases and the most-popular open-source databases are SQLite, MySQL/MariaDB, and PostgreSQL. Unfortunately, each of them understands a slightly different dialect of SQL. In the following, we'll see how to create a table, how to insert and delete a row, and how to query a table with SQLite. The full syntax can be found at [https://www.sqlite.org/lang.html](https://www.sqlite.org/lang.html).

##### How to Install

[https://www.sqlite.org/download.html](https://www.sqlite.org/download.html)

##### Creating a Table

Documentation: [https://www.sqlite.org/lang_createtable.html](https://www.sqlite.org/lang_createtable.html)

create-table-stmt:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_5.gif)

column-def:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_6.gif)

Example: CREATE TABLE IF NOT EXISTS comments (key INTEGER PRIMARY KEY, time INTEGER NOT NULL DEFAULT CURRENT_TIMESTAMP, value TEXT NOT NULL);

##### Inserting a Row

Documentation: [https://www.sqlite.org/lang_insert.html](https://www.sqlite.org/lang_insert.html)

insert-stmt:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_7.gif)Example: INSERT INTO comments (value) VALUES ("hello world");

##### Deleting a Row

Documentation: [https://www.sqlite.org/lang_delete.html](https://www.sqlite.org/lang_delete.html)

delete-stmt:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_8.gif)

expr:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_9.gif)

Example: DELETE FROM comments WHERE key = 1;

##### Querying a Table

Documentation: [https://www.sqlite.org/lang_select.html](https://www.sqlite.org/lang_select.html)

select-stmt:

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_10.gif)

Example: SELECT * FROM comments WHERE value LIKE "%world%" ORDER BY time ASC;

