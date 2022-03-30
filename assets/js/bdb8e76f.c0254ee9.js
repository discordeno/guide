"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2347],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,h=p["".concat(m,".").concat(u)]||p[u]||l[u]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2900:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},m="Create Command",c={unversionedId:"nodejs/CommandHandler/create-command",id:"nodejs/CommandHandler/create-command",title:"Create Command",description:"One of the most important features we wanted in our template, was that you can use the same code for handling",source:"@site/docs/nodejs/CommandHandler/create-command.md",sourceDirName:"nodejs/CommandHandler",slug:"/nodejs/CommandHandler/create-command",permalink:"/docs/nodejs/CommandHandler/create-command",editUrl:"https://github.com/discordeno/discordeno/tree/main/site/docs/nodejs/CommandHandler/create-command.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Command Manager",permalink:"/docs/nodejs/CommandHandler/command-manager"}},d=[{value:"Creating a Ping Command:",id:"creating-a-ping-command",children:[],level:3}],l={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-command"},"Create Command"),(0,o.kt)("p",null,"One of the most important features we wanted in our template, was that you can use the same code for handling\n",(0,o.kt)("inlineCode",{parentName:"p"},"slash commands")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"message based commands"),"."),(0,o.kt)("p",null,"This can be done by saving the static class in the command cache, creating a constructor and passing the desired data.\nMoreover the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseCommand")," is extended with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response Command")," class, so you can take advantage of functions such as\n",(0,o.kt)("inlineCode",{parentName:"p"},".reply()")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Copy the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/discordeno/discordeno/tree/main/template/nodejs/Structures/BaseCommand.js"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseCommand")),"\n&\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/discordeno/discordeno/tree/main/template/nodejs/Structures/CommandResponses.js"},(0,o.kt)("inlineCode",{parentName:"a"},"CommandResponses")),"\ncode from the template")),(0,o.kt)("h3",{id:"creating-a-ping-command"},"Creating a Ping Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const BaseCommand = require("../../../Structures/BaseCommand.js");\nconst Embed = require("../../../Structures/Embed.js");\n\nclass pingCommand extends BaseCommand {\n  static name = "ping";\n  static description = "See if the bot latency is okay";\n  static usage = "";\n  static category = "General";\n  static slash = { name: "ping", category: "info" };\n\n  constructor(data) {\n    super(data);\n  }\n\n  async execute() {\n        const msg = await this.reply({content: `Pinging...`});\n        // Assign properties to the response\n        const ping = msg.timestamp - this.message.timestamp;\n\n        const embed = new Embed()\n          .setTitle(`The Bots ping is ${ping} ms`)\n          .toJSON();\n\n        // Edit Message with the Embed\n        return await msg.edit({embeds: [embed] });\n    });\n  }\n}\n\nmodule.exports = pingCommand;\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"BaseCommand")," is extended with the ",(0,o.kt)("inlineCode",{parentName:"li"},"CommandResponses")," class."),(0,o.kt)("li",{parentName:"ul"},"The ping command class is extended with the ",(0,o.kt)("inlineCode",{parentName:"li"},"BaseCommand")," class."),(0,o.kt)("li",{parentName:"ul"},"Some static properties are assigned to the ping command class, in order to access it in the cache, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"usage"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"category")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"slash"),"..."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"execute()")," function will be called, when the command has been run by the user."),(0,o.kt)("li",{parentName:"ul"},"The constructor allows to access data, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"this.message"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"this.args"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"this.client"),"...")),(0,o.kt)("p",null,"You can customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandManager")," file, in order to pass arguments in the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," function."))}p.isMDXComponent=!0}}]);