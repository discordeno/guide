"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6303],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<s;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6161:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),i=["components"],a={sidebar_position:3},l="Migrating",d={unversionedId:"general/migrating",id:"general/migrating",title:"Migrating",description:"Migrating from Discord.js",source:"@site/docs/general/migrating.md",sourceDirName:"general",slug:"/general/migrating",permalink:"/docs/general/migrating",editUrl:"https://github.com/discordeno/discordeno/tree/main/site/docs/general/migrating.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/general/getting-started"},next:{title:"Step By Step Guide",permalink:"/docs/big-bot-guide/step-by-step"}},c=[{value:"Migrating from Discord.js",id:"migrating-from-discordjs",children:[],level:2},{value:"Finding an Open-Source Discord Bot",id:"finding-an-open-source-discord-bot",children:[],level:2},{value:"Preparations",id:"preparations",children:[],level:2},{value:"Converting main.js (index file)",id:"converting-mainjs-index-file",children:[],level:2},{value:"Converting Commands",id:"converting-commands",children:[{value:"Need More Examples/Help",id:"need-more-exampleshelp",children:[],level:3}],level:2}],m={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"migrating"},"Migrating"),(0,s.kt)("h2",{id:"migrating-from-discordjs"},"Migrating from Discord.js"),(0,s.kt)("p",null,"This migration guide is not intended to discredit Discord.js authors/maintainers or Discord.js itself. In fact,\nDiscord.js is the most popular Node.js library, admired and praised by a lot of JavaScript developers."),(0,s.kt)("h2",{id:"finding-an-open-source-discord-bot"},"Finding an Open-Source Discord Bot"),(0,s.kt)("p",null,"For the purposes of this guide, I wanted to find a moderation bot that is totally open source to show an example of how\nto convert the bot to Discordeno. Trying to find one was not easy as most bot's were not using the latest Discord.JS\nversion 12. Trying to find one that was using TypeScript made it even more difficult. My next best solution was to find\na moderation bot that was recently updated(showing it is maintained or recently built). The best one I could find was\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Nukestye/Zodiac"},"Zodiac Bot"),"."),(0,s.kt)("p",null,"For the purposes of this guide, I will be using the current\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Nukestye/Zodiac/tree/213891a38af1b7ecbd068b661ef9062ab58cc818"},"latest commit")),(0,s.kt)("h2",{id:"preparations"},"Preparations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"First, create a Discordeno Bot using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/discordeno/template"},"Generator Template")," I will name it\nZodiac.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Then ",(0,s.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Skillz4Killz/Zodiac.git")))),(0,s.kt)("p",null,"Now that I had the repository cloned, I could begin. Note that although the bot we are converting is built in\nJavaScript, I converted all code to TypeScript in this Guide as Discordeno is designed to be the best lib for TypeScript\ndevelopers."),(0,s.kt)("p",null,"Time to get started!"),(0,s.kt)("h2",{id:"converting-mainjs-index-file"},"Converting main.js (index file)"),(0,s.kt)("p",null,"The first thing is to convert the ",(0,s.kt)("inlineCode",{parentName:"p"},"main.js")," file which would be the app.js or index.js file. This is the file that is\nrun to start your bot. In this case, the bot developer chose ",(0,s.kt)("inlineCode",{parentName:"p"},"main.js"),". In Deno, the initial file is named ",(0,s.kt)("inlineCode",{parentName:"p"},"mod.ts")," so\nwe can go ahead and opt for the Deno pattern. Note: there is already a ",(0,s.kt)("inlineCode",{parentName:"p"},"mod.ts")," file created and prebuilt entirely using\nthe Generator."),(0,s.kt)("p",null,"Current Discord.JS Code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* Keeping this to shoutout/credit the original author <3\n* @author: nukestye\n*/\n\nconst config = require("./config.json");\nconst fs = require("fs");\nconst log = console.log;\n\n// Setting up the way to get commands\nconst { CommandoClient } = require("discord.js-commando");\nconst path = require("path");\n\n// reading events\nfs.readdir("./src/events/", (err, files) => {\n  if (err) return console.error(err);\n  files.forEach((file) => {\n    const eventFunction = require(`./src/events/${file}`);\n    if (eventFunction.disabled) return;\n    const event = eventFunction.event || file.split(".")[0];\n    const emitter = (typeof eventFunction.emitter === "string"\n      ? client[eventFunction.emitter]\n      : eventFunction.emitter) || client;\n    const { once } = eventFunction;\n    try {\n      emitter[\n        once ? "once" : "on"\n      ](event, (...args) => eventFunction.run(...args));\n    } catch (error) {\n      console.error(error.stack);\n    }\n  });\n});\n\nconst client = global.client = new CommandoClient({\n  commandPrefix: `${config.prefix}`,\n  owner: `${config.owner}`,\n  invite: `${config.discord}`,\n  unknownCommandResponse: false,\n});\n\n// Registing the commands\nclient.registry\n  .registerDefaultTypes()\n  // The different fields for cmds\n  .registerGroups([\n    ["mod", "Moderation Commands"],\n    ["public", "Public Commands"],\n  ])\n  .registerDefaultGroups()\n  // Basic cmds can be disabled like {"cmd: false"}\n  .registerDefaultCommands()\n  // commands in "/src/commands" will be counted\n  .registerCommandsIn(path.join(__dirname, "/src/commands"));\n\n// list of activities that the bot goes through\nconst activityArray = [`${config.prefix}help | `];\n// Bot lanuch code\nclient.once("ready", () => {\n  log(`Logged in as ${client.user.tag} in ${client.guilds.size} guild(s)!`);\n  setInterval(() => {\n    const index = Math.floor(Math.random() * (activityArray.length)); // generates a random number between 1 and the length of the activities array list\n    client.user.setActivity(\n      activityArray[index],\n      {\n        type: "PLAYING",\n      },\n    ); // sets bot"s activities to one of the phrases in the arraylist.\n  }, 5000); // updates every 10000ms = 10s\n});\n// If an error print it out\nclient.on("error", console.error);\n\n// Login in using the token in config\nclient.login(config.env.TOKEN);\n')),(0,s.kt)("p",null,"Discordeno Version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { botCache, Intents } from "./deps.ts";\nimport { configs } from "./configs.ts";\nimport { importDirectory } from "./src/utils/helpers.ts";\nimport { loadLanguages } from "./src/utils/i18next.ts";\n\nconsole.info(\n  "Beginning Bot Startup Process. This can take a little bit depending on your system. Loading now...",\n);\n\n// Always require these files be processed before anything else\nawait Promise.all([\n  "./src/customizations/structures",\n].map(\n  (path) => importDirectory(Deno.realPathSync(path)),\n));\n\n// Forces deno to read all the files which will fill the commands/inhibitors cache etc.\nawait Promise.all(\n  [\n    "./src/commands",\n    "./src/inhibitors",\n    "./src/events",\n    "./src/arguments",\n    "./src/monitors",\n    "./src/tasks",\n    "./src/permissionLevels",\n    "./src/events",\n  ].map(\n    (path) => importDirectory(Deno.realPathSync(path)),\n  ),\n);\n\n// Loads languages\nawait loadLanguages();\nawait import("./src/database/database.ts");\n\nstartBot({\n  token: configs.token,\n  // Pick the intents you wish to have for your bot.\n  // For instance, to work with guild message reactions, you will have to pass the Intents.GUILD_MESSAGE_REACTIONS intent to the array.\n  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],\n  // These are all your event handler functions. Imported from the events folder\n  eventHandlers: botCache.eventHandlers,\n});\n')),(0,s.kt)("p",null,"Something we haven't converted yet from the ",(0,s.kt)("inlineCode",{parentName:"p"},"main.js")," files is the event listeners. To do that, we will open up the\nevents folder and find the corresponding event or create it if necessary. In this case, we have the ",(0,s.kt)("inlineCode",{parentName:"p"},"ready")," event and\nthere is already a ",(0,s.kt)("inlineCode",{parentName:"p"},"ready.ts")," file. We can just use that."),(0,s.kt)("p",null,"In our ",(0,s.kt)("inlineCode",{parentName:"p"},"ready.ts")," file we can add the ",(0,s.kt)("inlineCode",{parentName:"p"},"ready")," event listener."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { ActivityType, botCache, cache, chooseRandom, editBotsStatus, StatusTypes } from "../../deps.ts";\nimport { registerTasks } from "./../utils/taskHelper.ts";\n\nbotCache.eventHandlers.ready = function () {\n  editBotsStatus(\n    StatusTypes.DoNotDisturb,\n    "Discordeno Best Lib",\n    ActivityType.Game,\n  );\n\n  console.log(`Loaded ${botCache.arguments.size} Argument(s)`);\n  console.log(`Loaded ${botCache.commands.size} Command(s)`);\n  console.log(`Loaded ${Object.keys(botCache.eventHandlers).length} Event(s)`);\n  console.log(`Loaded ${botCache.inhibitors.size} Inhibitor(s)`);\n  console.log(`Loaded ${botCache.monitors.size} Monitor(s)`);\n  console.log(`Loaded ${botCache.tasks.size} Task(s)`);\n\n  registerTasks();\n\n  console.log(\n    `[READY] Bot is online and ready in ${cache.guilds.size} guild(s)!`,\n  );\n\n  // list of activities that the bot goes through\n  const activityArray = [`${configs.prefix}help | `];\n  setInterval(() => {\n    editBotsStatus(\n      StatusType.Online,\n      chooseRandom(activityArray),\n      ActivityType.Game,\n    );\n  }, 5000);\n};\n')),(0,s.kt)("p",null,"To understand this code, we are setting a function to be run when the bot is ",(0,s.kt)("inlineCode",{parentName:"p"},"ready"),". Then the bot will edit the bots\nstatus every 5 seconds. Notice, that Discordeno provides a nice clean util function to choose a random item from an\narray. You also have beautiful enums provided that prevent you from making any typos/mistakes."),(0,s.kt)("p",null,"We have now converted the entire ",(0,s.kt)("inlineCode",{parentName:"p"},"main.js")," file, in a matter of seconds. The Discordeno official generator took care of\nthe majority of workload and we just modified the ",(0,s.kt)("inlineCode",{parentName:"p"},"ready.ts")," file."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Note:"),' I did remove some generally well known "bad practices" such as global vars and such. Overall, you will see the\nfunctionality of the project will not change as we progress through this guide.'),(0,s.kt)("h2",{id:"converting-commands"},"Converting Commands"),(0,s.kt)("p",null,"The first command in the commands folder is the ",(0,s.kt)("inlineCode",{parentName:"p"},"addRole")," command."),(0,s.kt)("p",null,"This is the code from the bot:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Getting the \'Command\' features from Commando\nconst { Command } = require("discord.js-commando");\n\n// Code for the command\nmodule.exports = class addRoleCommand extends Command {\n  constructor(client) {\n    super(client, {\n      // name of the command, must be in lowercase\n      name: "addrole",\n      // other ways to call the command, must be in lowercase\n      aliases: ["role"],\n      // command group its part of\n      group: "mod",\n      // name within the command group, must be in lowercase\n      memberName: "addrole",\n      // Is the description used for \'help\' command\n      description: "Adds mentioned role to mentioned user.",\n      // Prevents it from being used in dms\n      guildOnly: true,\n      // Permissions, list found here > `discord.js.org/#/docs/main/11.5.1/class/Permissions?scrollTo=s-FLAGS`\n      clientPermissions: ["ADMINISTRATOR", "MANAGE_ROLES"],\n      userPermissions: ["MANAGE_ROLES"],\n      // Prevents anyone other than owner to use the command\n      ownerOnly: false,\n    });\n  }\n\n  // Run code goes here\n  run(message) {\n    const user = message.mentions.members.first();\n    const roleToAdd = message.mentions.roles.first();\n\n    // checking to see if the user has the role or not\n    if (!(user.roles.find((r) => r.name === roleToAdd.name))) {\n      user.addRole(roleToAdd);\n      message.channel.send(`${user} has been given the role: ${roleToAdd.name}`)\n        .then((msg) => {\n          msg.delete(5000);\n        });\n    } else {\n      message.channel.send(`${user} already has the role: ${roleToAdd.name}`);\n    }\n\n    // console.error(user, roleToAdd, message.member.roles.find(r => r.name === roleToAdd));\n  }\n};\n')),(0,s.kt)("p",null,"This is how to do it with Discordeno:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { createCommand } from "./../../utils/helpers.ts";\n\ncreateCommand({\n  name: "role",\n  // Oher ways to call the command\n  aliases: ["addrole"],\n  // Is the description used for \'help\' command\n  description: "Adds mentioned role to mentioned user.",\n  // Prevents it from being used in dms\n  guildOnly: true,\n  botServerPermissions: ["ADMINISTRATOR", "MANAGE_ROLES"],\n  userServerPermissions: ["MANAGE_ROLES"],\n  arguments: [\n    { name: "member", type: "member" },\n    { name: "role", type: "role" },\n  ],\n  execute: (message, args) => {\n    // checking to see if the user has the role or not\n    if (!args.member.roles.includes(args.role.id)) {\n      args.member.addRole(message.guildId, args.role.id);\n      message.reply(\n        `${args.member.mention} has been given the role: ${args.role.name}`,\n        5,\n      );\n    } else {\n      message.reply(\n        `${args.member.mention} already has the role: ${args.role.name}`,\n      );\n    }\n  },\n});\n')),(0,s.kt)("p",null,"Awesome, that is a full command converted from Discord.JS to Discordeno. See how easy it is! Let's convert one more\ncommand to see how to really take full advantage of Discordeno template and have something amazing."),(0,s.kt)("p",null,"Discord.JS Kick Command Version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Getting the \'Command\' features from Commando\nconst { Command } = require("discord.js-commando");\nconst { RichEmbed } = require("discord.js");\nconst chalk = require("chalk");\nconst log = console.log;\n\n// Code for the command\nmodule.exports = class kickCommand extends Command {\n  constructor(client) {\n    super(client, {\n      // name of the command, must be in lowercase\n      name: "kick",\n      // other ways to call the command, must be in lowercase\n      aliases: ["boot", "tempban"],\n      // command group its part of\n      group: "mod",\n      // name within the command group, must be in lowercase\n      memberName: "kick",\n      // Is the description used for \'help\' command\n      description: "Kick command.",\n      // adds cooldowns to the command\n      throttling: {\n        // usages in certain time x\n        usages: 1,\n        // the cooldown\n        duration: 10,\n      },\n      // Prevents it from being used in dms\n      guildOnly: true,\n      // Permissions, list found here > `discord.js.org/#/docs/main/11.5.1/class/Permissions?scrollTo=s-FLAGS`\n      clientPermissions: ["ADMINISTRATOR"],\n      userPermissions: ["KICK_MEMBERS"],\n      // Prevents anyone other than owner to use the command\n      ownerOnly: false,\n    });\n  }\n\n  // Run code goes here\n  run(message) {\n    const messageArry = message.content.split(" ");\n    const args = messageArry.slice(1);\n\n    const kUser = message.guild.member(\n      message.mentions.users.first() || message.guild.get(args[0]),\n    );\n    if (!kUser) return message.channel.send("User cannot be found!");\n    const kreason = args.join(" ").slice(22);\n\n    // setting up the embed for report/log\n    const kickEmbed = new RichEmbed()\n      .setDescription(`Report: ${kUser} Kick`)\n      .addField("Reason >", `${kreason}`)\n      .addField("Time", message.createdAt);\n\n    const reportchannel = message.guild.channels.find("name", "report");\n    if (!reportchannel) {\n      return message.channel.send("*`Report channel cannot be found!`*");\n    }\n\n    // Delete the message command\n    // eslint-disable-next-line camelcase\n    message.delete().catch((O_o) => {});\n    // Kick the user with reason\n    message.guild.member(kUser).kick(kreason);\n    // sends the kick report into log/report\n    reportchannel.send(kickEmbed);\n    // Logs the kick into the terminal\n    log(chalk.red("KICK", chalk.underline.bgBlue(kUser) + "!"));\n  }\n};\n')),(0,s.kt)("p",null,"Discordeno Version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { createCommand } from "./../../utils/helpers.ts";\n\ncreateCommand({\n  name: `kick`,\n  aliases: ["boot", "tempban"],\n  description: "Kick command.",\n  // adds cooldowns to the command\n  cooldown: {\n    // usages in certain duration of seconds below\n    allowedUses: 1,\n    // the cooldown\n    seconds: 10,\n  },\n  // Prevents it from being used in dms\n  guildOnly: true,\n  botServerPermissions: ["ADMINISTRATOR"],\n  userServerPermissions: ["KICK_MEMBERS"],\n  arguments: [\n    {\n      name: "member",\n      type: "member",\n      missing: function (message) {\n        message.reply(`User cannot be found.`);\n      },\n      // By default this is true but for the purpose of the guide so you can see this exists.\n      required: true,\n    },\n    {\n      name: "reason",\n      // The leftover string provided by the user that was not used by previous args.\n      type: "...string",\n      defaultValue: "No reason provided.",\n      // It is silly to lowercase this but for the purpose of the guide you can see that this is also available to you.\n      lowercase: true,\n    },\n  ],\n  execute: function (message, args: KickArgs) {\n    // setting up the embed for report/log\n    const embed = new Embed()\n      .setDescription(`Report: ${args.member.mention} Kick`)\n      .addField("Reason >", args.reason)\n      .addField("Time", message.timestamp.toString());\n\n    const reportchannel = message.guild?.channels.find((channel) => channel.name === "report");\n    if (!reportchannel) {\n      return message.reply("*`Report channel cannot be found!`*");\n    }\n\n    // Delete the message command\n    message.delete("Remove kick command trigger.");\n    // Kick the user with reason\n    args.member.kick(message.guildId, args.reason);\n    // sends the kick report into log/report\n    reporchannel.send({ embed });\n  },\n});\n\ninterface KickArgs {\n  member: Member;\n  reason: string;\n}\n')),(0,s.kt)("p",null,"Let's take a minute and explain the differences here. The first thing you will probably notice is different is the\n",(0,s.kt)("inlineCode",{parentName:"p"},"arguments")," property. Discordeno provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"arguments")," property because it provides argument\nhandling/parsing/validating internally. You don't need to be splitting the message content or going through and\nvalidating it yourself. All you do is tell Discordeno that you want a member and a reason. It will do the magic and hard\nwork to get you that data before you even run the command. You just do ",(0,s.kt)("inlineCode",{parentName:"p"},"args.member")," and you have access to the full\nmember object. There are a lot more powerful aspects to Discordeno like arguments. Keep diving in and you will find all\nthe wonderful tools available to give you the best developer experience possible."),(0,s.kt)("h3",{id:"need-more-exampleshelp"},"Need More Examples/Help"),(0,s.kt)("p",null,"If you still need more help converting other aspects of your bot please contact me at\n",(0,s.kt)("a",{parentName:"p",href:"https://discord.com/invite/5vBgXk3UcZ"},"Discord"),". I will continue adding more examples to this guide as more people\nrequest them."))}u.isMDXComponent=!0}}]);