"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3999],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9411:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:4},l="Create Components",c={unversionedId:"nodejs/Structures/components",id:"nodejs/Structures/components",title:"Create Components",description:"Since Discord has decided to make message content accessible only to privileged bots, components will play an",source:"@site/docs/nodejs/Structures/components.md",sourceDirName:"nodejs/Structures",slug:"/nodejs/Structures/components",permalink:"/docs/nodejs/Structures/components",editUrl:"https://github.com/discordeno/discordeno/tree/main/site/docs/nodejs/Structures/components.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create Embeds",permalink:"/docs/nodejs/Structures/embeds"},next:{title:"Design",permalink:"/docs/nodejs/design"}},p=[{value:"Different Components:",id:"different-components",children:[{value:"Action Row (<code>type: 1</code>):",id:"action-row-type-1",children:[],level:3},{value:"Button (<code>type: 2</code>):",id:"button-type-2",children:[],level:3},{value:"Select Menu (<code>type: 3</code>):",id:"select-menu-type-3",children:[],level:3},{value:"Text Input (<code>type: 4</code>):",id:"text-input-type-4",children:[],level:3}],level:2},{value:"Send Components",id:"send-components",children:[{value:"Button",id:"button",children:[],level:3},{value:"Select Menu",id:"select-menu",children:[],level:3},{value:"Text Input",id:"text-input",children:[],level:3},{value:"Receive Interactions",id:"receive-interactions",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-components"},"Create Components"),(0,i.kt)("p",null,"Since Discord has decided to make message content accessible only to privileged bots, components will play an\nincreasingly important role in the future. Discord has released some components already and many more will follow. Of\ncourse, this opens up completely new possibilities. On the one hand, it improves the user experience and on the other\nhand, the interactions can be easily handled by the developer."),(0,i.kt)("p",null,"To take advantage of this, we'll go into more detail on how to use them."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Runtime Overhead")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Constructor classes are nice to use and make your code look better, but they incur a slight runtime overhead compared to\njust using raw data because they still execute methods, which takes more time to process."))),(0,i.kt)("p",null,"We already have a Template for ",(0,i.kt)("inlineCode",{parentName:"p"},"Components"),", which can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/discordeno/discordeno/tree/main/template/nodejs/structures/Component.js"},"here"),"."),(0,i.kt)("h2",{id:"different-components"},"Different Components:"),(0,i.kt)("p",null,"There are many different components, which you can quickly read about here:"),(0,i.kt)("h3",{id:"action-row-type-1"},"Action Row (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: 1"),"):"),(0,i.kt)("p",null,"This is a top level component, which contains a limited amount of other components. It can be described as container."),(0,i.kt)("p",null,"An Action Row ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can not include an action row"),(0,i.kt)("li",{parentName:"ul"},"can maximal have 5 Buttons"),(0,i.kt)("li",{parentName:"ul"},"can have 1 SelectMenu"),(0,i.kt)("li",{parentName:"ul"},"can have 1 Text Input (only available in modal responses)")),(0,i.kt)("h3",{id:"button-type-2"},"Button (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: 2"),"):"),(0,i.kt)("p",null,"Buttons are interactive components, are bound to a message and they sent an interaction payload, when a user clicks on\nit."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/jUE2Kp0.png",alt:"Different Button Styles"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Needs a customId, except the Link Button"),(0,i.kt)("li",{parentName:"ul"},"An Action Row can have maximal 5 Buttons")),(0,i.kt)("p",null,"There are different styles of buttons, which can be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," - PRIMARY - blurple - customId required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," - DEFAULT - grey - customId required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3")," - SUCCESS - green - customId required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4")," - DANGER - red - customId required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"5")," - LINK - grey - url required")),(0,i.kt)("h3",{id:"select-menu-type-3"},"Select Menu (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: 3"),"):"),(0,i.kt)("p",null,"Select Menus are a simple drop-down with selectable options. They accept a set of allowed selects, which sends an\ninteraction payload, when a user selects sth. from the menu."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/42Hwiuw.png",alt:"Select Menu"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can specify a range of allowed selects (",(0,i.kt)("inlineCode",{parentName:"li"},"minValue")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"maxValue"),")"),(0,i.kt)("li",{parentName:"ul"},"Every Select Item can have an ",(0,i.kt)("inlineCode",{parentName:"li"},"emoji")," and has a ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),", in order to identify the selected item"),(0,i.kt)("li",{parentName:"ul"},"A default Select Item can be set"),(0,i.kt)("li",{parentName:"ul"},"An Action Row can have maximal 1 Select Menu")),(0,i.kt)("h3",{id:"text-input-type-4"},"Text Input (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: 4"),"):"),(0,i.kt)("p",null,"Text Inputs are interactive components, which can just be sent with a modal response."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can specify a range of text length (",(0,i.kt)("inlineCode",{parentName:"li"},"minLength")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"maxLength"),")"),(0,i.kt)("li",{parentName:"ul"},"You can add a placeholder, a pre-filled value and specify whether the text input is required"),(0,i.kt)("li",{parentName:"ul"},"An Action Row can have maximal 1 Text Input")),(0,i.kt)("h2",{id:"send-components"},"Send Components"),(0,i.kt)("p",null,"As mentioned above there are different types of components. This requires to define a type, so that Discord knows, which\ncomponent you want to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class ActionRow {\n  constructor(options = {}) {\n    this.type = 1;\n  }\n\n  setComponents(...components) {\n    this.components = components;\n    return this;\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const button = new Button();\nconst button2 = new Button();\nconst actionRow = new ActionRow().setComponents(button, button2);\n")),(0,i.kt)("p",null,"This code will obviously not work because it's a missing a lot required of data. The other reason is that we can't send\na class to Discord, we need sth. to transform it to a json object."),(0,i.kt)("p",null,"We have a pre-made class for components which you can find\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/discordeno/discordeno/tree/main/template/nodejs/structures/Component.js"},"here"),"."),(0,i.kt)("h3",{id:"button"},"Button"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const button = new Component()\n  .setType("BUTTON")\n  .setStyle("LINK")\n  .setLabel("Click me!")\n  .setUrl("https://google.com")\n  .toJSON();\n\n// Button with raw types\nconst button2 = new Component()\n  .setType(2)\n  .setStyle(4)\n  .setLabel("DO NOT CLICK")\n  .setCustomId("12345")\n  .toJSON();\n\nconst actionRow = new Component()\n  .setType("ACTION_ROW")\n  .setComponents(button, button2)\n  .toJSON();\n\n// Message to send\nconst messageOptions = { content: "hello", components: [actionRow] };\n\nawait client.helpers.sendMessage(channelId, messageOptions); // You can also use the Message Structure\n')),(0,i.kt)("p",null,"As you can see, for simplicity you can use strings instead of numbers (types), which are hard to remember."),(0,i.kt)("h3",{id:"select-menu"},"Select Menu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const selectMenu = new Component()\n  .setType("SELECT_MENU")\n  .setCustomId("12345")\n  .setOptions([\n    {\n      label: "Option 1",\n      value: "1",\n      description: `This is option 1`,\n    },\n    {\n      label: "Option 2",\n      value: "2",\n      description: `This is option 2`,\n    },\n    {\n      label: "Default Option",\n      value: "3",\n      description: `Default option...`,\n      default: true,\n    },\n  ])\n  .setPlaceholder("Select an option")\n  .toJSON();\n\nconst actionRow = new Component()\n  .setType("ACTION_ROW")\n  .setComponents(selectMenu)\n  .toJSON();\n\nconst messageOptions = { content: "hello", components: [actionRow] };\n\nclient.helpers.sendMessage(channelId, messageOptions); // You can also use the Message Structure\n')),(0,i.kt)("h3",{id:"text-input"},"Text Input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const textInput = new Component()\n  .setType("TEXT_INPUT")\n  .setStyle("SHORT")\n  .setCustomId("t1")\n  .setLabel("User ID")\n  .setPlaceholder("User ID")\n  .setRequired(true)\n  .setMaxLength(20)\n  .setMinLength(1)\n  .toJSON();\n\nconst textInput2 = new Component()\n  .setType("TEXT_INPUT")\n  .setStyle("PARAGRAPH")\n  .setCustomId("t2")\n  .setLabel("Reason")\n  .setPlaceholder("Reason for Ban")\n  .setRequired(false)\n  .setMaxLength(300)\n  .toJSON();\n\nconst actionRow = new Component().setType("ACTION_ROW").setComponents(textInput).toJSON();\nconst actionRow2 = new Component().setType("ACTION_ROW").setComponents(textInput2).toJSON();\n\nnew Interaction(client, interaction).popupModal({\n  customId: "ban_modal",\n  title: "Ban User",\n  components: [actionRow, actionRow2],\n});\n')),(0,i.kt)("h3",{id:"receive-interactions"},"Receive Interactions"),(0,i.kt)("p",null,"When a user clicks a button or selects an option from a Select Menu, Discord sends an ",(0,i.kt)("inlineCode",{parentName:"p"},"interactionCreate")," event, which\ncontains the information necessary to process it."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Collecting")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("inlineCode",{parentName:"p"},"InteractionCollector")," can also be used to handle prompts, which requires some tweaks, but will be added soon in the\nguide and the template repo."))))}d.isMDXComponent=!0}}]);