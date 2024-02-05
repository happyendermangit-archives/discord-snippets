# Guide: How to post a snippet:

## I already made the snippet? now what?

1. Make a fork
2. If you havent already posted a snippet, add yourself in ./src/Authors.js

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

3. Now you should add your snippet in ./src/Snippets.js:

```js
},
// existing codes in top
{
        title:"Example!",
        id:"numbers-then-id-here", 
        author:Authors.USERNAME,
        shortDesc:"Short description here.",
},
]
```

4. Create the markdown file named like this: ID.md where ID is the id you choosed, in ./snippets.and then put the content in it 
5. Post the pull request
6. Wait for review!
