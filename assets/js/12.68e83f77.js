(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{425:function(t,e,a){"use strict";a.r(e);var n=a(31),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-hosting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-hosting"}},[t._v("#")]),t._v(" Docker Hosting")]),t._v(" "),a("p",[t._v("Docker is an open platform for developing, shipping, and running applications.\nDocker enables you to separate your applications from your infrastructure so you\ncan deliver software quickly. With Docker, you can manage your infrastructure in\nthe same ways you manage your applications. By taking advantage of Docker’s\nmethodologies for shipping, testing, and deploying code quickly, you can\nsignificantly reduce the delay between writing code and running it in\nproduction.")]),t._v(" "),a("p",[t._v("Learn more "),a("a",{attrs:{href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"installing-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker"}},[t._v("#")]),t._v(" Installing Docker")]),t._v(" "),a("p",[t._v("Installing Docker is very simple and supported on nearly every major operating\nsystem! Just follow the instructions "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v("\nto get started.")]),t._v(" "),a("h3",{attrs:{id:"building-the-bot-s-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-bot-s-docker-image"}},[t._v("#")]),t._v(" Building The Bot's Docker Image")]),t._v(" "),a("p",[t._v("Now it is time to build the image that will be running the bot! Simply run this\ncommand, replacing "),a("code",[t._v("IMAGE_NAME")]),t._v(" with whatever you want to name the image. Make\nsure to run this command from the root of the bot directory! This command could\ntake a while depending on how powerful your device is.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker build -t IMAGE_NAME "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h3",{attrs:{id:"running-the-bot-for-the-first-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-bot-for-the-first-time"}},[t._v("#")]),t._v(" Running The Bot For The First Time")]),t._v(" "),a("p",[t._v("With the bot's image built, it is time to create a container and run the bot for\nthe first time! Remember to replace "),a("code",[t._v("IMAGE_NAME")]),t._v(" with the same name you chose in\nthe last step, and replace "),a("code",[t._v("CONTAINER_NAME")]),t._v(" with what you want to name the\ncontainer. (RECOMMENDATION: Name the container with the name of your bot)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it --init -v "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v(":/bot --name CONTAINER_NAME IMAGE_NAME\n")])])]),a("p",[t._v("This command should create a new container linked to the directory containing\nyour bot's code. Once your bot finishes loading, you should be able to use the\nbot just like normal.")]),t._v(" "),a("h3",{attrs:{id:"starting-stopping-and-restarting-the-bot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-stopping-and-restarting-the-bot"}},[t._v("#")]),t._v(" Starting, Stopping, And Restarting The Bot")]),t._v(" "),a("p",[t._v("Now that the container is created, you should only need three main commands to\nmanage the bot. Remember to replace CONTAINER_NAME with whatever you chose in\nthe last step.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker start CONTAINER_NAME\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker stop CONTAINER_NAME\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker restart CONTAINER_NAME\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);