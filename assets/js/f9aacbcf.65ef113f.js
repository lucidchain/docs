"use strict";(self.webpackChunklucid_docs=self.webpackChunklucid_docs||[]).push([[3522],{6056:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=r(5893),n=r(1151),c=r(3839);const t={tags:["lucid-chain","api","sla","service-metrics","sla-metrics","development","endpoints"],keywords:["Lucid Chain metrics routes","SLA metrics","global SLA metrics","organization-specific SLA metrics","service-specific SLA metrics","Redmine SLA metrics","ITop SLA metrics","service metrics filters","API metrics retrieval","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},d="Metrics Routes",l={id:"Lucid chain API/Metrics routes/Metrics routes",title:"Metrics Routes",description:"In this section you will learn about metrics endpoints. This is by far the most complex part of the API so read carefully. Take into account that Lucid chain's API is meant to be used by the frontend, so if you are having too much trouble use it instead.",source:"@site/docs/Lucid chain API/Metrics routes/Metrics routes.md",sourceDirName:"Lucid chain API/Metrics routes",slug:"/Lucid chain API/Metrics routes/",permalink:"/docs/docs/next/Lucid chain API/Metrics routes/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucidchain/docs/tree/main/packages/create-docusaurus/templates/shared/docs/Lucid chain API/Metrics routes/Metrics routes.md",tags:[{label:"lucid-chain",permalink:"/docs/docs/next/tags/lucid-chain"},{label:"api",permalink:"/docs/docs/next/tags/api"},{label:"sla",permalink:"/docs/docs/next/tags/sla"},{label:"service-metrics",permalink:"/docs/docs/next/tags/service-metrics"},{label:"sla-metrics",permalink:"/docs/docs/next/tags/sla-metrics"},{label:"development",permalink:"/docs/docs/next/tags/development"},{label:"endpoints",permalink:"/docs/docs/next/tags/endpoints"}],version:"current",lastUpdatedBy:"dangalcan",lastUpdatedAt:1742231082,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{tags:["lucid-chain","api","sla","service-metrics","sla-metrics","development","endpoints"],keywords:["Lucid Chain metrics routes","SLA metrics","global SLA metrics","organization-specific SLA metrics","service-specific SLA metrics","Redmine SLA metrics","ITop SLA metrics","service metrics filters","API metrics retrieval","Lucid Chain API usage"],authors:[{name:"Daniel Galv\xe1n Cancio",title:"Project Contributor",url:"https://github.com/Dangalcan",image_url:"https://avatars.githubusercontent.com/u/92941017"}]},sidebar:"documentationSidebar",previous:{title:"Purge Routes",permalink:"/docs/docs/next/Lucid chain API/Purge routes/"},next:{title:"Documentation routes",permalink:"/docs/docs/next/Lucid chain API/Documentation routes/"}},o={},h=[{value:"POST <code>/sla-metrics/:target/global</code>",id:"post-sla-metricstargetglobal",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"\u2705 200 - Global SLA metrics retrieved successfully",id:"-200---global-sla-metrics-retrieved-successfully",level:4},{value:"\u274c 500 - Error encountered while retrieving global SLA metrics",id:"-500---error-encountered-while-retrieving-global-sla-metrics",level:4},{value:"POST <code>/sla-metrics/:target/metrics/orgs/:teamId</code>",id:"post-sla-metricstargetmetricsorgsteamid",level:2},{value:"Path Parameters",id:"path-parameters-1",level:3},{value:"Request Body",id:"request-body-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"\u2705 200 - Organization-specific SLA metrics retrieved successfully",id:"-200---organization-specific-sla-metrics-retrieved-successfully",level:4},{value:"\u274c 500 - Error encountered while retrieving organization-specific SLA metrics",id:"-500---error-encountered-while-retrieving-organization-specific-sla-metrics",level:4},{value:"POST <code>/sla-metrics/:target/metrics/services/:serviceId</code>",id:"post-sla-metricstargetmetricsservicesserviceid",level:2},{value:"Path Parameters",id:"path-parameters-2",level:3},{value:"Request Body",id:"request-body-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"\u2705 200 - Service-specific SLA metrics retrieved successfully",id:"-200---service-specific-sla-metrics-retrieved-successfully",level:4},{value:"\u274c 400 - Bad request, missing or invalid parameters",id:"-400---bad-request-missing-or-invalid-parameters",level:4},{value:"\u274c 500 - Error encountered while retrieving service-specific SLA metrics",id:"-500---error-encountered-while-retrieving-service-specific-sla-metrics",level:4}];function a(e){const s={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"metrics-routes",children:"Metrics Routes"}),"\n","\n","\n",(0,i.jsx)(s.p,{children:"In this section you will learn about metrics endpoints. This is by far the most complex part of the API so read carefully. Take into account that Lucid chain's API is meant to be used by the frontend, so if you are having too much trouble use it instead."}),"\n",(0,i.jsx)(c.Z,{children:(0,i.jsx)(s.p,{children:"Using Lucid chain API is not recommended since its intention is to be managed by Lucid chain frontend. Please be aware that a bad use can cause problems in your Redmine or your ITop and we will not take that responsability. Be really sure of what you are doing and always check Open API Specifications, and other official documentation before proceding."})}),"\n",(0,i.jsxs)(s.h2,{id:"post-sla-metricstargetglobal",children:["POST ",(0,i.jsx)(s.code,{children:"/sla-metrics/:target/global"})]}),"\n",(0,i.jsx)(s.p,{children:"Retrieves global SLA metrics for the targeted tool. It can be ITop or Redmine. It fetches global metrics for the specified target using the provided filters and service type."}),"\n",(0,i.jsx)(s.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required/Optional"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"target"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Required"})}),(0,i.jsxs)(s.td,{children:["The target system from which to export. Allowed values: ",(0,i.jsx)(s.code,{children:'"itop"'}),", ",(0,i.jsx)(s.code,{children:'"redmine"'})]})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"request-body",children:"Request Body"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Required:"})," ",(0,i.jsx)(s.code,{children:"true"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"service_type"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The type of service chain to export.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Allowed values:"})," ",(0,i.jsx)(s.code,{children:"faceted"}),", ",(0,i.jsx)(s.code,{children:"state"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"filters"})," (",(0,i.jsx)(s.code,{children:"object"}),"): Filters to narrow down the metrics.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"start_date"})," (",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"date"}),"): Filters issues created after the specified date."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"end_date"})," (",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"date"}),"): Filters issues created before the specified date."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"tto_threshold"})," (",(0,i.jsx)(s.code,{children:"number"}),"): Filters issues with a TTO over the specified value."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ttr_threshold"})," (",(0,i.jsx)(s.code,{children:"number"}),"): Filters issues with a TTR over the specified value."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"responses",children:"Responses"}),"\n",(0,i.jsx)(s.h4,{id:"-200---global-sla-metrics-retrieved-successfully",children:"\u2705 200 - Global SLA metrics retrieved successfully"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"metrics"})," (",(0,i.jsx)(s.code,{children:"object"}),"): An object with all the metric details for the target.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-500---error-encountered-while-retrieving-global-sla-metrics",children:"\u274c 500 - Error encountered while retrieving global SLA metrics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"}),"  ",(0,i.jsx)(s.code,{children:'"Error getting global metrics from {target} with service_type {serviceType}: ..."'})]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"post-sla-metricstargetmetricsorgsteamid",children:["POST ",(0,i.jsx)(s.code,{children:"/sla-metrics/:target/metrics/orgs/:teamId"})]}),"\n",(0,i.jsx)(s.p,{children:"This route retrieves the SLA metrics of the targeted tool specified organization team."}),"\n",(0,i.jsx)(s.h3,{id:"path-parameters-1",children:"Path Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required/Optional"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"target"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Required"})}),(0,i.jsxs)(s.td,{children:["The target system from which to export. Allowed values: ",(0,i.jsx)(s.code,{children:'"itop"'}),", ",(0,i.jsx)(s.code,{children:'"redmine"'})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"teamId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Required"})}),(0,i.jsx)(s.td,{children:"The ID of the organization (team) for which to retrieve metrics."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"request-body-1",children:"Request Body"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Required:"})," ",(0,i.jsx)(s.code,{children:"true"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"config"})," (",(0,i.jsx)(s.code,{children:"object"}),"): Configuration parameters for connecting to the target system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"server"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The server address of the system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"localhost"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"port"})," (",(0,i.jsx)(s.code,{children:"integer"}),"): The port of the system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:"8080"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api_path"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The API path of the system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The username for authentication.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"admin"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"password"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The password for authentication.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"password123"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"service_type"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The type of service chain to export.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Allowed values:"})," ",(0,i.jsx)(s.code,{children:"faceted"}),", ",(0,i.jsx)(s.code,{children:"state"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"responses-1",children:"Responses"}),"\n",(0,i.jsx)(s.h4,{id:"-200---organization-specific-sla-metrics-retrieved-successfully",children:"\u2705 200 - Organization-specific SLA metrics retrieved successfully"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"metrics"})," (",(0,i.jsx)(s.code,{children:"object"}),"): An object with all the metric details for the target specified organization team.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-500---error-encountered-while-retrieving-organization-specific-sla-metrics",children:"\u274c 500 - Error encountered while retrieving organization-specific SLA metrics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"Error retrieving metrics for organization {teamId} from {target}: ..."'})]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"post-sla-metricstargetmetricsservicesserviceid",children:["POST ",(0,i.jsx)(s.code,{children:"/sla-metrics/:target/metrics/services/:serviceId"})]}),"\n",(0,i.jsx)(s.p,{children:"Retrieves service-specific SLA metrics for the specified serice of your targeted tool appliying given filters."}),"\n",(0,i.jsx)(s.h3,{id:"path-parameters-2",children:"Path Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required/Optional"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"target"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Required"})}),(0,i.jsxs)(s.td,{children:["The target system from which to export. Allowed values: ",(0,i.jsx)(s.code,{children:'"itop"'}),", ",(0,i.jsx)(s.code,{children:'"redmine"'})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"serviceId"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Required"})}),(0,i.jsx)(s.td,{children:"The ID of the service for which to retrieve metrics."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"request-body-2",children:"Request Body"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Required:"})," ",(0,i.jsx)(s.code,{children:"true"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"filters"})," (",(0,i.jsx)(s.code,{children:"object"}),"): Filters to narrow down the service metrics.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"start_date"})," (",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"date"}),"): Filters metrics created after the specified date."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"end_date"})," (",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"date"}),"): Filters metrics created before the specified date."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"tto_threshold"})," (",(0,i.jsx)(s.code,{children:"number"}),"): Filters metrics with a TTO over the specified value."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ttr_threshold"})," (",(0,i.jsx)(s.code,{children:"number"}),"): Filters metrics with a TTR over the specified value."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"config"})," (",(0,i.jsx)(s.code,{children:"object"}),"): Configuration parameters for connecting to the target system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"server"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The server address of the target system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"localhost"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"port"})," (",(0,i.jsx)(s.code,{children:"integer"}),"): The port of the target system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:"8080"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api_path"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The API path of the target system.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"/webservices/rest.php"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"username"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The username for authentication.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"admin"'})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"password"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The password for authentication.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"password123"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"service_type"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The type of service chain to export.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.strong,{children:"Allowed values:"})," ",(0,i.jsx)(s.code,{children:"faceted"}),", ",(0,i.jsx)(s.code,{children:"state"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"serviceName"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The service name."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"responses-2",children:"Responses"}),"\n",(0,i.jsx)(s.h4,{id:"-200---service-specific-sla-metrics-retrieved-successfully",children:"\u2705 200 - Service-specific SLA metrics retrieved successfully"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"application/json"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Schema:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Properties:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"metrics"})," (",(0,i.jsx)(s.code,{children:"array"}),"): An object with all the metric details for the target specified service.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-400---bad-request-missing-or-invalid-parameters",children:"\u274c 400 - Bad request, missing or invalid parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"Please select a target to get the metrics from."'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-500---error-encountered-while-retrieving-service-specific-sla-metrics",children:"\u274c 500 - Error encountered while retrieving service-specific SLA metrics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content-Type:"})," ",(0,i.jsx)(s.code,{children:"text/plain"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Example:"})," ",(0,i.jsx)(s.code,{children:'"Error getting metrics: ..."'})]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3839:(e,s,r)=>{r.d(s,{Z:()=>c});var i=r(2949),n=r(5893);function c(e){let{children:s}=e;const{colorMode:r}=(0,i.I)();return(0,n.jsxs)("div",{style:{padding:"12px",backgroundColor:"light"==r?"#ffe6e6":"#8c2d2d",borderLeft:"5px solid #d9534f",color:"light"==r?"#a94442":"#ffe6e6",margin:"20px 0",borderRadius:"5px",fontWeight:"bold"},children:["\u26a0\ufe0f ",s]})}},1151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>t});var i=r(7294);const n={},c=i.createContext(n);function t(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);