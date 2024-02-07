let DiscordSnippetsCore = {
    Webpack:{},
    Common:{}
}

webpackChunkdiscord_app.push([[Symbol()],{},(r) => DiscordSnippetsCore.Webpack.wreq = r]);
webpackChunkdiscord_app.pop();

DiscordSnippetsCore.Webpack._mods = Object.values(wreq.c);

DiscordSnippetsCore.Webpack.findByProps = (...props) => {
    for (let m of DiscordSnippetsCore.Webpack._mods) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        } catch {}
    }
}

console.log(DiscordSnippetsCore)
