## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.


#### .forEach

The `.forEach` method can be used to loop through a array's element in a descending order. The user can withdraw each element and add a callback. For example in this case I'll just console log the elements:

```javascript
let carArray = ["volvo", "bmw", "saab"]
carArray.forEach(car=> console.log(car))
"volvo", "bmw", "saab"
```

#### .map

The `.map` method uses every element in an array and add it to a new array together with a callback function:

```javascript
let carArray = ["volvo", "bmw", "saab"]
let newCarArray = carArray.map(car => car + " is a car")
console.log(newCarArray)
["volvo is a car", "bmw is a car", "saab is a car"]
```

#### .filter

The `.filter` method can filter out element from an array using a callback function do decide what parameter ug should look for. in this case I'll choose to extract all numbers over 2:

```javascript
let numberArray = [2, 3, 4, 5, 6]
let result = numberArray.filter(number => number > 2)
console.log(result)
[3,4,5,6]
```

#### .find

The `.find` method will return the value of the first element in the array that corrensponde whit the testing function: 

```javascript
let numberArray = [2, 3, 4, 5, 6]
let result = numberArray.filter(number => number < 5)
console.log(result)
2
```