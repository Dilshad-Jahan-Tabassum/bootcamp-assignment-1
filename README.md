#Bootcamp-assignment-1

##Questions/Answers

- What is the difference between null and undefined?

Ans: When we declare a variable but don't assign any value then it shows undefined and it's type also undefined. Null is a object and it is intentionally use to represent empty value. So, whenever we need to use null or undefined to any variable, we should use Null instead of setting an undefined variable.

- What is the use of the map() function in JavaScript? How is it different from forEach()?

Ans: map() function and forEach() function both are used in Array. But there's have some difference. Like, in the map() function it loop through all the elements in the array do the operations and return a new array but the original array doesn't change. On the other hand, in forEach() functions it loop through all elements and do the operations but it doesn't return any new array.

- What is the difference between == and ===?

Ans: (==) doesn't check the type. It checks only value between two variables. And (===) checks both value and type. So, (==) is less use in function because it returns true if values are same.If the value is in string it can't differentiate. And (===) is very efficient to use because it can differentiate any value is in string. So, it returns the value false.

- What is the significance of async/await in fetching API data?

Ans: The API fetching with async/await is very easy and maintainable. We know JavaScript works in synchronously and API works in asynchronously. So, with async/await is used in API so that it can works synchronously. And its also very easy to use for error handling.

- Explain the concept of Scope in JavaScript (Global, Function, Block).

Ans: Global scope gives access to use variable from anywhere in the code. While function scope gives access to use variable inside the function. On the other hand, Block scope gives access within the block.