---
sidebar_position: 1
tags: 
  - lucid-chain
  - service-chain
  - ITSM
keywords:
  - Lucid Chain Wizard
  - SCModel
  - Service Chain
  - ITSM tools
  - SLA compliance
  - Incident management
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# General Introduction

Let's discover what is **Lucid Chain Wizard**.

## Getting Started

Lucid chain wizard is a project designed to support and integrate SCModel into ITSM tools. SCModel is a service chain modelling language that makes it very easy to configure and understand service chains. Lucid chain allows you to import and export your service chains in both ITop and Redmine tools. It also provides detailed views about SLAs compliance and other service chain management features such as synchronizating your chain, creating and validaiting your own service chain, and much more.

## What is Lucid chain

Lucid chain is a software designed to make complex operations related to service chain with ease following SCModel specification. It supports import, export, SLA metrics and other features. It is a wizard that uses both ITop and Redmine APIs in order to simplify some processes and making easy to import and export service chains.

<div align="center">
![Lucid chain architecture](/img/mysc/LCWArchitecture.png)  
**Figure 1:** *Lucid chain architecture.*
</div>

## What is a service chain

Service chains are relationships between organizations and the services they provide or pay for. These services usually have SLAs, which ensure some TTO and TTR compliance. You can learn more about service chains and about SCModel in [lucidchain specs](http://lucidchain.specs.governify.io/)

## ITop

iTop (IT Operational Portal) is an [open-source project](https://github.com/Combodo/iTop) in PHP that includes various modules. It is used for IT service management and technological infrastructure administration. It is designed to manage and automate processes related to incidents, problems, changes and configuration management within an organization. It serves as both a configuration and incident manager. We will focus on incident management and change requests, as these are relevant to Lucid chain.

ITop’s incident management is based on ITIL, which greatly standardizes processes and makes them easy to understand. When properly configured, the procedure is as follows:

1. A user accesses the iTop portal and creates a request (which we will usually refer to as an issue). When creating it, they define certain attributes such as priority or the associated service.

2. From the iTop Back-Office User Interface, the created issue can be viewed and assigned to a team and a user.

3. When the assigned user completes the task, they mark it as resolved.

4. The issue creator will see that it has been marked as resolved, along with a comment detailing the proposed solution. If they are satisfied, they close the request and submit a satisfaction review; otherwise, the issue is reopened, and the process returns to step 2.

5. The tool also supports some statistics on SLA compliance if configured correctly. In this regard, we can check whether the TTO or TTR falls within the defined agreements.

## Redmine

Redmine is an [open-source project](https://github.com/redmine/redmine) management tool developed in Ruby on Rails. Like iTop, it also supports incident management, but it does not have a built-in metrics module.

Although its interface has a less modern look, Redmine offers great features such as project visualization through Gantt charts, the ability to host multiple projects simultaneously (something that has certain disadvantages in iTop), calendars, and much more features.

Redmine has higher-quality documentation compared to iTop and is constantly being updated. Another major advantage of Redmine is that when it is first installed, it allows users to import a default project management configuration, which includes roles and permissions, workflows, and a set of entities that enable its use following best practices from day one.
It also supports plugin installation, the creation of new attributes for existing entities, and much more.

However, it is not specifically designed to follow the ITIL model for incident management.This is problematic for some standardization reasons.

## Next steps

Now that you have leanrt some service chain basis and a foundation about the tools, you are ready to continue with the guide.
