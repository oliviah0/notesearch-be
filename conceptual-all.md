# **Week 1**

### _**What is Big O notation and why does it matter?**_

Big O notation is a way to measure the performance characteristics
of an algorithm as the input to the algorithm grows.

### _**What is time complexity?**_

An algorithm's time complexity is a measure of how the runtime of an
algorithm grows as the input grows, and is typically measured with Big O 
Notation. 

### _**What are some differences between arrays and objects?**_

Some differences include:

- Arrays have numerical keys; object keys are (typically) strings.

- Because of their numerical keys, arrays have a natural ordering, while objects do not.

- When you loop over an array, you traverse from first index to last; 
the rules for iteration over an object are more complicated.

- Arrays and objects have different built-in methods (e.g. arrays have a `map`, objects don't).

- You can access keys in an object using dot notation or bracket notation; 
to access a value in an array, you use bracket notation.

### _**What are some differences between `var` and `let`?**_

- variables declared with `let` are scoped to the nearest function or block;
variables declared with `var` are only function scoped.

- you can redeclare variables with `var`, but not `let`.

### _**What are some differences between `let` and `const`?**_

- `let` variables can be reassigned, `const` variables cannot.

### _**What are some differences between arrow functions and the function keyword?**_

- Arrow functions have a shorter syntax

- Arrow functions have an implicit `return` if their function body is a single expression

- Arrow functions don't get their own `arguments` keyword

- Arrow functions don't get their own `this` keyword

### _**What is the purpose of the rest operator?**_

The rest operator collects the remaining function arguments and puts them
into an array inside the function body.

For example, if we have:

```
function someFn(a, b, ...others) {
  // do stuff
}
```

and we call someFn(1, 2, 3, 4, 5), then the scope of `someFn` will have a 
variable called `others` whose value is the array [3, 4, 5].

### _**What is the purpose of the spread operator?**_

The spread operator spreads an array into function arguments. For example,
`Math.max` accepts an unlimited number of arguments. If we have an array
that we want pass to this function, we can spread it out when we pass it in:
`Math.max(...[4, 2, 1, 8, 5, 6])`

TL;DR - rest pulls function arguments into an array, spread extracts array elements
and passes them as function arguments.

### _**What is Object Oriented Programming?**_

Object oriented programming is a paradigm in which you use classes and instances
to manage data and functionality in your application. By encapsulating functionality into
classes and creating instances from those classes, it can be easier to manage complexity
as your application grows.

### _**What is a class? When would you make one?**_

A class is like a blueprint used to create instances. It's helpful when you know that you
will need to create instances that should share functionality, but will have different
individual data. For example, you could have a triangle class to create triangle instances;
each triangle could differ in the lengths of its 3 sides, but all triangles would need
to be able to do similar things (e.g. calculate their area or perimeter).

### _**What is an instance?**_

An instance is an object created from a class. In JavaScript, we create these instances
invoking the class with the `new` keyword, and passing it any data needed to create
the specific instance.

### _**What is the keyword `this`?**_

The `this` keyword is a reserved keyword in JavaScript. Every (non-arrow) function
gets a value for this keyword. Inside of a class, the `this` keyword will usually refer to the
current instance.

### _**What does the `bind` function do?**_

`bind` is a method on functions. It returns a new function to you, and allows you to reassign the
value of the keyword `this`.

For example, suppose you have a function:

```
function fn(a, b, c) {
  // do stuff
}
```

When you call `fn.bind`, you get a new function which will be like a copy of `fn`. The first argument to bind will be the value of `this` in the returned function copy. Any subsequent arguments to `bind` will allow you to preset arguments: for instance, `fn.bind({}, 1)` will return a function with the same body as `fn`, but the value of the keyword this will be `{}`, and the value of `a` will be 1.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 2**

### _**What are differences between ``display: inline`` and ``display: block``?**_

``display: inline`` does not respect width or height properties, and allows elements  to share horizontal space. ``display: block`` elements respect width and height properties, and stack vertically.

### _**What are some advantages to using a CSS framework like Twitter Bootstrap?**_

One benefit is that these frameworks can allow you to quickly get a polished-looking website up and running, without having to pour hours into building your own grid system or base styles. Another benefit is that it gives developers a shorthand, because these popular frameworks are often used across projects and companies.

### _**What is jQuery?**_

jQuery is a library for manipulating the DOM, adding event listeners, animating elements, and making HTTP requests. Libraries are smaller than frameworks and therefore do not have the same amount of documentation and a set of strict ways that you should use the library unlike a framework.

### _**What is a jQuery object?**_

A jQuery object is not an HTML object. It is an object that is specific to jQuery that you can perform actions specific to jQuery such as parent(). This jQuery object can however be inserted into the DOM as an HTML object. It is frequently the returned value of jQuery methods so that it can be chained - `$("h1").text("awesome").css("color","red").attr("id","main-heading")` etc.

### _**When might you not use jQuery?**_

The DOM API is more standardized than it used to be, which makes jQuery less valuable. If you are making a simple application, then it doesn't do anything that the DOM API doesn't which could create an unnecessary dependency.

### _**What is event delegation? Why would you use it?**_

Event delegation is allowing an element to be the delegate for an action. For example, if you have many "li" elements inside an "ol" element and you want an action for each "li" then you can assign an event listener just to the "ol" which will be the delegate for all the "li" elements. This allows for one event listener instead of many.

### _**What is the `event` object? What kinds of things are in it?**_

The event object is an object that contains information about the event triggered. One property of the event object that is useful is the event.target property on the event object which is the HTML element of the event that was triggered. You can also access the X/Y coordinates of an event and much more in the event object.

### _**In the Hack or Snooze API project, what did we use async/await for?**_

We used async/await to handle asynchronous actions, specifically AJAX requests. We used the await keyword to pause/block code until we received a response and used the async keyword so that we could use await inside of functions.

### _**What happens if you forget the `async` keyword on the declaration of a function that uses `await` inside of it?**_

A SyntaxError will be thrown so make sure you always use the `async` keyword when defining a function that needs to use the `await` keyword.

### _**What happens if you forget the `await` keyword in front of an asynchronous expression?**_

The return value will be a promise instead of the eventual value of the async expression (we'll talk more about promises when we get to Node).

### _**What is the difference between a static method and an instance method?**_

Static methods are called directly on the class, whereas instance methods are called on the instance. You create static methods to either make special instances or when you need behavior that needs to exist before an instance is made (trying to see if something is an array using Array.isArray)

### _**In JS: `let a = [1, 2, 3]; b = a.slice(); a.push(4);`: does `b` contain 4? Why or why not?**_

`b` does **not** contain 4 because it is a different address in memory. Since we used the `slice` function, `a` and `b` are not the same reference anymore.

### _**What are some strategies you've learned for being organized in larger projects, like Hack or Snooze?**_

We learned a few!

- Separating your logic into different JS files (one for the UI, another for the OO logic)
- Being mindful about variable names and creating descriptive variables and function names
- Documenting our functions so that they are more easily understood
- Using `git` and committing frequently

### _**What is a hostname?**_

The hostname is the nickname for the server that a website is hosted on.

### _**What is an IP address?**_

It is a unique address that points to a computer on the network. It is formatted as four numbers between 0-255 seperated by a period. Since this could lead to issues with availibility of numbers there also a concept of a virtual IP address. For example, the rithm school network would have a globally unique IP address and each computer would have a unique vitual IP address within that network.  This will not be globally unique but unique within the network. This still allows for unique identification of a device without a globally unique IP address.

### _**What is a port?**_

Every server has 65,535 unique ports that you can talk to. In the analogy of the house, the would refer to the doors of the house. There are many different ways to access a server and the port will identify which method you are trying. Port 80 for example will correspond to an http protocol. If you access port 80 then the server is going to be expecting that protocol when communicating.

### _**What is DNS?**_

When your device is attempting to connect to a website it tries to find the website you are trying to access. First it will try the cache if you visited the site recently, then it will try the router, then the ISP. If the ISP such as Comcast cannot find the website then there is a set of computers whose job it is to find the website which you are looking for. These computer are the DNS servers which attempt to store where the location of websites are. The DNS is like the phonebook of the internet.

### _**What is an HTTP header?**_

Headers contain information about the data being sent in an HTTP request. Information such as hostname, date, language, cookies, authorization, and more.

### _**What is an HTTP Response Code?**_

The response code tells you information about how the HTTP request was received. For example, a code of 200 means that the request was received with no problems as successful. 404 is a typical one that means that the location attempting to be found was not found.

### _**What is the difference between GET and POST?**_

A GET request is an HTTP request that is sent without side effects vs. a POST request that is sent with the intention of changing data on the server in which its sending the request to. A GET request will sent arguments through the query parameter whereas a POST request will do this through the body. You cannot change the URL and send a post request but in GET requests you can.

### _**What is AJAX? Why would you use it?**_

AJAX is a set of technologies that allow us to make HTTP requests from the Browser using JavaScript, without the page refreshing. This leads to amazing abilities such as building interactive websites which can load more data without having to refresh the page.

### _**What is JSON?**_

JSON is a string that looks like a JS object. It is a common data exchange format for sending data between servers and clients. Since everything in HTTP is sent as strings, JSON allows the ability to convert those strings into usable JS objects using JSON.parse and JSON.stringify to convert a JavaScript object to JSON.

### _**What is an API?**_

An API is a set of clearly defined methods of communication between various components. For example, we could use the google maps API in our own application to draw a map or to find directions.

### _**What are some limitations of AJAX request?**_

One limitation is that the calls are asynchronous. If you need specific data from a call in order to accomplish something else you will need to be mindful about how you manage async code. This can lead to confusing code if not done correctly. You could potentially have different parts of the page load at different times because of this which could confuse the end user. 

Another limitation is security. With AJAX, you can't make HTTP requests to all APIs due to security problems (see below answer).

### _**What is the Same Origin Policy?**_

This is a policy that is specific to the Browser.  When you make an HTTP request, that request must come from the same origin as where you are sending the request to. This allows for protection of the end user to make sure that someone can't send any malicious information from another origin to another. The same origin refers to having the same domain, protocol, and/or port.

### _**What is CORS? How does it work?**_

CORS stands for Cross Origin Resource Sharing and it is a technology that allows us to bypass the Same Origin Policy. It requires that a response header is sent from a server which specifies which origins are allowed (the header is called Access-Control-Allow-Origin). The browser will check to see if that header is present and if so and if a request is coming from a valid origin - a cross origin request will be allowed.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 3**

### _**What are important differences between Python and JavaScript?**_

Python allows for comparison of dictionaries and lists whereas Javascript doesn't. For example, [1,2,3] !== [1,2,3] in JS however in python [1,2,3] == [1,2,3]. Python has an out of the box data structure called a tuple which is not natively out of the box for JS. Python and Javascript also have very different syntax. Another difference is that Python has out of the box testing with doctests unlike JS which requires writing tests in another file. Python throws more errors than JS whereas JS will return undefined instead of throwing an error. This can make it difficult to debug JS but also allows someone to take advantage of the idea that JS doesn't throw errors.


### _**Given the following dictionary: `{"school": "Rithm"}`, list two ways you can access a key of "student" without your python program crashing.**_

You can use the get method: `dict.get('student')`. This will return None if the key doesn't exist. You can also use try except as well:
  
  ```py
  try:
    dict['student']
  except:
    print('This is not a key in the dictionary')
  ```
  One last thing you could do is use an if statement to check if the key exists before accessing:
  
```py
if student in dict:
  dict['student']
```
### _**What is a unit test?**_

A unit test is testing one small, isolated piece of functionality, a unit. This could be testing a function on it's own without testing how the functions interacts with the rest of the program.

### _**What is an integration test?**_

An integration test is testing how pieces of functionality interact with each other and that they work correctly. This could be testing a view function to make sure all the routing and returning works correctly.

### _**What is the role of web application framework, like Flask?**_

It is a set of functions, classes, etc. that help define which requests to respond to as well as how to respond to requests.

### _**You can pass information to Flask either as a parameter in a route URL**_
(like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application? (like '/foods/pretzel') or using a URL query param (like
'foods?type=pretzel'). How might you choose which one is a better fit
for an application?

There isn't an exact better way to do this but it depends on the situation. You can generally use query string parameters if you are describing the object you are on vs using the route for the object itself. For example, in the above case I would use /foods/pretzel and then use a query string parameter if I am decribing the pretzel such as /foods/pretzel?type=salty or /foods/pretzel?type=sugar.

### _**How do you collect data from a URL parameter using Flask?**_

You can specify the variable in the app.route and then use that variable as a paramater in the routing function. Here is an example of the pretzel:

```py
  @app.route('/foods/<food>')
  def grocery(food):
      x = food
```

### _**How do you collect data from the query string using Flask?**_

With a query string the data can be found in the request.args dictionary:

```py
  @app.route('/foods')
  def grocery():
      x = request.args.get('type')
```

### _**How do you collect data from the body of the request using Flask?**_

You can get the data form a post request in the body using the request.form dictionary

```py
  @app.route('/foods')
  def grocery():
      x = request.form.get('type')
```

### _**What is a cookie and what kinds of things are they commonly used for?**_

A cookie is piece of information which stores the domain, "key", and "value" that gets sent from the server to the client. It allows the client to send back that information to the server so the server can use that information. It allows for a user to go back in to a session to resume where they left off.

### _**What is the session object in Flask?**_

The session object is built off of using cookies. It allows the server to set many different things in the in the session for the client to remember wihout having to create many different cookies and just have one session. It is also encoded so that someone can't change session data on the client before sending it to the server.

### _**What exactly does Flask's `jsonify()` do?**_

jsonify will take JSON serializeable data in python and convert it to a JSON string.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 4**

### _**What is PostgreSQL?**_

PostgreSQL is a database management system that allows us to store information in a relational manner.

### _**What is the difference between SQL and PostgreSQL?**_

SQL is the language that is used to store and query data. PostgreSQL uses this language and extends it to allow us to store information.

### _**In `psql`, how do you connect to a database?**_

\c databasename

### _**What is the difference between `HAVING` and `WHERE`?**_

HAVING is applied to groups of data and WHERE applies to individual rows. Therefore the WHERE clause filters rows before they are grouped and the HAVING clause will filter groups.


### _**What is the difference between an `INNER` and `OUTER` join?**_

INNER join is everything in the middle of a venn diagram that occurs in both tables. For example, if there is a name table connected to a workplace table and someone is unemployed then they won't show up in the join. 

### _**What is the difference between a `LEFT OUTER JOIN` and `RIGHT OUTER` join?**_

In a LEFT OUTER join that person will show up. OUTER joins can be LEFT, RIGHT, or FULL. LEFT means that data can be in the left table but not in the right and it will show up. RIGHT means that data can be in the right table but not in the left and it will show up. A FULL join will allow all data to be shown whether it shows up in both tables or not.

### _**What is an ORM? What do they do?**_

ORM is object-relational mapping. This allows us to convert data between different systems in an object oriented manner. For example SQLAlchemy can convert data in SQL into objects to be used in Python.

### _**What are some differences between making HTTP requests using AJAX and from the server side using a library like `requests`?**_

AJAX requests are asynchronous and the server is synchronous. AJAX requests must respect the single origin policy whereas server requests don't. Server requests can help keep private keys secret since they won't be in the client browser with AJAX.

### _**What is CSRF? What is the purpose of the CSRF token?**_

CSRF stands for cross-site request forgery. For example, if I made a form that posted to Facebook to delete a user I technically could make that form however it would not work due to CSRF. If however I had a token that could prove I can make the request it would go through. The CSRF token is the item that proves that I am who I say that I am and allows the request to be made.

### _**What is the purpose of `form.hidden_tag()`?**_

This will render all of the hidden input tags and is commonly used to allow values like the CSRF token to be passed through a hidden field on WTForms.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 5**

### _**What is RESTful routing?**_

RESTful routing is actually designing routes that conform to REST standards around resources. REST itself is an architectural style for designing routes and provides constraints for creating web services. We would use this when designing our routes and making sure that we are using the naming convention for our routes as well as which HTTP verbs to use in our routes. For example, REST would dictate that we name a route /users for adding a user instead of something like /users/add.

### _**What is a resource?**_

If it similar to an object in an OOP language. A resource is an object with a type, associated data, and a relationship to other resources. The standard methods on the resource are the HTTP verbs.


### _**When building a JSON API why do you not include routes to render a form that when submitted creates a new user?**_

When creating an API you are not returning the HTML for the form. You are simply taking in the data provided by the front end, making the user, and then sending back JSON. It is the job of the front end to do send the right data however it pleases (through a form generated on the front end, ajax, etc.).

### _**What does idempotent mean? Which HTTP verbs are idempotent?**_

Idempotent means that the side effects will be the same for one or more of the same requests. The idea is that the state changes just once no matter how many times a request is made. GET, PTACH, and DELETE verbs are all idempotent.

### _**What is the difference between PUT and PATCH?**_

PUT will update the entire object while PATCH will update pieces of the object.

### _**What is one way encryption?**_

One way encryption means that the result from encryption cannot be decrypted back to the original input.

### _**What is the purpose of a `salt` when hashing a password?**_

A `salt` is a random string of characters that is introduced before a password is hashed. This allows the same password to be hashed differently because the salt will change randomly. If someone is trying to decrypt a password they can spend a lot of time generating a dictionary of all words and running encrypting with specific result. If the happen to find the password this way that means their solution will only work for passwords encrypted with that salt which will only be a small number if not only one password with that specific salt.


### _**What is the purpose of the Bcrypt module?**_

The Bcrypt module makes it easy in Python to encrypt passwords. You have to just call one function on a password and it will hash it for you. 

### _**What is the difference between authorization and authentication?**_

Authentication refers to the process of verifying who you are whereas authorization is the process of verifying that you have access to something. For example, you can authenticate someones login and then make sure they have access to their profile by authorization. 

### _**What are some ways to manage the complexities of a large codebase, like Warbler?**_

Comments are very helpful so that someone that comes in knows how various things like functions, classes, etc. work. Making sure to organize routes in their specific sections is important so that someone would know where to find what they are looking for. Same things applies to organizing files. It is also important to right tests. This way someone that comes in to edit something can make sure tests still work when they make their edits. Docstrings are also very important to make sure that someone can type in help(item) and see how it works.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 6**

### _**What are some ways of managing asynchronous code in JavaScript?**_

One way we can manage asynchronous code is through promises. In this way we can avoid many nested callbacks. When an asynchronous function returns a promise then we can use a .then and .catch to state what should happen after the promise is resolved or rejected. If there are multiple async functions that need to run after each other then .then can be chained to avoid nested callbacks. Another possibility is using async await with try catch. If a function is declared as async and there are async functions within that function then we can await the response from the inner function. The await will extract the value form the resolved promise. The reason we use catch is that if the promise is rejected then it can be caught.

### _**What is a Promise?**_

A promise is a one time guarantee of future value. This means that a promise will either be rejected 
or resolved with a value and that is guaranteed to happen in the future at some point.

### _**What are the differences between an async function and a regular function?**_

An async function will always return a promise whereas a regular function will not. An async function 
supports the use of await and a regular function does not. An async function will run asynchronously whereas a regular function will run synchronously.


### _**What is the difference between Node.js and Express.js?**_

Node.js is a technology that allows for JS to be run in a server-side environment. Express.js is a framework for building web applications using Node.js

### _**What is the error-first callback pattern?**_

A pattern where Node callbacks will have the error as the first parameter. This is common with older modules that do not support promises or async/await

### _**What is middleware?**_

Middleware are functions that run in the middle of a request response cycle. We can use middleware to intercept the request in order to modify it so that routes can use the updated response and take advantage 
of it.

### _**What does the `next` function do?**_

The next function will allow the next piece of middleware in succession to run.

### _**What does `RETURNING` do in SQL? When would you use it?**_

Returning in SQL will return whatever columns you want on the data that was just updated, deleted, or entered depending on the action taken. We could take advantage of this in order to validate that 
data was entered in correctly. We could also use the information that we get back in order to instantiate 
a new instance of a class to be returned as well. 

### _**What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)**_

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

I would say that we are getting user info and not necessarily users themselves so potentially being more 
descriptive in the function name would help. The variables could also be renamed for that as well such as elieInfo. Performancewise each async request does not depend on each other and so there is no need to await the first before starting the second and await the second before starting the third. Here is how the function could be rewritten.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 7**

### _**What is a JWT?**_

JWT stands for a JSON Web Token. It is a way to securely transmit information over HTTP.
The three parts of the JWT is the header, payload, and signature. The header contains metadata,
the payload contains the actual information, and the signature.  The signature is generated by signing the header and the payload with a secret key.  If any part of the JWT is tampered with, the signature will become invalid.

### _**What is the signature portion of the JWT?  What does it do?**_

The signature is the result of concatenating the header with the payload then hashing that data with a secret key. The signature portion of the JWT ensures that the token cannot be tampered with.  Only the server can create tokens because only the server knows the secret key used in the hash.

### _**If a JWT is intercepted, can the attacker see what's inside the payload?**_

YES! With a standard HS256 signature, the header and the payload are not encrypted.  So an attacker can easily see what's inside both.  The signature just ensures that that data cannot be changed. It doesn't ensure that the data is private.  So do not put sensitive data inside the JWT.

### _**How can you implement authentication with a JWT?  Describe how it works at a high level.**_

The user sends a request to create an account or to login. If the login/creating is successful, a JWT is created on the server side using a secret key that only the server knows.  The payload in the JWT contains something that will uniquely identify the user (like a user id).  The client must save the token somehow.  Typical ways to save the token are in local storage or as a cookie.  To make an authenticated request, the client must provide the token as specified by the server.  Typically the token is sent in a header called Authorization.  The server will then verify the token. To verify, the server take the header and payload and tries to sign that data using the secret key.  If the signature in the token matches the signature presented, then the token is verified. The server then looks inside the payload of the token to get the unique identifier for the user to figure out which user has been authenticated.


### _**Compare and contrast unit, integration and end-to-end tests.**_

Unit tests are inexpensive, not time consuming and test units in isolation. They provide the least amount of coverage, but are easily maintainable. Integration tests are focused around the integration of units and are a bit more time consuming to write. They cover more code than unit tests, but are a bit more brittle. End to end tests cover the entire use experience and can be useful for complete coverage, but they are quite brittle.

### _**What is a mock? What are some things you would mock?**_

A mock is a "fake" version of something - usually a function or even entire library. Mocking is common when trying to completely unit test in isolation. You might mock HTTP calls, the file system module, impure functions like Math.random and even a database.

### _**What is continuous integration?**_

CI is the practice of constantly deploying small pieces of code instead of large chunks infrequently. CI allows for quick iteration and tooling around ensuring tests pass before deployments occur.

### _**What is an environment variable and what are they used for?**_

An environment variable is a variable that is accessible by multiple applications in that environment.
Just like a global variable in a file is accessible by that entire file, environment variables can be accessed across the entire environment which is why in an application we can bring in environment variables into any file. Typically we use them when we need to keep things secret since environment variables won't be seen directly if .env is in .gitignore. We can also use them if we need to access something everywhere.


### _**What is TDD? What are some benefits and drawbacks?**_

TDD stands for test driven development and is a testing philosophy centered around writing tests first, seeing the tests fail, writing only the code necessary to get the tests to pass and then repeating/refactoring. The benefits include a solid test suite from the beginning, but the drawbacks include a more time consuming and potentially inefficient development process. 


### _**What is the value of using JSONSchema for validation?**_

JSONSchema can allow for a more specific validation scheme than if everything was coded in JS. For example, to verify 15 inputs it would take a lot of if-else statements to get exactly the validation that you would like. This makes the code unreadable. JSONSchema will also allow for standardization. For example, even for a couple of inputs there are many different ways validation can be done.

### _**What are some ways to decide which code to test?**_

If tests cannot be done for every line of code then the places to target are code that is complex since this code is more likely to have bugs just because of the inherent complexity. Another area to target would be code that is used a lot in an application. For example, if one route is going to be hit way more than others it would be beneficial to test this route.

### _**What are some differences between Web Sockets and HTTP?**_

Web socket is another communication method other than HTTP. Web socket allows the connection to the server to stay open so that open communication between the client and server can take place. Other than chat systems they are good for any sort of environment in which there are multiple people working together. For example in google docs you can work with another person in the same doc and you can see in real time what they are changing. Web sockets maintain a connection and have much less overhead than HTTP.

### _**Did you prefer using Flask over Express? Why or why not (there is no right answer here - we want to see how you think about technology)?**_

This is totally a matter of opinion! Express is a bit more minimalist than Flask and it requires even more setup sometimes, and the asynchronous nature of Node can be quite challenging.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 8**

### _**What is React? When and why would you use it?**_

React is a front end framework that allows us to build front end applications. React has reusable components that know how to render themselves and can be reused. This can make it easy to build applications that take advantage of this. React also has re-rendering when state changes which can make it easy to make single page applications.

### _**What is Babel?**_

It is a a transpiler that can covert JSX which cannot be read by the browser into JS which can. 

### _**What is Webpack?**_

It is a utility that can package up all CSS/images/JS into a single file for the browser which helps reduce the number of HTTP requests to help with performance. It also has hot reloading which can help with performance. 

### _**What is JSX?**_

It is very much like writing HTML in JS although it isn't valid HTML or JS. It allows us to write React components very easily and then it is converted with Babel for the browser. 

### _**How is a Component created in React?**_

A component is a class that is extended from the React.Component class. This class knows how to render itself. 

### _**What are some difference between state and props?**_

State is mutable whereas props are not. When state is changed a component is re-rendered. Another difference is that state is not passed down to child components. The only way to pass information down to children is through props. 

### _**What is a controlled component?**_

A controlled component is one that is controlled by react and that state is always controlled by react. For example, in an input field in a form when the input is text react should control the state of the input so that it can use it. There could be issues if react is not aware of the changes being made in the DOM when compared to it's virtual DOM.

### _**What is an uncontrolled component?**_

An uncontrolled component is one where react it not aware of the state change. It is very uncommon to need to use an uncontrolled component, but it can happen in the event of 3rd party libraries and inputs for uploading files.

### _**What is the purpose of the `key` prop when rendering a list of components?**_

It allows react to very quickly identify which components are changed so that it knows which ones to re-render very quickly. Without this performance could take a hit since react would not be able to identify quickly which component is changed. 

### _**Why is using an array index a poor choice for a `key` prop when rendering a list of components?**_  
The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

### _**How does data flow in a React application?**_

If think about our react application as a tree with the main component at the top comprised of smaller and smaller components data flows down through the tree passed as props.

### _**What in React makes the `render` function run?**_

Whenever the component is rendered for the first time or when setState is called.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 9**

### _**What is the component life cycle?**_

It is the stages that a component goes through. A component will mount, update, and unmount throughout its "life". Lifecycle methods are provided to tap into these stages of the lifecycle and perform actions at certain times.

### _**When would you use `componentDidMount`?**_

`componentDidMount` will run after the constructor and render runs for the component. This is typically the place to do authorization, timers, and API calls. 

### _**When would you use `componentDidUpdate`?**_

`componentDidUpdate` will run after render runs when a component is updated. Typically this is used to update localstorage with the most recent information, auto-saving, or updating the virtual DOM for uncontrolled components that only update the actual DOM. 

### _**What is the purpose of `componentWillUnmount`?**_

`componentWillUnmount` is the last method that will run before the component is taken out of the DOM. This is the place to "clean up" (invalidating timers, canceling network requests, removing event handlers directly on the DOM, and cleaning up subscriptions).

### _**What is the purpose of the React Router?**_

It is to do client-side routing. It is to trick a user into thinking there is new html being sent from a server and that they are actually changing html pages. In reality, client side routing will send one html file but will load different component based on the url.

### _**What is a single page application?**_

It is an app that re-renders content on the page based on navigation and not getting new html from a server that refreshed the page.

### _**What are some differences between client side and server side routing?**_

React Router has a component called `Redirect`. Since this is not server side redirection there isn't another GET request being made but instead just re-rendering content based on where the `to` prop is set to. Another way to redirect is through `this.props.history.push`. This method will add to the stack the list of routes the user has gone to instead of replacing the last time like the `Redirect` component does. 

### _**What are two ways of handling redirects with React Router? When would you use each?**_

`Redirect` and `this.props.history.push`. Some of the differences between the two are in my answer for handling redirects. You would use `Redirect` when you wouldn't want someone to come back to the page such as unauthorized and form submission for buying an item or creating an account. You can use `this.props.history.push` when you don't mind if someone could hit back and come back to the page.

### _**What are two different ways to handle page-not-found user experiences using React Router?**_

One way could be redirection to a page that does exist. Another could be to display a message on the screen saying that this page is not found by perhaps having a general `ErrorHandler` component.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 10**

### _**What is Redux? Why would you use it?**_

Redux is the idea of having shared state so that any part of your application can access and change state if setup to do so. You would use Redux whenever you need shared state. In the context of React you would use Redux when you have an application where state is kept up highly purely for the reason that a component needs it. For example, if you have a component hierarchy which is 5 levels deep and only the bottom left component and the bottom right component need state then you would have to maintain state all the way at level 1 and pass it down as well as pass down functions to change state to level 5. Redux would eliminate that problem. Redux is used when there is a ton of prop drilling just for the sake of having a child component have access to state. It also keeps components clearer in their purpose.

### _**What are three features of the Redux developer tool in Chrome?**_

Viewing the state tree, seeing tests for reducers, skipping/jumping to other parts in state and much more!

### _**What is a store?**_

A store is the centralized place for Redux to manage state. 


### _**What is a reducer?**_

A reducer is a function that accepts a state and action as parameters and returns a new state based on that. This function also should be pure.

### _**What is an action?**_

An action is an object with a key of type or it is a function that can dispatch like in the case with redux-thunk. When an action is dispatched the reducer runs with the action on the second parameter which should change state.

### _**What is an action creator?**_

An action creator is a function that returns an action.


### _**How does data flow in a React/Redux application?**_

In general components should be connected to Redux when they need to be connected to Redux. For example with react only data will always flow up and down with no side movement allowed. When Redux is connected it allows sibling components to access state without flowing up and down so with Redux the application may have less flow up and down but the data does flow in a similar way. 


### _**What is the purpose of the `<Provider>` component?**_

The Provider component is brought in when redux is needed and it wraps the App component. It is needed because it takes a prop of the redux store and so this component is essesentially connecting react with redux.


### _**What is the purpose of the `connect` function? What does it return?**_

The `connect` function allows a component to be connected to redux. The first parameter is a function that will map redux state to react props and the second parameter is a function that will map dispatch to props. The `connect` function will return a function that is usually immediately invoked with the Component as the parameter to connect it.


### _**What does the `mapStateToProps` function do?**_

`mapStateToProps` is a function that takes redux state as a parameter and returns an object. That object's keys will be accessible in react props. `mapStateToProps` also determines if the render function for a component will run. If the state changes since the last time `mapStateToProps` runs then render will run since the component is receiving new props.


### _**What does the `mapDispatchToProps` function do?**_

`mapDispatchToProps` is a function that takes dispatch as a parameter. This function will return an object with the values of keys being functions that dipatch actions. The keys are then accessible to the component in order to dispatch certain actions. Without this function a component can still dispatch but will be able to dispatch any action. This function limits the actions that a component can dispatch which is useful because it makes the purpose of the component clearer.


### _**What is redux-thunk and why would you use it?**_

It allows actions to be function instead of just objects with a key of type. It is middleware that allows actions to be dispatched whenever you would like them to be instead of immediately. It also allows multiple actions to be dispatched.


### _**What is a React `ref` and when might you use them?**_

Refs are a nice way to tap into direct DOM manipulation for certain actions like focusing.

### _**What is a stateless functional component?**_

Another way to create components without using ES2015 classes.

### _**What are React hooks?**_

A newer way to introduce state and lifecycle behavior to functional components

### _**What are propTypes?**_

PropTypes provide light validation on the types of props in your components. If a prop is not of the same type specified in propTypes a warning will be raised. 

### _**What is the difference between Component and PureComponent?**_

PureComponent implements a shouldComponentUpdate, which will do a shallow comparison and will only render if the new state and/or props are different.   
&nbsp;   
&nbsp;   
&nbsp;   

# **Week 11**

### _**What is Big O Notation?**_

Big O Notation is how we measure the growth in time and space with regards to the input of a function as we approach infinity.

### _**What is the call stack?**_

The call stack is a data structure for managing the invocation of functions. Like all stacks, it is a LIFO data structure where the last functions on the stack are popped off first.

### _**What is the difference between time and space complexity?**_

Time complexity is measured with regard to the change in time whereas space is concerned with memory allocation.

### _**What are some advantages/disadvantages to using Linked Lists versus arrays?**_

Linked Lists provide better insertion,removal at the beginning (O(1)) whereas arrays are O(n). Linked Lists however are not indexed so lookup/access is O(n) where arrays are O(1)

### _**What is the difference between a tree and a graph?**_

Trees are a particular kind of graph and never contain a cycle. Trees are hierarchical data structures with a root and child nodes whereas graphs are more flexible. Graphs can contain direction, weight and can contain a cycle.

### _**What is the difference between a binary search tree and binary tree?**_

They are very similar, but in a BST, all nodes to the left of a parent must be less than the parent and all nodes to the right must be greater.

### _**What are graphs used for?**_

So many things! From modeling data (graph databases), to mapping (google maps), to social networks, graphs are everywhere.

### _**What are trees used for?**_

Trees are commonly used to organize systems such as a company hierarchy or file system. 

### _**What are linked lists used for?**_

Linked Lists are useful when inserting/removing frequently in the beginning. They are also used to build more sophisticated data structures.

### _**What is a stack? Where and how are they used?**_

Stacks are LIFO data structures and are used to manage function invocations (call stack), routing (history), undo/redo, building a calculator and much more. 

### _**What is a queue? Where and how are they used?**_

Queues are FIFO data structures and are used for printing/jobs where the first thing in is the first thing out.

### _**What is an adjacency list?**_

An adjacency list is way to represent a graph and is usually an object or set where the values are lists/sets of all connecting nodes.

### _**Explain how hash tables work**_

Hash tables are built similarly to arrays in that they are of a certain length (which can change). When a value is added to the hash table, a special function called a hash function finds a place/index for that value. A good hashing function will minimize collisions, but when collisions occur the hash table must either find a new spot for the element, or each spot will consist of multiple values.

### _**What happens if two values hash to the same index?**_

A collision! These can be managed by separate chaining (multiple values at an index) or linear probing (finding a new spot for the value) as well as few other techniques.

### _**What is a heap? What are they good for?**_

Heaps are similar to BSTs, but less rigid in their restrictions regarding children. In a max heap, all parents are greater than children and vise versa in a min heap. Heaps are excellent for caching as well as priority queues.