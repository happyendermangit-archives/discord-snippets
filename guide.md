# Guide: How to post a snippet:

## I already made the snippet? now what?

1. Make a fork
2. If you havent already posted a snippet, add yourself in ./authors.js

```js
},
// existing codes in top
USERNAME:{
    name:"Your name",
    id:"<discord id>",
    pfp:"discord pfp link",
}
]
```

3. Now you should add your snippet in Snippets.js:

```js
},
// existing codes in top
{
        title:"Example!",
        author:Authors.USERNAME,
        shortDesc:"Short description here.",
        code:"the message here, minify it as a string that has "
},
]
```

4. Post the pull request
5. Wait for review!
