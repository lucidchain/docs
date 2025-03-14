"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[3554],{2791:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(5893),o=i(1151),t=i(6905);i(3839);const r={tags:["lucid-chain","CI/CD","workflows","versioning","Docker","semantic-versioning","development","commits"],keywords:["Lucid Chain CI/CD","continuous integration","continuous deployment","GitHub Actions","Docker Image","semantic versioning","versioning","commit policies","branching methodology","pull request policy"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},c="Lucid chain CI/CD",l={id:"Contributing/Lucid Chain CI-CD/Lucid Chain CI-CD",title:"Lucid chain CI/CD",description:"In this section you are going to learn how Lucid chain CI/CD works. You will also learn about other repository details such as releases and working methodology.",source:"@site/docs/Contributing/Lucid Chain CI-CD/Lucid Chain CI-CD.md",sourceDirName:"Contributing/Lucid Chain CI-CD",slug:"/Contributing/Lucid Chain CI-CD/",permalink:"/docs/docs/next/Contributing/Lucid Chain CI-CD/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Contributing/Lucid Chain CI-CD/Lucid Chain CI-CD.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"CI/CD",permalink:"/docs/docs/next/tags/ci-cd"},{label:"workflows",permalink:"/docs/docs/next/tags/workflows"},{label:"versioning",permalink:"/docs/docs/next/tags/versioning"},{label:"Docker",permalink:"/docs/docs/next/tags/docker"},{label:"semantic-versioning",permalink:"/docs/docs/next/tags/semantic-versioning"},{label:"development",permalink:"/docs/docs/next/tags/development"},{label:"commits",permalink:"/docs/docs/next/tags/commits"}],version:"current",frontMatter:{tags:["lucid-chain","CI/CD","workflows","versioning","Docker","semantic-versioning","development","commits"],keywords:["Lucid Chain CI/CD","continuous integration","continuous deployment","GitHub Actions","Docker Image","semantic versioning","versioning","commit policies","branching methodology","pull request policy"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Lucid chain frontend",permalink:"/docs/docs/next/Contributing/Lucid Chain frontend/"},next:{title:"Lucid chain API",permalink:"/docs/docs/next/category/lucid-chain-api"}},d={},a=[{value:"Workflows",id:"workflows",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Work methodology",id:"work-methodology",level:2},{value:"Commits policy",id:"commits-policy",level:3},{value:"Branching methodology",id:"branching-methodology",level:3},{value:"Pull request policy",id:"pull-request-policy",level:3}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lucid-chain-cicd",children:"Lucid chain CI/CD"}),"\n",(0,s.jsx)(n.p,{children:"In this section you are going to learn how Lucid chain CI/CD works. You will also learn about other repository details such as releases and working methodology."}),"\n",(0,s.jsx)(n.h2,{id:"workflows",children:"Workflows"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"Now lets see the workflows that Lucid chain has:"}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"Lucid chain developement has been focused on its main purpose. Unfortunately, it does not have a lot of workflows. In the future we will add new ones in order to improve CI/CD cycle. Some future workflows will be autogenerated releases notes and automatic versioning."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Publish Docker Image:"})})})," This workflow updates ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/lucidchain/lucidchain_wizard",children:"Lucid chain Docker Image in Dockerhub"})," when a new release is published."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create releases:"})})})," This workflow creates a release with autogenerated release notes following conventional commits v1.0.0 when a new tag is pushed. Each release will have release notes with a section for features (feat), tests (test), documentation (doc), changes in CI/CD (ci), fixes and patches (fix) and an ",(0,s.jsx)(n.em,{children:"other"})," section where you will find style and performance changes among other changes related with the rest of commit types."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["Lucid chain versions are created following a clasic semantic version. For versioning we use ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"vX.Y.Z format"})}),", where ",(0,s.jsx)(n.em,{children:"v"})," means version. Changes are made with these meanings:"]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When changing X, Y and Z are setted to 0 again."}),"\n",(0,s.jsx)(n.li,{children:"When changing Y, Z is setted to 0 again."}),"\n",(0,s.jsx)(n.li,{children:"When changing any number, none of X.Y.Z can reduce its values."}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"X:"})})})," This is only for really big changes and it is not recommended to increase this number unless you made a tone of changes, structural changes or heavy API changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Y:"})})})," This number for medium changes or a big group of minor changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Z:"})})})," This number is for some changes, fixes, a group of features that increase quality, refactorizatins, etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"work-methodology",children:"Work methodology"}),"\n",(0,s.jsxs)(n.p,{children:["Lucid chain has been developed with only one developer at a time. Unfortunately, it does not follow the work methodology defined here in its first stages. However, after\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"v2.0.5"})})," it does."]}),"\n",(0,s.jsx)(n.h3,{id:"commits-policy",children:"Commits policy"}),"\n",(0,s.jsxs)(n.p,{children:["Lucid chain commits policy is based on ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/#specification",children:"Conventional Commits v1.0.0"})]}),"\n",(0,s.jsxs)(n.p,{children:["All commits messages must follow this format: [commitType]: [description of the content starting with a imperative verb] where commitType can be one of the types described in ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/#specification",children:"Conventional Commits v1.0.0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here we describe commitType possible values, but do not forget to check them in ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/#specification",children:"Conventional Commits v1.0.0 official documentation"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"feat:"})})})," Introduces a new feature."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"fix:"})})})," Fixes a bug/something."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"chore:"})})})," Maintenance tasks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"docs:"})})})," Updates documentation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"style:"})})})," Code style changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"refactor:"})})})," Code restructuring without changing functionality."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"test:"})})})," Adds or modifies tests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"perf:"})})})," Improves performance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ci:"})})})," Changes related to CI/CD."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)("u",{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"build:"})})})," Changes affecting the build system or dependencies."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsxs)(n.p,{children:["In addition to this commit types, we also accept ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"doc"})}),", and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"tests"})})," as variants of ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"docs"})})," and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"test"})}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"branching-methodology",children:"Branching methodology"}),"\n",(0,s.jsx)(n.p,{children:"There is not one branching methodology stablished."}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"In future versions we may add one but due to the lack of developers until now everything has been developed in main."})}),"\n",(0,s.jsx)(n.h3,{id:"pull-request-policy",children:"Pull request policy"}),"\n",(0,s.jsx)(n.p,{children:"There is not one pull request stablished."}),"\n",(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.p,{children:"In future versions we may add one but due to the lack of developers until now everything has been developed in main."})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3839:(e,n,i)=>{i.d(n,{Z:()=>t});var s=i(2949),o=i(5893);function t(e){let{children:n}=e;const{colorMode:i}=(0,s.I)();return(0,o.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==i?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==i?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",n]})}},6905:(e,n,i)=>{i.d(n,{Z:()=>t});var s=i(2949),o=i(5893);function t(e){let{children:n}=e;const{colorMode:i}=(0,s.I)();return(0,o.jsxs)("div",{style:{padding:"10px",backgroundColor:"light"==i?"#fffae6":"#4a2c1d",borderLeft:"5px solid #ffa500",margin:"20px 0"},children:[(0,o.jsx)("strong",{children:"Disclaimer:"})," ",n]})}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);