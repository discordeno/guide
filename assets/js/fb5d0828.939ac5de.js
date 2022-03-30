"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9315],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:3,sidebar_label:"Step 2 - Gateway"},l="Step 2: Creating A Standalone Gateway Process",u={unversionedId:"big-bot-guide/gateway",id:"big-bot-guide/gateway",title:"Step 2: Creating A Standalone Gateway Process",description:"If you are reading this, you should have your REST process completed. We are going to need it here. This process will be",source:"@site/docs/big-bot-guide/gateway.md",sourceDirName:"big-bot-guide",slug:"/big-bot-guide/gateway",permalink:"/docs/big-bot-guide/gateway",editUrl:"https://github.com/discordeno/discordeno/tree/main/site/docs/big-bot-guide/gateway.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Step 2 - Gateway"},sidebar:"tutorialSidebar",previous:{title:"Step 1 - REST",permalink:"/docs/big-bot-guide/rest"},next:{title:"Step 3 - Cache",permalink:"/docs/big-bot-guide/cache"}},d=[{value:"Why Use Standalone REST Process?",id:"why-use-standalone-rest-process",children:[],level:2},{value:"Creating Gateway Manager",id:"creating-gateway-manager",children:[{value:"Getting Gateway Bot Data",id:"getting-gateway-bot-data",children:[],level:3},{value:"Understanding Gateway Manager",id:"understanding-gateway-manager",children:[{value:"Gateway Cache",id:"gateway-cache",children:[],level:4},{value:"Gateway Method Overriding",id:"gateway-method-overriding",children:[],level:4}],level:3},{value:"Handle Discord Payloads",id:"handle-discord-payloads",children:[],level:3}],level:2},{value:"Gateway Queue",id:"gateway-queue",children:[],level:2},{value:"Spawning Shards",id:"spawning-shards",children:[],level:2},{value:"Workers",id:"workers",children:[],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-2-creating-a-standalone-gateway-process"},"Step 2: Creating A Standalone Gateway Process"),(0,o.kt)("p",null,"If you are reading this, you should have your REST process completed. We are going to need it here. This process will be\nconnecting to discord's websockets which will send you all the events."),(0,o.kt)("p",null,"Before, we dive into how, here is a quick summary of why you will want a standalone gateway process."),(0,o.kt)("h2",{id:"why-use-standalone-rest-process"},"Why Use Standalone REST Process?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Zero Downtime Updates"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your bot can be updated in a matter of seconds. With normal sharding, you have to restart which also has to process\nidentifying all your shards with a 1/~5s rate limit. With WS handling moved to a proxy process, this allows you to\ninstantly get the bot code restarted without any concerns of delays. If you have a bot on 200,000 servers normally\nthis would mean a 20 minute delay to restart your bot if you made a small change and restarted."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Zero Downtime Resharding"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Discord stops letting your bot get added to new servers at certain points in time. For example, suppose you had\n150,000 servers running 150 shards. The maximum amount of servers your shards could hold is 150 ","*"," 2500 = 375,000.\nIf your bot reaches this, it can no longer join new servers until it re-shards."),(0,o.kt)("li",{parentName:"ul"},"DD proxy provides 2 types of re-sharding. Automated and manual. You can also have both.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Automated"),": This system will automatically begin a Zero-downtime resharding process behind the scenes when you\nreach 80% of your maximum servers allowed by your shards. For example, since 375,000 was the max, at 300,000 we\nwould begin re-sharding behind the scenes with ",(0,o.kt)("inlineCode",{parentName:"li"},"ZERO DOWNTIME"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"80% of maximum servers reached (The % of 80% is customizable.)"),(0,o.kt)("li",{parentName:"ul"},"Identify limits have room to allow re-sharding. (Also customizable)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Manual"),": You can also trigger this manually should you choose."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Horizontal Scaling"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The proxy system allows you to scale the bot horizontally. When you reach a huge size, you can either keep spending\nmore money to keep beefing up your server or you can buy several cheaper servers and scale horizontally. The proxy\nmeans you can have WS handling on a completely separate system."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"No Loss Restarts"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When you restart a bot without the proxy system, normally you would lose many events. Users may be using commands or\nmessages are sent that will not be filtered. As your bot's grow this number rises dramatically. Users may join who\nwont get the auto-roles or any other actions your bot should take. With the proxy system, you can keep restarting\nyour bot and never lose any events. Events will be put into a queue while your bot is down(max size of queue is\ncustomizable), once the bot is available the queue will begin processing all events."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Controllers"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The controller aspect gives you full control over everything inside the proxy. You can provide a function to simply\noverride the handler. For example, if you would like a certain function to do something different, instead of having\nto fork and maintain your fork, you can just provide a function to override."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Clustering With Workers"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Take full advantage of all your CPU cores by using workers to spread the load. Control how many shards per worker\nand how many workers to maximize efficiency!")))),(0,o.kt)("h2",{id:"creating-gateway-manager"},"Creating Gateway Manager"),(0,o.kt)("p",null,"Create a file under some path like ",(0,o.kt)("inlineCode",{parentName:"p"},"src/gateway/mod.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { DISCORD_TOKEN, REST_AUTHORIZATION, REST_PORT } from "../../configs.ts";\nimport { BASE_URL, createRestManager } from "../../deps.ts";\n\nconst rest = createRestManager({\n  token: DISCORD_TOKEN,\n  secretKey: REST_AUTHORIZATION,\n  customUrl: `http://localhost:${REST_PORT}`,\n});\n')),(0,o.kt)("p",null,"Throw another rest manager here which will be responsible for calling the main REST process we created in Step 1. This\nwill allow your gateway to communicate to the other process. Remember this is just to communicate outwards, this file\nshould not have the http listener."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Feel free to refactor and optimize this should you wish to move ",(0,o.kt)("inlineCode",{parentName:"p"},"const rest...")," to a separate file and reuse in both\nsteps.")),(0,o.kt)("h3",{id:"getting-gateway-bot-data"},"Getting Gateway Bot Data"),(0,o.kt)("p",null,"Now we need to use this rest manager to call the api to get information about how to connect to discord's gateway for\nyour bot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const rest = createRestManager({\n  token: DISCORD_TOKEN,\n  secretKey: REST_AUTHORIZATION,\n  customUrl: `http://localhost:${REST_PORT}`,\n});\n\n// CALL THE REST PROCESS TO GET GATEWAY DATA\nconst result = await rest.runMethod(rest, "get", endpoints.GATEWAY_BOT).then((res) => ({\n  url: res.url,\n  shards: res.shards,\n  sessionStartLimit: {\n    total: res.session_start_limit.total,\n    remaining: res.session_start_limit.remaining,\n    resetAfter: res.session_start_limit.reset_after,\n    maxConcurrency: res.session_start_limit.max_concurrency,\n  },\n}));\n')),(0,o.kt)("p",null,"With this info, we can now create our gateway manager."),(0,o.kt)("h3",{id:"understanding-gateway-manager"},"Understanding Gateway Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const gateway = createGatewayManager({\n  secretKey: EVENT_HANDLER_SECRET_KEY,\n  token: DISCORD_TOKEN,\n  intents: ["GuildMessages", "Guilds"],\n  shardsRecommended: result.shards,\n  sessionStartLimitTotal: result.sessionStartLimit.total,\n  sessionStartLimitRemaining: result.sessionStartLimit.remaining,\n  sessionStartLimitResetAfter: result.sessionStartLimit.resetAfter,\n  maxConcurrency: result.sessionStartLimit.maxConcurrency,\n  maxShards: result.shards,\n  lastShardId: result.shards,\n  // debug: console.log,\n  handleDiscordPayload: async function (_, data, shardId) {\n    await fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n      headers: {\n        Authorization: gateway.secretKey,\n        method: "POST",\n        body: JSON.stringify({\n          shardId,\n          data,\n        }),\n      },\n    })\n      // BELOW IS FOR SOLVING DENO MEMORY LEAK. Node users do your thing.\n      .then((res) => res.text())\n      .catch(() => null);\n  },\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basic Keys")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EVENT_HANDLER_SECRET_KEY")," is from your configs that will be used to make sure requests sent to your event handler\nprocess are indeed from you."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DISCORD_TOKEN")," if you can't figure this out, this guide isn't for you. Please find another."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"intents")," pass in a number or a string of intents. Autocomplete/type-safety is provided for strings :)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discord Data Keys"),": These keys will be the data you got from the gateway request we made earlier."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shardsRecommended")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sessionStartLimitTotal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sessionStartLimitRemaining")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sessionStartLimitResetAfter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxConcurrency"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Powerful Keys")),(0,o.kt)("p",null,"If your bot is going to be run on one process, you can re-use the data that discord gave you to connect."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxShards"),": is the maximum number of shards you want to use for connecting your bot. Should you think Discord is not\nsmart enough to recommend a good amount, use this to override their choice. Highly recommend just using theirs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastShardId"),": is the last shard you want to connect in this process.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using a combination of ",(0,o.kt)("inlineCode",{parentName:"li"},"lastShardId")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"firstShardId"),", you can create several processes or even several servers to\nhandle different amounts of shards should your bot get that big to require horizontal scaling. You can control how\nmany shards each gateway manager will be responsible for."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reshard"),": Whether or not to automatically reshard the bot when necessary with zero downtime deployment strategy.\nDefault: true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reshardPercentage"),": The % of servers to trigger a reshard. Default: 80%."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spawnShardDelay"),": The delay in milliseconds to wait before spawning next shard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useOptimalLargeBotSharding"),": Whether or not the resharder should automatically switch to LARGE BOT SHARDING when you\nare above 100K servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shardsPerCluster"),": The amount of shards to load per worker. Discussed in detail below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxClusters"),": The maximum amount of workers to use for your bot.")),(0,o.kt)("h4",{id:"gateway-cache"},"Gateway Cache"),(0,o.kt)("p",null,"There is a few things that we cache in the gateway process directly, because sending them across the network is not\nideal. This is done to support custom cache functionality."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"guildIds"),": Used for determining what type of GUILD_CREATE event is received."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadingGuildIds"),": Used for determining if all guilds have arrived when initially connecting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"editedMessages"),": Used to prevent spam of events across the network. MESSAGE_UPDATE are an extremely heavy event. Any\nembed or link that is in a message will unfurl triggerring a message update event. This is undesired behavior for 99%\nof bots out there. If someone sends a message with 5 urls, in there you will get a MESSAGE_CREATE and 5 MESSAGE_UPDATE\nevents. If that user edits a single letter on it you now get 6 MESSAGE_UPDATE events, 1 for the content change and 5\nmore for each url being unfurled. The editedMessages cache checks if the content of the message changed or not before\nsending the event downstream. Override this behavior if you need different behavior.")),(0,o.kt)("h4",{id:"gateway-method-overriding"},"Gateway Method Overriding"),(0,o.kt)("p",null,"One of the benefits of Discordeno is that you can override/customize anything from the library. Should you desire to\nchange the logic in any method it is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TYPINGS WILL BE AUTOMATICALLY PROVIDED\ngateway.heartbeat = function (gateway, shardId, interval) {\n  // YOUR CUSTOM HANDLING CODE HERE\n};\n")),(0,o.kt)("h3",{id:"handle-discord-payloads"},"Handle Discord Payloads"),(0,o.kt)("p",null,"One of the big things we didn't cover yet is the handler for discord payloads. This is the main sauce of your gateway\nprocess here. This is going to take the events that the gateway manager processed and send it to your event handler. How\nyou wish to communicate with your event handler is up to you. For this guide, we will use http, but you can replace that\nwith anything you like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"handleDiscordPayload: async function (_, data, shardId) {\n    // CHANGE FROM SENDING THROUGH HTTP TO USING A WS FOR FASTER PROCESSING! OR HTTP3 OR WHATEVER!\n    await fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n      headers: {\n        Authorization: gateway.secretKey,\n        method: 'POST',\n        body: JSON.stringify({\n          shardId,\n          data,\n        }),\n      },\n    })\n      // BELOW IS FOR SOLVING DENO MEMORY LEAK. Node users do your thing.\n      .then((res) => res.text())\n      .catch(() => null)\n  },\n")),(0,o.kt)("p",null,"You can change this function to use a WS or any form of communication you prefer to use to send this to your event\nhandler."),(0,o.kt)("h2",{id:"gateway-queue"},"Gateway Queue"),(0,o.kt)("p",null,"One thing we can add on here, which you will find already done in the template if you are using it. However, it is still\ngood to read this to learn and understand the logic behind it. When you need a downtime for whatever reason, you can\ncreate a queue like system to avoid any missed events. Let's create a simple queue. If it errors, assuming something\nlike the bot event listener process is down for whatever reason, the ",(0,o.kt)("inlineCode",{parentName:"p"},".catch")," will run adding this event to the queue to\ntry again in one second by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleQueue")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'.catch(() => {\n  // IF FAILED TRY TO QUEUE MAYBE LISTENER IS DOWN\n  if (data.t === "INTERACTION_CREATE") handleInteractionQueueing(gateway, data, shardId);\n  else queue.events.push({ shardId, data });\n\n  setTimeout(handleQueue, 1000);\n});\n')),(0,o.kt)("p",null,"Now TypeScript will probably throw some errors at your face, so let's fix those real quick. Create an object that will\nhold the queue of events for our gateway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const queue: GatewayQueue = {\n  processing: false,\n  events: [],\n};\n\nexport interface QueuedEvent {\n  data: GatewayPayload;\n  shardId: number;\n}\n\nexport interface GatewayQueue {\n  processing: boolean;\n  events: QueuedEvent[];\n}\n\nasync function handleQueue() {\n  // PLACEHOLDER FUNCTION THAT WILL HANDLE PROCESSING THE QUEUE\n}\n\nasync function handleInteractionQueueing(gateway: GatewayManager, data: GatewayPayload, shardId: number) {\n  // PLACEHOLDER FUNCTION\n}\n")),(0,o.kt)("p",null,"Alrighty, since TypeScript stopped being annoying, let's continue. Next, we should make sure to avoid fetching when the\nqueue is already processing or has events queued up. This will help us preserve the order of events in the queue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'handleDiscordPayload: async function (_, data, shardId) {\n// IF QUEUE IS RUNNING JUST ADD TO QUEUE\nif (queue.processing) {\n  if (data.t === "INTERACTION_CREATE") return handleInteractionQueueing(gateway, data, shardId);\n\n  return queue.events.push({ shardId, data });\n}\n\nawait fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n')),(0,o.kt)("p",null,"Typescript must be at it again so let's shut it up again. Keep in mind that we are handling interaction events\nseparately because they require a response within 3 seconds or they will become invalid. In this function first we\nautomatically respond to the ones that can not be deferred. For the interactions that can be deferred, we will simply\ndefer them and add this event to the queue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'async function handleInteractionQueueing(gateway: GatewayManager, data: GatewayPayload, shardId: number) {\n  if (data.t !== "INTERACTION_CREATE") return;\n\n  const interaction = data.d as SnakeCasedPropertiesDeep<Interaction>;\n  // IF THIS INTERACTION IS NOT DEFERABLE\n  if ([InteractionTypes.ModalSubmit, InteractionTypes.ApplicationCommandAutocomplete].includes(interaction.type)) {\n    return await rest.runMethod(\n      rest,\n      "post",\n      endpoints.INTERACTION_ID_TOKEN(BigInt(interaction.id), interaction.token),\n      {\n        type: InteractionResponseTypes.ChannelMessageWithSource,\n        data: {\n          content:\n            `The bot is having a temporary issue, please try again or contact us at https://discord.gg/${BOT_SERVER_INVITE_CODE}`,\n        },\n      },\n    );\n  }\n\n  await rest.runMethod(rest, "post", endpoints.INTERACTION_ID_TOKEN(BigInt(interaction.id), interaction.token), {\n    // MESSAGE COMPONENTS NEED SPECIAL DEFER\n    type: InteractionTypes.MessageComponent === interaction.type\n      ? InteractionResponseTypes.DeferredUpdateMessage\n      : InteractionResponseTypes.DeferredChannelMessageWithSource,\n  });\n\n  // ADD EVENT TO QUEUE\n  queue.events.push({ shardId, data });\n}\n')),(0,o.kt)("p",null,"Oh no, TypeScript is at it again. We need to make a REST manager so that our gateway proxy can communicate with our REST\nproxy. We then can make use of it to send a POST request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rest = createRestManager({\n  token: DISCORD_TOKEN,\n  secretKey: REST_AUTHORIZATION,\n  customUrl: REST_URL,\n});\n")),(0,o.kt)("p",null,"So now there is only one thing left the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleQueue")," function. First we get the first item from the queue using\n",(0,o.kt)("inlineCode",{parentName:"p"},".shift()"),". Then we check to see if that item exists. If it does not exist, we mark the queue as no longer processing\nand cancel out. However, if it does exist, we send a fetch request to the bot event handler process. In the ",(0,o.kt)("inlineCode",{parentName:"p"},".catch()"),"\nwe will add this event back in to the start of the queue in case the bot is still down. Finally we call this function\nagain to run the next item in the queue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'async function handleQueue() {\n  const event = queue.events.shift();\n  // QUEUE IS EMPTY\n  if (!event) {\n    console.log("GATEWAY QUEUE ENDING");\n    queue.processing = false;\n    return;\n  }\n\n  await fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n    headers: {\n      Authorization: EVENT_HANDLER_SECRET_KEY,\n      "Content-Type": "application/json",\n    },\n    method: "POST",\n    body: JSON.stringify({\n      shardId: event.shardId,\n      data: event.data,\n    }),\n  })\n    .then((res) => {\n      res.text();\n      handleQueue();\n    })\n    .catch(() => {\n      // EVENT HANDLER STILL NOT ACCEPTING REQUEST. SO ADD BACK TO QUEUE\n      queue.events.unshift(event);\n      setTimeout(handleQueue, 1000);\n    });\n}\n')),(0,o.kt)("p",null,"Full code is below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const rest = createRestManager({\n  token: DISCORD_TOKEN,\n  secretKey: REST_AUTHORIZATION,\n  customUrl: REST_URL,\n});\n\nconst queue: GatewayQueue = {\n  processing: false,\n  events: [],\n};\n\nexport interface QueuedEvent {\n  data: GatewayPayload;\n  shardId: number;\n}\n\nexport interface GatewayQueue {\n  processing: boolean;\n  events: QueuedEvent[];\n}\n\nconst gateway = createGatewayManager({\n  // ... OTHER PROPERTIES HERE SHORTENED FOR GUIDE\n  handleDiscordPayload: async function (_, data, shardId) {\n    // IF QUEUE IS RUNNING JUST ADD TO QUEUE\n    if (queue.processing) {\n      if (data.t === "INTERACTION_CREATE") return handleInteractionQueueing(gateway, data, shardId);\n\n      return queue.events.push({ shardId, data });\n    }\n\n    await fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n      headers: {\n        Authorization: gateway.secretKey,\n        "Content-Type": "application/json",\n      },\n      method: "POST",\n      body: JSON.stringify({\n        shardId,\n        data,\n      }),\n    })\n      // THIS IS FOR DENO MEMORY LEAK\n      .then((res) => res.text())\n      .catch(() => {\n        // IF FAILED TRY TO QUEUE MAYBE LISTENER IS DOWN\n        if (data.t === "INTERACTION_CREATE") handleInteractionQueueing(gateway, data, shardId);\n        else queue.events.push({ shardId, data });\n\n        setTimeout(handleQueue, 1000);\n      });\n  },\n});\n\nasync function handleQueue() {\n  // TRY THE FIRST ITEM IN THE QUEUE\n  const event = queue.events.shift();\n  // QUEUE IS EMPTY\n  if (!event) {\n    console.log("GATEWAY QUEUE ENDING");\n    queue.processing = false;\n    return;\n  }\n\n  await fetch(`${EVENT_HANDLER_URL}:${EVENT_HANDLER_PORT}`, {\n    headers: {\n      Authorization: EVENT_HANDLER_SECRET_KEY,\n      "Content-Type": "application/json",\n    },\n    method: "POST",\n    body: JSON.stringify({\n      shardId: event.shardId,\n      data: event.data,\n    }),\n  })\n    .then((res) => {\n      res.text();\n      handleQueue();\n    })\n    .catch(() => {\n      // EVENT HANDLER STILL NOT ACCEPTING REQUEST. SO ADD BACK TO QUEUE\n      queue.events.unshift(event);\n      // RETRY IN ONE SECOND\n      setTimeout(handleQueue, 1000);\n    });\n}\n\nasync function handleInteractionQueueing(gateway: GatewayManager, data: GatewayPayload, shardId: number) {\n  if (data.t !== "INTERACTION_CREATE") return;\n\n  const interaction = data.d as SnakeCasedPropertiesDeep<Interaction>;\n  // IF THIS INTERACTION IS NOT DEFERABLE\n  if ([InteractionTypes.ModalSubmit, InteractionTypes.ApplicationCommandAutocomplete].includes(interaction.type)) {\n    return await rest.runMethod(\n      rest,\n      "post",\n      endpoints.INTERACTION_ID_TOKEN(BigInt(interaction.id), interaction.token),\n      {\n        type: InteractionResponseTypes.ChannelMessageWithSource,\n        data: {\n          content:\n            `The bot is having a temporary issue, please try again or contact us at https://discord.gg/${BOT_SERVER_INVITE_CODE}`,\n        },\n      },\n    );\n  }\n\n  await rest.runMethod(rest, "post", endpoints.INTERACTION_ID_TOKEN(BigInt(interaction.id), interaction.token), {\n    // MESSAGE COMPONENTS NEED SPECIAL DEFER\n    type: InteractionTypes.MessageComponent === interaction.type\n      ? InteractionResponseTypes.DeferredUpdateMessage\n      : InteractionResponseTypes.DeferredChannelMessageWithSource,\n  });\n\n  // ADD EVENT TO QUEUE\n  queue.events.push({ shardId, data });\n}\n')),(0,o.kt)("p",null,"If you have any questions please contact us on discord. Note, you can take this concept and expand on it as much as you\nlike. You can swap out the fetch() with websockets or any other system you like to communicate between your processes. I\nhighly recommend you take some time to add checks in place to prevent adding to queue when the queue reaches a certain\nsize. You don't want this to become a memory leak of infinite size and crash your gateway. So take the time to do this\nright in your setup."),(0,o.kt)("h2",{id:"spawning-shards"},"Spawning Shards"),(0,o.kt)("p",null,"Once you are ready and the gateway has been created as you desired, we can begin spawning the shards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"gateway.spawnShards(gateway);\n")),(0,o.kt)("h2",{id:"workers"},"Workers"),(0,o.kt)("p",null,"Now, we should take a minute here to talk about workers. Workers are just Clusters in Node.js"),(0,o.kt)("p",null,"When you have a big bot and you are processing millions of events, you need to speed up that processing. Keeping it in 1\nthread is not very nice since JavaScript is single threaded. This means it can only process 1 event at a time. With\nworkers, you can make it process several events at the same time. We mentioned the ",(0,o.kt)("inlineCode",{parentName:"p"},"shardsPerCluster")," earlier. This\noption was added to allow you to choose how many shards should be managed by each worker."),(0,o.kt)("p",null,"When shards are spawn they are triggered by a method on gateway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"gateway.tellWorkerToIdentify = async function (gateway, workerId, shardId, bucketId) {\n  await gateway.identify(gateway, shardId, gateway.maxShards);\n};\n")),(0,o.kt)("p",null,"You can choose to replace the handler with any desired functionality you like. For example, should should you want to\ncreate a new worker for each new workerId that appears and have that worker trigger the identify functionaly. How you\nchoose to handler workers is left in your care."))}h.isMDXComponent=!0}}]);