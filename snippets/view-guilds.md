```js
function lurk(id) {
    findByProps("joinGuild").joinGuild(id, {lurker: true})
        .then(() => {setTimeout(() => patchGuild(id), 100)})
        .catch(() => {throw new Error("Guild is not lurkable")});
}

function patchGuild(id) {
    findByProps("getGuildsTree").getGuildsTree().root.children.unshift({type: "guild", id, unavailable: false, children: []});
    findByProps("getGuildCount").getGuild(id).joinedAt = new Date;
    findByProps("lurkingGuildIds").lurkingGuildIds().pop();
    findByProps("joinGuild").transitionToGuildSync(id);
}

lurk("guild id here");
```

What this does is that you get to view any guild from it ID. Some guilds are unviewable due to privacy reasons, however
you pretty much can lurk on any guild as you wish. 
