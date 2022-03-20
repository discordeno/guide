"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6394],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},244:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:3},l="Handle Events",d={unversionedId:"nodejs/EventHandler/handle-event",id:"nodejs/EventHandler/handle-event",title:"Handle Events",description:"When an event is fired, Discordeno sends two important things: the client instance and the payload.",source:"@site/docs/nodejs/EventHandler/handle-event.md",sourceDirName:"nodejs/EventHandler",slug:"/nodejs/EventHandler/handle-event",permalink:"/docs/nodejs/EventHandler/handle-event",editUrl:"https://github.com/discordeno/discordeno/tree/main/site/docs/nodejs/EventHandler/handle-event.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Event Manager",permalink:"/docs/nodejs/EventHandler/event-manager"},next:{title:"Getting Started with the Command Manager",permalink:"/docs/nodejs/CommandHandler/getting-started"}},c=[{value:"Message Event",id:"message-event",children:[],level:3},{value:"Interaction Event",id:"interaction-event",children:[],level:3},{value:"Ready Event",id:"ready-event",children:[],level:3}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handle-events"},"Handle Events"),(0,i.kt)("p",null,"When an event is fired, Discordeno sends two important things: the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," instance and the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Structure")," section, the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," object does not contain any functions as it's a plain json\nobject."),(0,i.kt)("p",null,"In order to take use of our nice built structures, we need to transform the payload into a structure."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Structures can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/discordeno/discordeno/tree/main/template/nodejs/Structures"},"here")))),(0,i.kt)("p",null,"Sometimes it's important to listen to events, in order to get informed of changes and updating the cache based on it."),(0,i.kt)("h3",{id:"message-event"},"Message Event"),(0,i.kt)("p",null,"This file should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"messageCreate.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Message = require("./structures/Message");\n\nmodule.exports = async (client, payload) => {\n  const message = new Message(client, payload);\n\n  if (message.isBot) return;\n  if (message.content === "!ping") return await message.reply("pong");\n};\n')),(0,i.kt)("h3",{id:"interaction-event"},"Interaction Event"),(0,i.kt)("p",null,"This file should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"interactionCreate.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Interaction = require("./structures/Interaction");\n\nmodule.exports = async (client, payload) => {\n  const interaction = new Interaction(client, payload);\n\n  if (interaction.data.name === "ping") return await interaction.reply({ content: "pong" });\n};\n')),(0,i.kt)("h3",{id:"ready-event"},"Ready Event"),(0,i.kt)("p",null,"This file should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"ready.js"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is a small difference with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," Event. The Event is fired ",(0,i.kt)("inlineCode",{parentName:"p"},"shard")," wise, in other words it fires every time\na ",(0,i.kt)("inlineCode",{parentName:"p"},"shard")," becomes ready."))),(0,i.kt)("p",null,'In order to fire the "real event" a small code snippet has to be added to the ',(0,i.kt)("inlineCode",{parentName:"p"},"ready")," Event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const User = require("../Structures/User");\n\nmodule.exports = async (client, payload) => {\n  client.user = new User(client, payload.user);\n\n  if (payload.shardId + 1 === client.gateway.maxShards) {\n    // All Shards are ready\n    console.log(`Successfully connected to the gateway as ${client.user.tag}`);\n  }\n};\n')))}u.isMDXComponent=!0}}]);