# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

When the `forEach()` method loops over a given array, it does not actually return anything but rather calls a provided function on each element in that array. This callback is allowed to mutate the calling array.
Meanwhile, the `map()` method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new array of the same size.

2. What is the difference between a function and a method?

In javascript functions are blocks of code used to execute instructions on the web. It can either be declared (stated) or expressed ( by being stored in a variable such as `var`, `let` or `const`).
Now, differentiating between a function and a method, we need to approach it from the object oriented programming paradigm of javascript; Every function in javascript is an object. 
So when a function is declared or expressed in the window object or `Object`, without being in the scope of any outer function, we have a `function` . However, within the scope of an object, a function is referred to as a method of that object. It is invoked from the object namespace `newObj.theMethod()`. As everything, including a  function is an object in javascript, a function within a function is considered a method of that function.

3. What is closure?

Closure in simple terms, means a declared function will always refer to its outer scope chain to search for a referenced variable, whenever said variable is not defined in its own scope. Likewise, a function cannot access the variables and contents of a function inside its own scope.

4. Describe the four rules of the 'this' keyword.

RULE #1
Window Binding
Whenever a function is contained in the global scope, the value of `this` inside of that function will be the window object.
If none of the other rules are met, then JavaScript will default the this keyword to reference the window object.

RULE #2
Implicit Binding
Whenever a function is called by a preceding dot, the `this` keyword is referencing to the object on the left of the dot.

RULE #3
New Binding
Whenever you invoke a function with the `new` keyword, JavaScript will create a brand new object and call it `this`. If a function was called with `new`, the `this` keyword is referencing that new object that was created.

RULE #4
Explicit Binding
Whenever we invoke a function specifying where exactly and in what context we hope to invoke it we use the methods, `call`, `apply` and `bind`. These methods explicitly point us to which object `this` should refer to. 
 `call` is the standard method normally used.
 `apply` is used when it's preferable to output an array.
 `bind` is used to return an entirely different version of the referenced object.

5. Why do we need super() in an extended class?

We call `super()` inside of a subclass constructor method in order to call the parent constructor. `super()` allows us to access the  parent Class’ prototype.
So, `super()` works as a much elegant syntax, that explicitly call the properties of the parent class unto the sub class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
