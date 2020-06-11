# Questions

**With a partner**, answer these questions as completely as possible. Feel free to look at past lecture notes, the web, anything.

Take the time to explain it to each other.

The power of this exercise is in the act of _formulating_ and _explaining_ the concepts to someone else (your teammate).

## One

Run the app. Write out the steps, the _pseudo code_, required to create this app. It doesn't have to be totally accurate, or in the right order.

Only move on to the next question when you have enough detail that you would be able to start coding it yourself.

```

- Write the HTML form
- Prepare the CSS

JS Pseudo-code

- On form submit, send post request with form data
- Store form data in array
- refresh page interating through array to populate <li>s

  should have list of items
```

## Two - `server.js`

Take a look at the `server.js` file.

We have a new module in there, `body-parser` that is required on line `4`. What is it for? What is its use-case? What other lines are related to this module?

_The NPM site might be a good place to start. Feel free to provide links as relevant._

```

// more details required! let's ask a TC

When using a POST or PUT action, the data passed back to the server is in a raw format. To assist in parsing the data more easily, body-parser simplifies and allows us to access the data stream simply by using req.body.

Line 21 in server.js
Line 8 in handlers.js

```

## Three - `server.js`

Look at lines `26` and `24`. Explain the methods used. How are they different? What are the usecases for each?

```

Line 26 is to render the homepage
Line 27 is to add data to the items array and then to redirect to the homepage

```

## Four - `server.js`

Line `6`. That's new. What do you think it's for?

```

Line 6 imports functions from handlers.js

Question - why are the functions being declared as const? Why not just a regular named function?

```

## Five - `handlers.js`

Explain line `1`. Where, why and how is `items` being used?

```

The items array is what allows items to persist between reloads. Each time the submit button is pushed, it triggers handleFormData, which collects a variable called 'item' from req.body; item is then pushed into the array of items. Once this is done, it redirects to homepage, which then parses the array for display.

```

## Six - `handlers.js`

Why is there `redirect` on line `11`;

```

Without the redirect, the server has no way to push the user back towards the homepage; the logic would break.

```

## Seven - `handlers.js`

The `handle404` function is a more complex than we've seen thus far, what is the extra functionality for?

```
Our hypothesis is that having different handlers for different data types is intended to deal with various access methods, i.e. API call, robot crawler, etc.

```

## Eight - `ejs`

Take a look at `homepage.ejs` and `todoInput.ejs`. What is happening in there? Explain line-by-line...

```
Include the header ejs
Include the input box from partials/todoInput
Iterate through each item in the items array to generate an li
Include the footer ejs

```
