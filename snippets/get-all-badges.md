```js
const showBotBadges = true; // Set to false if you don't want bot badges (slash/automod) to show up on your profile

if (typeof window.findByProps !== 'function')
    throw new Error(
        'Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800',
    );

findByProps('getUserProfile').getUserProfile_ =
    findByProps('getUserProfile').getUserProfile;

const currentUserId = findByProps('getCurrentUser').getCurrentUser().id;

// Source: https://github.com/aiko-chan-ai/DiscordBotClient/blob/electron/AppAssets/Constants.js
const allBadges = [
    {
        id: 'staff',
        description: 'Discord Staff',
        icon: '5e74e9b61934fc1f67c65515d1f7e60d',
        link: 'https://discord.com/company',
    },
    {
        id: 'partner',
        description: 'Partnered Server Owner',
        icon: '3f9748e53446a137a052f3454e2de41e',
        link: 'https://discord.com/partners',
    },
    {
        id: 'hypesquad',
        description: 'HypeSquad Events',
        icon: 'bf01d1073931f921909045f3a39fd264',
        link: 'https://discord.com/hypesquad',
    },
    {
        id: 'bug_hunter_level_1',
        description: 'Discord Bug Hunter',
        icon: '2717692c7dca7289b35297368a940dd0',
        link: 'https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs',
    },
    {
        id: 'hypesquad_house_1',
        description: 'HypeSquad Bravery',
        icon: '8a88d63823d8a71cd5e390baa45efa02',
        link: 'https://discord.com/settings/hypesquad-online',
    },
    {
        id: 'hypesquad_house_2',
        description: 'HypeSquad Brilliance',
        icon: '011940fd013da3f7fb926e4a1cd2e618',
        link: 'https://discord.com/settings/hypesquad-online',
    },
    {
        id: 'hypesquad_house_3',
        description: 'HypeSquad Balance',
        icon: '3aa41de486fa12454c3761e8e223442e',
        link: 'https://discord.com/settings/hypesquad-online',
    },
    {
        id: 'early_supporter',
        description: 'Early Supporter',
        icon: '7060786766c9c840eb3019e725d2b358',
        link: 'https://discord.com/settings/premium',
    },
    {
        id: 'bug_hunter_level_2',
        description: 'Discord Bug Hunter',
        icon: '848f79194d4be5ff5f81505cbd0ce1e6',
        link: 'https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs',
    },
    {
        id: 'verified_developer',
        description: 'Early Verified Bot Developer',
        icon: '6df5892e0f35b051f8b61eace34f4967',
    },
    {
        id: 'certified_moderator',
        description: 'Moderator Programs Alumni',
        icon: 'fee1624003e2fee35cb398e125dc479b',
        link: 'https://discord.com/safety',
    },
    {
        id: 'active_developer',
        description: 'Active Developer',
        icon: '6bdc42827a38498929a4920da12695d9',
        link: 'https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge',
    },
];
const botBadges = [
    {
        id: 'bot_commands',
        description: 'Supports Commands',
        icon: '6f9e37f9029ff57aef81db857890005e',
        link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps?ref=badge',
    },
    {
        id: 'automod',
        description: 'Uses AutoMod',
        icon: 'f2459b691ac7453ed6039bbcfaccbfcd',
    },
];

findByProps('getUserProfile').getUserProfile = function (userId) {
    const profile = this.getUserProfile_(userId);
    if (userId !== currentUserId || !profile) return profile;
    else {
        const currentBadges = new Set(profile.badges.map((x) => x.id));
        for (let badge of [...allBadges, ...(showBotBadges ? botBadges : [])]) {
            if (currentBadges.has(badge.id)) continue;
            else {
                profile.badges.push(badge);
                currentBadges.add(badge.id);
            }
        }
        return profile;
    }
};
```

![image](https://media.discordapp.net/attachments/1119338506691551232/1119338507287150602/image.png?ex=65cfaeb8&is=65bd39b8&hm=9f879300affad3b9cd6e152af5c1d6a174cd7431655bab64465e31598aab7ee6&=&format=webp&quality=lossless&width=762&height=691)