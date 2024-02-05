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
    pfp:"pfp file name",
}
]
```

3. Add your pfp file in ./avatars
4. Now you should add your snippet in ./src/Snippets.js:

```js
},
// existing codes in top
{
        title:"Example!",
        id:"numbers-then-id-here", 
        tags:["📌 Tag 1","⚠️ Tag 2","🚀 Tag 3"], // you can either keep it empty or add a tag as a string
        author:Authors.USERNAME,
        shortDesc:"Short description here.",
},
]
```

5. Create the markdown file named like this: ID.md where ID is the id you choosed, in ./snippets.and then put the content in it 
6. Post the pull request
7. Wait for review!
