# vitae

A resume; over-engineered.

## What is this?
This project serves two purposes.

1. I need a new resume.
2. I wanted to play around with some new tech, such as react and mongodb.

**Vitae** is the result. It takes a resume (as JSON) and whacks it into the DOM with React.

## Building
`npm install`

A prepublish script will trigger and run browserify for you. This will create:
`dist/js/resume.js`

## Theme

Theme is in a separate repository.

[Shaid/resume-style](https://github.com/Shaid/resume-style)

## Todo
- Port to use ES6, Webpack, etc.
- Refactor to use Redux. 
- Add universal rendering.
