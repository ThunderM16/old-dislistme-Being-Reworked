module.exports = {
  bot: {
    token: "OTMwMjg4MTExMjE1MzIxMTE4.YdzsUQ.eAkmqtzyNc8ewEmb0M90TDY1ZAI",
    prefix: "bl.",
    owners: ["676195747904880690"],
    mongourl: "mongodb+srv://iut3890g:6BclYy2yHqvs3hKQ@cluster0.sbr9d.mongodb.net/dislist?retryWrites=true&w=majority",
    servers: {
      token: "OTU3MDAxNjA0MTY5NjA1MTQw.Yj4bMg.GAMLJj95liNwJeK_XCygk5vdGLk",
      prefix: "me."
    }
  },

  website: {
    callback: "https://dislistme.herokuapp.com/callback",
    secret: "Yy-MDOVJVN1PrQFCDOgFVVpead3tP99y",
    clientID: "957001604169605140", // Bot client id.
    tags: ["Moderation", "Fun", "Minecraft", "Economy", "Guard", "NSFW", "Anime", "Invite", "Music", "Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish"],
    reporttags: ["Choose one...","NSFW content","API abuse","Malicious use of bot page","Copycat","Doesn't work","Other"],
    languages: [
      { flag: 'gb', code: 'en', name: 'English' },
      { flag: 'in', code: 'hi', name: 'हिंदी' },
      { flag: 'in', code: 'te', name: 'తెలుగు' },
      { flag: 'tr', code: 'tr', name: 'Türkçe' },
      { flag: 'de', code: 'de', name: 'Deutsch' },
      { flag: 'it', code: 'it', name: 'Italiano' },
      { flag: 'ne', code: 'ne', name: 'नेपाली' },
      { flag: 'ar', code: 'ar', name: 'العربية' },
      { flag: 'fr', code: 'fr', name: 'French' },
      { flag: 'pl', code: 'pl', name: 'Polish' }
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development"
        },
        {
          icon: "fal fa-play",
          name: "Stream"
        },
        {
          icon: "fal fa-camera",
          name: "Media"
        },
        {
          icon: 'fal fa-building',
          name: 'Company'
        },
        {
          icon: 'fal fa-gamepad',
          name: 'Game'
        },
        {
          icon: 'fal fa-icons',
          name: 'Emoji'
        },
        {
          icon: 'fal fa-robot',
          name: 'Bot List'
        },
        {
          icon: 'fal fa-server',
          name: 'Server List'
        },
        {
          icon: 'fal fa-moon-stars',
          name: 'Turkish'
        },
        {
          icon: 'fab fa-discord',
          name: 'Support'
        },
        {
          icon: 'fal fa-volume',
          name: 'Sound'
        },
        {
          icon: 'fal fa-comments',
          name: 'Chatting'
        },
        {
          icon: 'fal fa-lips',
          name: 'NSFW'
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange"
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest"
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay"
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme"
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop"
        },
        {
          icon: "fal fa-desktop",
          name: "Technology"
        },
        {
          icon: "fal fa-laugh",
          name: "Fun"
        },
        {
          icon: "fal fa-share-alt",
          name: "Social"
        },
        {
          icon: "fal fa-laptop",
          name: "E-Sport"
        },
        {
          icon: 'fal fa-palette',
          name: 'Design'
        },
        {
          icon: 'fal fa-users',
          name: 'Community'
        }
      ]
    }
  },

  server: {
    id: "956995281877090384", // Server ID
    invite: "https://discord.gg/sqnssyBVft",
    dblinvite: "https://discord.com/oauth2/authorize?client_id=957001604169605140&permissions=1074071617&redirect_uri=https://dislistme.herokuapp.com%2Fservers%2Fadd&response_type=code&scope=bot%20identify",
    roles: {
      yonetici: "", // Founder roleid (Founder)
      manager: "",// Community Manager Role Id (Mods)
      booster: "", // Server booster Role ID (ServerBooster)
      sponsor: "", // Sponsor Role id (Sponsors)
      community: "", // Community Role id (Managers)
      supporter: "",// Supporter Role id (Supporters)
      partnerRole: "", // Partner Role id (Partners)
      site_creator: "",// Site Creator Role id (Founder)
      administrator: "", // Team Role id Again (Founder)
      moderator: "", // bot tester Role id (Verifiers)
      moderatorrole: "", // Server Moderator Role id (Mods)
      profile: {
        sitecreator:"", // Site Creator Role id
        booster: "",// Server booster Role ID
        community: "",// Community Role id
        sponsor: "", // Sponsor Role id
        supporter: "", // Supporter Role id
        manager: "", // Community Manager Role Id
        partnerRole: "" // Partner Role id
      },
      codeshare: {
        python: "PY",
        javascript: "JS",
        html: "HTML",
        substructure: "Substructure",
        bdfd: "BDFD", // Bot Designer For Discord
        fiveInvite: "5 INVITES",
        tenInvite: "10 INVITES",
        fifteenInvite: "15 INVITES",
        twentyInvite: "20 INVITES"
      },
      botlist: {
        ownerserver: "", // Server Owner Role ID (Founder)
        developer: "", // Bot Developer Role ID (Bot Developer)
        certified_developer: "",// Certified Bot Developer Role ID (Certified Developer)
        boosted_developer: "", // Boosted Bot Developer Role ID (Boosted User)
        promoted_developer: "",// Promoted Bot Developer Role ID (Promoted User)
        premium_developer: "",// Premium Server Owner Role ID (Premium User)
        bot: "",// Approved Bot Role ID (Approved Bots)
        boosted_bot: "", // Boosted Bot Role ID (Boosted Bot)
        promoted_bot: "",// Promoted Bot Role ID (Promoted Bot)
        certified_bot: ""// Certified Bot Role ID (Certifed Bot)
      }
    },
    channels: {
      codelog: "", // Code Log
      login: "",// Login Log
      webstatus: "",// Website Status Log
      uptimelog: "",// Uptime Log
      botlog: "",// bot Log
      reportlog: "",// bot report Log
      votes: ""// Vote Log Log
    }
  }


}
