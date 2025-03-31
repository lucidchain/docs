"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[824],{68776:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=i(85893),s=i(11151),r=i(16905),o=i(73839);const a={tags:["lucid-chain","environment-variables","routes","configuration","architecture"],keywords:["Lucid Chain frontend","Svelte project structure","frontend components","routing in Svelte","environment variables","VITE_BACKEND_API configuration","npm scripts","CI/CD frontend deployment"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},d="Lucid chain frontend",l={id:"Contributing/Lucid Chain frontend/Lucid Chain frontend",title:"Lucid chain frontend",description:"In this section we are going to learn how lucid chain is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is back. This folder contains all backend logic and the integrations with Redmine and ITop. The other one is front, which contains all the frontend. Here you are about to explore front folder in order to understand its content. This is relatively easy to understand and it has a clear structure. It is a simple project developed in Svelte. The main part is in src folder. In components we can find all the different frontend reusable and/or complex parts. Some examples are issue tables, piecharts and other artifacts.",source:"@site/versioned_docs/version-1.2/Contributing/Lucid Chain frontend/Lucid Chain frontend.md",sourceDirName:"Contributing/Lucid Chain frontend",slug:"/Contributing/Lucid Chain frontend/",permalink:"/docs/docs/Contributing/Lucid Chain frontend/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2/Contributing/Lucid Chain frontend/Lucid Chain frontend.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/tags/lucid-chain"},{label:"environment-variables",permalink:"/docs/docs/tags/environment-variables"},{label:"routes",permalink:"/docs/docs/tags/routes"},{label:"configuration",permalink:"/docs/docs/tags/configuration"},{label:"architecture",permalink:"/docs/docs/tags/architecture"}],version:"1.2",lastUpdatedBy:"dangalcan",lastUpdatedAt:1743427486,formattedLastUpdatedAt:"Mar 31, 2025",frontMatter:{tags:["lucid-chain","environment-variables","routes","configuration","architecture"],keywords:["Lucid Chain frontend","Svelte project structure","frontend components","routing in Svelte","environment variables","VITE_BACKEND_API configuration","npm scripts","CI/CD frontend deployment"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Lucid chain backend",permalink:"/docs/docs/Contributing/Lucid Chain backend/"},next:{title:"Lucid chain CI/CD",permalink:"/docs/docs/Contributing/Lucid Chain CI-CD/"}},c={},h=[{value:"Main folder files",id:"main-folder-files",level:2},{value:"src directory",id:"src-directory",level:2},{value:"components directory",id:"components-directory",level:3},{value:"lib directory",id:"lib-directory",level:3},{value:"routes directory",id:"routes-directory",level:3},{value:"stores directory",id:"stores-directory",level:3},{value:"Enviroment variables",id:"enviroment-variables",level:2},{value:"VITE_BACKEND_API use and sense (only for developers)",id:"vite_backend_api-use-and-sense-only-for-developers",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lucid-chain-frontend",children:"Lucid chain frontend"}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["In this section we are going to learn how lucid chain is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"back"})}),". This folder contains all backend logic and the integrations with Redmine and ITop. The other one is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"front"})}),", which contains all the frontend. Here you are about to explore ",(0,t.jsx)(n.em,{children:"front"})," folder in order to understand its content. This is relatively easy to understand and it has a clear structure. It is a simple project developed in Svelte. The main part is in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"src"})})," folder. In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"components"})})," we can find all the different frontend reusable and/or complex parts. Some examples are issue tables, piecharts and other artifacts."]}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Frontend structure",src:i(13881).Z+"",width:"248",height:"593"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Figure 1:"})," ",(0,t.jsx)(n.em,{children:"Lucid chain frontend structure."})]})}),"\n",(0,t.jsx)(n.h2,{id:"main-folder-files",children:"Main folder files"}),"\n",(0,t.jsxs)(n.p,{children:["As you can see in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Figure 1"})})," there are some files that are not in any of the directories. Here we are going to explain all of them."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".env:"})})," This is a special configuration file. In case you have just cloned the repo you will not have it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".env.example:"})})," This is a example of how your .env file should look like. We will cover enviroment variables later."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".gitignore:"})})," In this file we specify the files that we do not want git to track."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".npmrc:"})})," This is a configuration file used to configure the behavior of npm. In our case, it is better not to change it because it only ensure that npm will strictly enforce the engines specified in package.json."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".prettierignorer:"})})," This file is used to tell Prettier (a code formatter) which files and directories should be ignored so it does not format specified files. You can leave it like that."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:".prettierrc:"})})," This file is used to configure Prettier\u2019s formatting rules. In our case there is no need to change the default values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"eslint.config.js:"})})," This file is used to configure ESLint (Lucid chain linter used to develop it). There is no need to change this file unless you want to add or remove linting rules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"package.json:"})})," This file contains all the dependencies. There are some custom scripts in it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"package-lock.json:"})})," This file contains all the project dependencies with its exact versions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"README.md:"})})," This is the default README.md file from svelte projects. In the future we will update it or remove it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"svelte.config.js:"})})," This is a special svelte configuration file. It contains some svelte project configuration. There is no need to change it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"vite.config.js:"})})," This is a special svelte configuration file related with Vite and enviroment variables. There is no need to change it."]}),"\n"]}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:'"svelte-kit"'})})," and ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:'"node-modules"'})})," directories are generated automatically and you do not have to worry about them. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:'"build"'})})," directory is also autogenerated but when you run the command ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"npm run build"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"src-directory",children:"src directory"}),"\n",(0,t.jsxs)(n.p,{children:["In src directoty we can find all the interesting and important content. It has all frontend logic. Now let's explore it. The only file here is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"app.html"})}),". Here we import using html some styles. There is no need to change this file unless you would like to import some new libraries in the html."]}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"src structure",src:i(79932).Z+"",width:"221",height:"193"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Figure 2:"})," ",(0,t.jsx)(n.em,{children:"Lucid chain frontend src structure."})]})}),"\n",(0,t.jsx)(n.h3,{id:"components-directory",children:"components directory"}),"\n",(0,t.jsx)(n.p,{children:"This directory contains all the svelte components of the app. This is where you should have all the new components you design and develop. This make it possile to reuse them and also simplifies views because it separates them in parts. A component is any functional and/or styling part of the app that you want to reuse in other pages or you want to insolate due to its complexity."}),"\n",(0,t.jsx)(n.h3,{id:"lib-directory",children:"lib directory"}),"\n",(0,t.jsxs)(n.p,{children:["This directory is not in use yet. This is part of the default configuration of a svelte project but it has not been needed yet. This directory is meant to contain directories such as ",(0,t.jsx)(n.em,{children:"/components"}),", ",(0,t.jsx)(n.em,{children:"/styles"})," and so on. In our case we decide to have components in another place so that is why lib is not in use."]}),"\n",(0,t.jsx)(n.h3,{id:"routes-directory",children:"routes directory"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"routes"})})," we can find the screens and navigation structure. Svelte assigns each folder to a word between slashes in the browser, which creates a route. For example, if we have the folders ",(0,t.jsx)(n.em,{children:"routes/docs"})," and ",(0,t.jsx)(n.em,{children:"routes/docs/example"}),", that means that the route ",(0,t.jsx)(n.em,{children:'"/docs/example"'})," exists in the app. Inside every folder we can find the exact same name for every file, which is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"+page.svelte"})}),". This allows the framework to create routes and associate them to screens in a dynamic and confortable way."]}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["Be advised: any folder without a ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"+page.svelte"})})," file will not be considered a route, or will be considered a part of one. Following with the past ecample:"]}),(0,t.jsxs)(n.p,{children:["If you have ",(0,t.jsx)(n.em,{children:"routes/docs"}),"  and ",(0,t.jsx)(n.em,{children:"routes/docs/example"})," directories, and you have ",(0,t.jsx)(n.em,{children:"routes/docs/example/+page.svelte"})," file, your app will have a route ",(0,t.jsx)(n.em,{children:"/docs/example"})," that shows the content of ",(0,t.jsx)(n.em,{children:"+page.svelte"})," file. However, the route ",(0,t.jsx)(n.em,{children:"/docs"})," will not show any content and your app will display a ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"404 Not Found"})}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"There are folders that have special meaning. If you see any folder named between brackets, that means it is an url param. For example, the folder name [target] is refering to an url param, in this case, target."}),"\n",(0,t.jsx)(n.p,{children:"Let's see a full real example for a better understanding:"}),"\n",(0,t.jsx)(n.p,{children:"There are 3 folders:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"routes"}),"\n",(0,t.jsx)(n.li,{children:"routes/export"}),"\n",(0,t.jsx)(n.li,{children:"routes/export/[target]"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This means that in the app there is an url corresponding to the route ",(0,t.jsxs)(n.em,{children:["/export/",":target"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Let's supose that there is a file called ",(0,t.jsx)(n.strong,{children:"+page.svelte"})," inside ",(0,t.jsx)(n.em,{children:"[target]"})," folder. That means that when the user goes to ",(0,t.jsxs)(n.em,{children:["/export/",":target"]}),", he will find the screen defined in that ",(0,t.jsx)(n.em,{children:"+page.svelte"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the user will find the same page whatever taget value is. In lucid chain case, this means that ",(0,t.jsx)(n.em,{children:"/export/itop"})," and ",(0,t.jsx)(n.em,{children:"/export/redmine"})," will lead to the same screen."]}),"\n",(0,t.jsx)("div",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Routes structure",src:i(12344).Z+"",width:"193",height:"357"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Figure 3:"})," ",(0,t.jsx)(n.em,{children:"Lucid chain routes directory structure."})]})}),"\n",(0,t.jsx)(n.h3,{id:"stores-directory",children:"stores directory"}),"\n",(0,t.jsxs)(n.p,{children:["This directory is used to stablish and manage enviroment variables, global variables and contexts. In our case, we only use it for enviroment variable. There is no need to change its content. You will see here a single file named ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"stores.js"})}),". It contains enviroment variables assignations."]}),"\n",(0,t.jsx)(n.h2,{id:"enviroment-variables",children:"Enviroment variables"}),"\n",(0,t.jsx)(n.p,{children:"Now let's cover enviroment variables. If you see what is inside .env.example, you will see the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-.env",children:"VITE_BACKEND_API=\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lets talk about them and see what they do."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("u",{children:(0,t.jsx)(n.strong,{children:"VITE_BACKEND_API:"})})," This is the url to Lucid chain`s backend API. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Its default value is an empty string ('')"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vite_backend_api-use-and-sense-only-for-developers",children:"VITE_BACKEND_API use and sense (only for developers)"}),"\n",(0,t.jsxs)(n.p,{children:["We made a whole section about this enviroment variable because it is the weirdest of the project and it is a bit tricky to understand. By default its value is an empty string because in production mode Lucid chain's backend and frontend are on the same host, port and route. However, when you want to make changes in frontend, in order to make them visible in the same url ",(0,t.jsx)(n.em,{children:(0,t.jsxs)(n.strong,{children:["(",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),")"]})}),", you will have to run the command ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"npm run build"})}),". This is because of framework reasons and because of svelte handler is attached to the backend. Lets explain this better."]}),"\n",(0,t.jsxs)(n.p,{children:["Svelte's framework works transalating ",(0,t.jsx)(n.em,{children:".svelte"})," files to ",(0,t.jsx)(n.em,{children:"html"})," code so browsers can understand everything. This process is called ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"traspilation"})}),". When you run the command ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"npm run build"})})," you are making Svelte traspile your code, inject enviroment variables and creating all routing logic. This is stored in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"build"})}),' folder. Why is it important? Because there is a special thing called "handler". This handler ensures the routing and redirection logic, and it is imported in ',(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"app.js"})})," file in backend. This way you make backend and frontend run in the same port and host. It is very important to understand this because ",(0,t.jsxs)(n.strong,{children:["all your changes will not be shown unless you run ",(0,t.jsx)(n.em,{children:"npm run build"})," command"]}),". As you can see, this is a problem when you want to add new features or you are making changes because it can be a little annoying. To fix this, you have an special command, which is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"npm run dev"})}),". This command updates your frontend everytime you save a file or make a change (as nodemon does). However, there is another problem. ",(0,t.jsx)(n.em,{children:(0,t.jsxs)(n.strong,{children:["Your frontend will be running in ",(0,t.jsx)(n.a,{href:"http://localhost:5173",children:"http://localhost:5173"})]})}),". This will confuse Lucid chain because all the http requests will be made to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"localhost:5173"})})," instead of ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"localhost:3000"})})," (the backend). To fix that, we have ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"VITE_BACKEND_API"})})," variable. If you want to test your Lucid chain and watch it interact with the backend your frontend .env file ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"must"})})," look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-.env",children:'VITE_BACKEND_API="http://localhost:3000"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This way you will make correct requests to your backend and you will be able to see all your changes without running ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"npm run build"})}),"."]}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(n.p,{children:["Please take into account that you will also need to have your Lucid chain in developent mode. You can do this by ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"setting APP_MODE enviroment variable to dev."})})," If you do not do that, your backend will reject the requests because of authentication reasons."]})}),"\n",(0,t.jsx)(o.Z,{children:(0,t.jsxs)(n.p,{children:["In your local machine both production configuration and development configurations will work, but that ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"DOES NOT MEAN"})})," it will work in your deployment enviroment. Please do not forget to set VITE_BACKEND_API to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:'an empty string ("")'})})," when deploying Lucid chain. If you do not do that, your deployed frontend will make requests to the client's localhost:3000, and Lucid chain will not work. You should also set APP_MODE to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"prd"})})," in order to change app mode to production."]})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},73839:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(92949),s=i(85893);function r(e){let{children:n}=e;const{colorMode:i}=(0,t.I)();return(0,s.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==i?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==i?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},16905:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(92949),s=i(85893);function r(e){let{children:n}=e;const{colorMode:i}=(0,t.I)();return(0,s.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==i?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,s.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},79932:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADBCAYAAABL0LX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAB35SURBVHhe7d0PWBNnngfwr3/AuonUgBqWGuWP0sR1pVVYK3a30Ctx68bHpb0VH1u6V3I+xe1jbO+kt8X12fRxxe5CuxUfK91e7FO1PXG3zWnjWbEeUQGrxLq4tqEUqDQtSyyQLpJTE7H3TmaiSYAKGMYEf5/niUnemcxM8uSbd94ZnN+o2NjYbzEEGRkZMJvNwjNCyECNFu4JISKh0BEiMgodISKj0BEiMgodISIb3tApU5EaIzweKGUGMpTCY0JGoGE8ZaCG/m0dUnssKHtGD1OH0PxdlE+g+IVlUHWbUaQtQY3Q/N1UyP61Do/MU0A2nm9xO6wwvVwAw2numRalpmzIT5Ri83kNVi1OhGyME5aXcqCv5KbLkPGrQuTePwPyqAiugVsArPtKUPBGHf+ckCAaxp6uAsUvmtAsTUX+K3pobtTjeQMHK/YUDzRwEiwrKYL2/li46itges8E0xErOiNjoZgozOIVn4M19zbCkKeBRuMNnAraLduxdrEK0e5GmLnXs5v5MxekcpnnZYQE27CfHJfMycemFzRI7P6OHs83cL8twI56of2G+F4sscWEnKfL4BRaIZGx/ssBh6dBmMfNlv04W/a1mYDUAgP0D8jhYL1g/oaK668nZBgN+4EU55ky6J439t/jKbOxcd1QAsex4wKXlLhZyJ0j4Zs4Tm/gfLQ24R2/tgxo7pUDHTXYTIEjIhLn6GW9oe/geQKnRUrkUALHMWHXe1Y4RydCU1SOckMxdEtTWS/Xm7O9OSBYSYiOYsO3r6ywCC2EiEG8Uwbe4N0hBG+mBnoucKiDYUiB41l3FSAnT48dVc3olqqgXqnHzjcLofbp+DyuuIQH/lxu6uOIuMQLHYcL3noheH/MRyoXuI3rYBxi4K7psGDPizpoc3JRUmmHOyYd2n/LECb25wIuu9nwb+ocFnxCxCNu6Die4JXB+J4RZTcdOBlkfmNEB8xltWhjjyLvnMI39Ws/aqysl5MvhHalSmgjZPiF+X/t0aJ0rxqST2tR29TNnkdCMS8TKXEu1L2eh3V7uV1H73m6EuRsCNheiRr6Mh1S2SDQ2WJB9Zk2uNgyYpUpkNt3YtWL9F+XSPCJ39MFVRM++dKF6LszoFmiYTc1Zo23oeJVvRC4G3BWQP9MCUyf2IG4VKiFZaRMcqHJ2iTMREhw0X9iJURkYd7TERJ+KHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIKHSEiIxCR4jIQjx0EqQ/kM7+JWTkCOnQyZfpsaagAKUFagoeGTFCOnT2PXoYjnQi+oFVFLxwtngttu00oDBTeH6bC/HdSycqinXYRsELb3dNg0ImRaTw9HYXBgdSKHhkZAmjS/BJkL66BAWLYtF2sBhrt9TcRKWdARSClKRg2ep8LPEpNomLDthOvYvSF42wCk1c9R/922uR2mFEztsR2PSrRUiUsWX2OGE7vhOFL5rgWpB/vZ1xfGbCtt+UoebaG7h+Qdy8D5TQ/2smVHL+p8XtsKH2v0tR9M71NXrEZCD/P3KROVMOifctdNnReMQA/Ws+n83KUpiWymF5KR9m1QvQZiXCsxk+2+fg5xSwz/kpPbQPqiBsApx2Kyr/U4+y496lXt/e/KNKvPCv19+b88sa7FxXJJREE8qUeab46LKgZIUe5hsW9ByZxkilUr3weFDi4+Nx7tw54ZkY3LCdNMMWk45FixYhPcYG80kbax0srhBkKbQ/kmNcdwOOHT6Bsw0NaP02FrFjGrC/ir0niRqFrxZCo7wTV1stMB/7CNaGVvTEzkCSMhWZC8bjzIHTaPcsLx4Zj6Yj7uo4zMuYDZz+ANV/a8XYuGTEz0zBPZPleOixhyBpqITZYkXr6Lugmjkb9/3wCkwVHwvbPxcPr1BB2hmJ+zQLMbn1Qxz+8Cwa2noQm5SE5HlpSP66AuZm4d0q2Zf5ZS3mx42D89Nj/LxfdEE6NRlJc36Mh5LaUXG0iV/2vIexQilFz/fVeFh5CScOV7P3y7ZPwbZvRirSJh7D/touz2K5wKnXl2HtgwqM+rvwvr+4iMlse+c++BPENe1DzVfcfML29sRCvWg2LtVy75l9huy9JSckITUtCsdMFnRhDO6Y0I3Wy5ORLB8LW9UBHKtrQEP9GZyoa8NPS7biyblSdJ097PlsuPcbrYgFzhphFvOrJbIwvNjs9R7P9o4OujdsQvvADKQQZMb6cqydH4nmvYXQve7bw/BfSt18Kay7H0fBLu7VQk8X5fS5lDsznQXjFfYrzzoA/3WlovBNPdKjrNiRXYA9njZvj+CEZXMe9Id8tkqpg6FEDbndjHXaEtRB4fnRyE7oZvPm+8/r+UEp8kyr2ZCLohOsydPTsb7GYUFpvh4V3tl7LZfJ1KP831OBU6XI+63PZ6PMx7ZNGsQ27UD2Wm6LvdvrCNgGFXR/KoY6zg7zei1KvL3Vtd7WWwGXIyzjOwt6jkxhMKbrzenifsMjIImK5hsGbCCFILORxRWY7KjFDr/Acdj48mUzmtm6VfOWC22CLiuO+F7KvaUCjV9zD+yo3eG7Lgss59iziGhMu1do8mqthsEvREx9KQ7Ws/crT8ICbndvejbSEyLgrj+E4sB52U6v4d06ti4ZVA+lC208W1Xx9cBx6o/Aamf346Vgn4hHdlYK+1mxo3p7wGdTvxN1rWyT42axT9BHS3XANrDP4DNuoVJIJ/Et/RtEQc8RJsxCJ0HKU5ugX5KI7uOl0G0ebCH+gRSCjMYENr7odx5nEzq5vbFJcvh9rTtsqBAe8mxwXubunXC2eBqucV3h/mVfzIC66M6/17NX9Xb+H1xtvWjE/ojdJUazVwKdLZX+wfCqtLGvMxu1TvKtROSEvSFw7jo4/o/dsR8uBd+A6AncuEwO9VYTTCbfWzk009kkNm+SZ06es62+1zbUfcO1SBAdzz/v38ALeo40YRQ6n8Bxu2sb++upbixkC0H2U7iS143ub4SHw+miDTXvsaD1eavkd0ODZMAFPUeYMAldQOCGXCN8IIUgO3HhItuVukvFRl99kAi9pb0RNUJTsEimJLF3GkiBOQrW6u7EF9wYqbmTxY/1StMz+5iXyVR4dhftrYMv6nyB+3DGR6L7/TKUvdbXzRj8UtFDKugZ3sIgdMEKHGcghSCNOF7P5olJwxO95pFAzb4QiXCj0bJfaAuiBPaF8x3fMJKl+VgYxzLXVMu2nmkxovZL9qOgzEJBVmDsVNA+wo/LrEcH3yft/2sje2dyLMwbjnOhgbucN1PQM7yNFe5DVDADx3HCuNGAFK4Q5NJilN/TdyFI04sGpPaaR4qk9IVQxUR4jkbqd9/clvTF7YhE5obtmFFViU/YuDFyahoy75Ujwt0M43/uEd67DWWvGDFrUzZS1+zCzqxqVHMFMe+IRcr8VCii3GjeW4IS7sjlIDl3bYdpfhGy5+mw680sVNc0eXpVRCmQopwB94c50L3umXVwGjvZtici8UE2botsgnSqFDXrHXhkOwt3QEFPBZuz7tgw/KCFkJDu6eTL9XzgTpVBd9OBEwykECQ3T34R9py2+cyTgRmj22DZUxSE8PfN1bAT+ncaIUnl1qeBek40ultqYHheB4NvmWiuhPTzZaj4rBtSb0HMrFREX7Si4tXA0xyDYYXh19wYy4buKBUyPO+b3X40A5Ed1ag4Jsw2WJXFMByxwcmWyX2W6ZNdrF+7yYKeYSzEz9Ox3bklmahlg3j/v5oYafhzVn2WaCYjToiP6ZyoGPGBI7ebMDplQMjIQKEjRGQUOkJEFoZ/8ExIeKOejhCRUegIERmFjhCRUegIERmFjhCRUegIERmFjhCRUegIERmFjhCRUegIERmFjhCRUegIEVmIh24YikJyVxs2lUN/rWyTBMv+YIRp706fUk7cVZtNMG3RCs8JCZ6QDp04RSGj4bnGKiEiCenQiVMU0gbDs9nQLM1F0bXr7BMyfEJ895Jq05GRJwwOpFDwyMgSBqHj8MErPtjmCV7J6uAeXOFKY5lMpejzsIkyG4Vbd8K418QX0yg3oPipIB/cIbeVMAkdx4maLWs9wYtdVBD04PVptAL6dVqkoAmV/8MCd8jCRoByqJYUYFO/l2Un5LuFUeg4/sHb9KS3yNMwmZ4CeVUBcp7Wo5QroLFZj1V5BtQ5I5C4OA/LhNkIGYwwCx1v6EUhB+niJ6h4LeAS5U4j9ljsbPXTMCtLaCNkEMIsdDdbFHKQzgcWeuQNvPAhIb2FUeiCVxRywK66v2Mdbly+IDwkZBDCJHTBLpk1QDEK/xrbguwEbizZCfun/HNCBiMMQneLAseJUiHr0YAq2EodNHMiALsVZq4yKiGDFOKhu4WB43S5MO2J7TBs0CH/qXzkF5Si/PdqyOGAZfe24JcCJreFkA7dsBSFHIwOM3SvVcIVr+YLFz6QCLRbYdqYD/0h0beGjBBUFJIQkYX47iUVhSQjT5gcvSRk5KDQESIyCh0hIqPQESIyCh0hIqPQESIyCh0hIqPQESIyCh0hIqPQESIyCh0hIqPQESIyCh0hIqPQESIyCh0hIqPQESKyEA/dMBSFJOQWC+nQiVMUkhBxhXToxCkKKY6UJzfCUF7cd2UgclsJ8d3LkVObTjZ1BuSSccIzcjsLgwMpVBSSjCwhfgk+XxKkry5BwaJYtB0sxtotNUO7DubKUpiWymHZvBlti1dBM1MGdFlQskIPz7uJyUD+f+Qic6YckgjPK+DusqPxiAH613zWmalH+b+nwr5XA93rQpuAKzK5dr4dRo0OBmG+Xj8UnxuhWW3gH3OFJ1c/grSpMkSMYc/dDthOvIvSF424XjNIhexf6/DIPAVk4/kWt8MK08sFMNCVpsNKGPR0XsEtCqlYvgYp5wzI1Wig8QZOqUVp2VpoZkXD9ZkZpvf4QpBtnkKQhShbP4RetrkG+9lyalq48l4O1HHL5G4fCBWHuHVu0iI9Dmis4qeZz0VCcb8WRSXLhPVJsKykCNr7Y+Gqr+Bff8SKzshYKCZ6ZiBhJIxCxwlWUUgJoh37sXaz2eeamgpon9YgcbyD9YKPI/e5EpR5C0GuKIDxczdk83OxZr4w+0C1VGAHW05Nm4s9caCZWyZ328tdlF1YJ2wwPZ+LgmJ+WsmzeSg95USEchFW3cstZDnuV7Jut+UgdOtL+dcXF0Cbp8Pmk9x0Ek7CLHS8YBSFbPvsHf/d0+nZSE+IgLv+EIp7XTLdCsO7dWx+GVQPpQttQeBdp7UCZfVCmwcbx1ZZ2b9yTEvlnttxgdukuFnInePT1zodcAxpH5vcSmEWumAVhXTC3hzwbU2MhpTddbZU+ofRq9LGvvqAbFIQa40L64yYo4XJxHYZfW9r+HGgPJYr1mXCrvdYCEcnQlNUjnJDMXRLU9lPAAlHYRS6IBeFvCLchwDHJyxk3rFewG3/h02eeay7CpCTp8eOqmZ0S1VQr9Rj55uFUN/MwJbcEmESOhFKZjV3opvdRU/P9PQwvWQq2M4e29Fr9S+QJZsSuLspQdKUASbhm27POqVX7Pw4rY/bjkM2fl5OhwV7XtRBm5OLkko73DHp0P5bX2UrSSgLg9CJVKOuxYjaL9munjILBVmBoVFB+0gK2xI7rEeFXVohpLLpqWyqD6WWjdOEx73IIL9feMg5bUZTB1unSo18pdDWJxlkMcJDDwfMZbVoY48i75zCN5GwEfKlsoIeOO95updyoK8U2rw8h++zkRjhZrt81ahuYrG6IxYp81OhiHKjeW8hdK97z5wpoP1jKbJnRsDdWofKUza4opKwMH0aXF+zsViccJ5OmFvC1lu+NBHuL2tw8HQ3kiY5UbDRAEmWHmVs/CbrccJmqUbdee4oZyRik1RIkttg+GURzGDbtVcNyae1qOW2iU1XzMtESpwLda/nYd3eYfkZIsNkjFQq1QuPByU+Ph7nzp0Tng0P+fIilPwimS8K+cIBdAntN2Xew1ihlKL1+F9gDtz89tM4UNeFSQnJuHumCiplMpKT4jD2GyvMO0qgL79+qhpsa05X2RB1z2zMUMQjmZt38iV8/F+/x75xGUif6kT92wfgPW/t/ugcxt6ThjlJbL67k/C99lr8pfJjuJvNMH8VBdXMBCTdrWLT2PQZ0zA5shvWD/bhz3U2uHEnpv84BT9MFLaJvT7mSgsOv1GCTaZWYQ0kXFBRSEJEFuJjOioKSUaeMDtPR0j4o9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIrIQDx0VhSQjT0iHjopCkpEopEN3q4pCUgFHMpxCfPfy1tSmowKOZDiFwYEUKgpJRpbbryjkdxVXnDiAAo6SFCxbnY8lPq/HRQdspwKLOGpRasqG/EQpNp/XYNXiRMjGOK9f5FaSjvzfapF5txwSrhBkjxP2TytheKEMNT5vTPVoIXQ/T4NC5q1Q6YB1H/sc3hhq8RRyq4X0xWb9uWE7aYYtJh2LFi1CeowN5pPchVgHgyuuuBVPzpWi6+xhmC1WNLT1IFoRC5w1wtwcie9d/Rr/uCMBioldqHvvMCwNDWg4cxqWT1vZy9UofLUQGuWduNpqgfnYR7A2tKIndgaSlKnIXDAeZw6cRrtnXXPx8AoVpBHxuG+KFX9aswZFBuECt2w5+rK1yJg2CvZaM46dtuLcxcmYNWcuMn4Sh4Z9NeAuIStZXoytv5wLqeMsDpst/LqipyH26lkYj4r52ZNgCqOezut6j2d7RwfdGz4FNm6I730SW0zIebrsek8pkUGG67Xe/MoX800efHtkwOXVORKo15dBN18K6+7HUbCLW5CwLrcVex4vwA6f3otfDmDZnAe9Ty081VPbULQkFo27slGwmy3hjyZkz7TBlLMKZdc31lPXwNHhs0ASVsJgTNfb0ItC3kxxxWxkca/pqMUOv8Bx2LjzZTOa2Tap5i0X2gStTXjHb9nCclqrYQgoPmndVYc2toxpM/lKPPZubnosZj3OFS/xclLgwlyYhe5mi0LeTHHFaExgYzj3V1b4F8sSOJvQyRVbmCSHb/EsZ3tzwNiTXw7i1NgWWAiyXAOuoLNkSpJnTtNb+2HtikDiko0oLzegeE02Uv2q95BwFEahC05RSNGLK17hqvD05m6p6bMIpOf2gfBjUr8DBStyod9Vg+ZuKVRZWui370Rhr1JeJJyESeiCXDJrSMUVO3HhItupvUsFTxnwQJIkREexMNkbUSM09e0CLrO944iIbuzvowik57bXty91wLK7CDptDnKLzbBflSH9yQJQKcjwFQahC2bgBlNcMaCAI4w4Xs/WHJOGJ1YG1h2XQM1Cmwg3Gi37hbb+7Mffmljq4hZCe4MeSxbjv+PrOLINtdxhzfESUCnI8HWbFYUcWHHF/go48of6dUhlWXC2WFB9pg0uSJGUvhCqmAg4/LbRe56uBDkbAj6nvopPMtKpKVAlu1GTwx811W4xQf09K2pPNnmqvkZOTUPmvXK4zhiQV2i8yc+C3Cq3WVHIgRVX7K+AI9xNMFewaTPikZzElqHipsdj4uVWnH5vKwq3mH2CIJyn+6oGfwk8p9Z+GketV3DXjAQkXNuWZNwluYSvPtyPfScaPOf67kz4MVKUSVD9gJ+eNNGNFvObKCna5zmPR8ITFYUkRGQhPqajopBk5Amz83SEhD8KHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9ARIjIKHSEio9CFgpWlMJnKoc8Unt8yGdC/bYJpCxUJG04hG7qFkaOER5xReEw2BnHCM0LCWUiG7qeJUfjDfUKVGo9vkXDPJGyfNZaChxRoiwwoL6HeKFyFXOgemzUR6x+YgEiufJSfsYiZPwVvzR2Lu4WW25MMing5qGZl+Aqp0D2ZEoNn5ksQefEC3v/Q/3Lkv6s+j0+7AGnKFJQtjMBCoZ2QcBMil+AbhWd+FI3HfnAH0P4N3jroxCt9lQAYMxavLp6CtEmAq6kDG6ou4/2rwrQBkyBl2RrkL/EvtNj8/jY8/5pPoUnu4MZSOSwv5aEiWQ/tgyrIuQsy97jh+LIW724pgrGen5U/ALEWqR1GaLZ2onD1I0ibKkME11s77bD+rwF632UHuraufJhVL0CblQjPpvU4YbPsRukGvtgkX2Kr91Whm/dqoHvdO90OY85uRPxuFRYl8tvg/LIGO9cVwXQpHfk+7XA0w/Tq8yg77t0yn/fhLYJJgi4ELjY7Cr+5fzJ+oRwH1xcdeKniIrZfESYF+vYq9jd2Y9qE8bg7aQLun3AZf2vpGdyFVzPXoXTVfNz5fw04dvgEzja0Yuw0FRJn34d542pw4K/CJW3nPYwVSim+HnMffr5gMr6qPYwTf2tA69VYzJiZjNS0ZLRXmMFdIZ19Gsh4NB1xl51IztJg9uWPcbTqI1i/6MJ4RTKSuGVLzuDAR3y5yF6EdfV8X42HlZdw4nA1v13stfEJc5EScxr7TrajZ9z3gK//gfHTFLizqw6mwxY0NDTg7CkL6v/OtuKBXyB9KjAu9SeYffUjfHD8LFpH34XkhCSksDGx/KHH8JC0EZVcgcm2sbhLmYjZC2bjiukQPvZ9Hxfr8faB055NI8EXAruXoxE3hf2sOxx45fAl/PlGPdfVb7H+aAeqz/cgclIEkoXmgetG48EiPP7LApR4CnaUQPfbCtgRgcTUn7F+0BfrFVWd2PYvuSgo5ot7lDyXi8KDdja0SkXOr1KE+QTTUyCvKkDO03qUcsverMeqPAPqnGzZi/OwTJitbxIoJjahdKUuYLsA+T0/A7cm26EdrL0Gdi4gXc18sRF2M57iXu8lh/zCbuQ9W8Jv77NrYfzcjYgENdQT67BNx350uNcV61Bc5QAiZiBtifBSIooQCN1VtJ5n3yKZDM/80x34xY22aPQobPhJDBZOGQNXuxsNQvOAVZZgXWC98vozsHEdnCwWaXzLNfbjBlQE7BdatxyElW2yPH6Bf0gvfoKK1wIKRjqN2GNh0YmYhllZQls/bFXF/uuqN6LOUzBEOsAaehwnrJW+dQ5sqGjo9Dyyn/R/L5ZTTWy+CEQrAn48yLAKgdB9i99VfY23Pr6EyGkxeO5nEjwTKUwKxI3pfvZ9/DRpLBvTtbMxnQu1wqTBkM3LRv76YpRuNaD8z0YY97JxTJQw0Q8bU9X3VV75PJwX2V1gSM+zL7jw0FfdN9w3XYLoeP5535ywNwekmwXGeZndRUWDLxM5EHbWIwoPBbZL/HKdlwLei7AbL71j4JEmNy9Ejl5+i1dOduDVjy4BkybisUeisIGrVuorMgK7fs4fROlu+BrPHR3aQRT1up3Y+YIWmrmxiHA50XjyIA7+jxnN/VUn6W98ybnY7X/J96tunx4mkBuXLwgP+/Nd6yIjRoiEjvdGXQdeOeGEa/wE/PQ+/+7uNwun4G7WG3XXnUd+tRvVQvugSJZDs0AGd4sJBdm5WPWsDus8Y7Uz4HfAArHeaUYfNeSmz4GCKwDp+AJ+BZhjFH0Wa8xO4Ioad8L+Kf+c3N5CKnSctz75BhuOXICrR2i45go6TpzHYx9dwZC/u/fKPWMjV3uz5xC8l2TpA1D1uXsJJKZpkeKXOwmyn1oIeV8FIKNUyHo0YFdNqYNmTgTb67PCHMwDghP9a5uT8BFyoeO8z/b1nvvQcwxbMAqf/7UdeZ9cubm6bFVn8AXb/5PM02Lbeh3yn8qHboMBux6PRXefu5duOMZnYuPrpVjL5s1/SoeNf9oF7RwJ3J+bsH13wM5klwvTntgOwwZ+2fkFpSj/vZoFlCthvA18UeMMFO40wfTnUminexoGqRa2DnYnS0PuOraONcUofJKfQsJDSIaOU+3yPWf/Ld5yDPJ8XJ9MKHrFhGZHJBTz1dAs0WBhXBuMG8rR1+ES1ieiaYcee5okSFusYfOrkTK5G7YqAwpXG/x6S48OM3SvVcIVzy9b80Ai0G6FaWM+9If6H+0NjhOGrXtgdURAsYCt48FpkARr0UQUIV4U8hZa6f0rkRzoK4W2ftFfcpCBC9mejpCRikJHiMgodISIjEJHiMjoQAohIqOejhCRUegIERmFjhCRjcKvzw5pTLf83O+wO/43wjNCyECNGrvgiSGF7p+nu/CXlv7+4xshpG/A/wPxvcYHwTOSFQAAAABJRU5ErkJggg=="},13881:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/frontendStructure-f632515206c9a13e2731daee9d8b2e72.png"},12344:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/routesStrcuture-dce61dfb118c1651d140f6eef55abf51.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);