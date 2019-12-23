S-expression calculator
=======================

command line program that acts as a simple calculator: it takes a
single argument as an expression and prints out the integer result of
evaluating it.

Program is implemented in JavaScript
Invocations should look like:
$ node s-expression-calculator.js "(add 12 12)"
$ node s-expression-calculator.js "(multiply 3 (multiply (multiply 3 3) 3))"
$ node s-expression-calculator.js "123"

Examples
--------
"(add 1 (multiply 2 3))"
=> 7

"(multiply 2 (add (multiply 2 3) 8))"
=> 28
