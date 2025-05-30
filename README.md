---
languages: javascript
tags: conditionals
---

# Find a vowel!

![picture of vowels](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/js-vowels/vowels.jpg)

## Objective

Create a function `isAVowel` that accepts one argument, a letter. If the letter is a vowel (a, e, i, o, or u), the function shoulw return true. If not, it should return false. 

For the purposes of this lab, you can choose to do what you will with the letter `y`. The test suite is indifferent to it.

## Examples

Here are some examples:

```javascript
isAVowel("a")
// => true


isAVowel("x")
// => false
```

To run the specs follow these commands:
- first install the required node modules to run the tests
````npm install````
- to run in the command line run
````npm test -- spec/isAVowel.spec.js````
### or, via the custom script in package.json
````npm run answer````


## Instructions

Run the test suite to get started. Remember that JavaScript will return `undefined` unless you explicitly tell it to return something.

## Resources 

* [Stack Overflow](http://stackoverflow.com/) - [What does javascript function return in the absence of a return statement?](http://stackoverflow.com/a/1557759/2890716)

