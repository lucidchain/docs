---
tags:
  - lucid-chain
  - configuration
  - API
  - integration
  - setup
  - features
keywords:
  - Lucid Chain configuration
  - Redmine integration
  - ITop configuration
  - API setup
  - configuring tools
  - Lucid Chain setup guide
  - connecting Lucid Chain to tools
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Configuring tools

import Disclaimer from '@site/src/components/Disclaimer.js';
import LogInRequired from '@site/src/components/LogInRequired.js'

<LogInRequired/>

In this section you will learn how to connect your Lucid chain instance to your Redmine and/or ITop.

<Disclaimer>
Lucid chain only supports configuration for **Redmine and ITop**. Any other Service management tool is not available for configuration yet.
</Disclaimer>

## Introduction

You can know if Lucid chain has access to your ITop or your Redmine by checking the message below each tool image. If everything is working the application will desplay ***Connected***. Otherwise, ***Not connected*** will appear.

<div align="center">
![Not connected tools](/img/configuration/notConnected.png)  
**Figure 1:** *Initial Lucid chain view with disconnected tools.*
</div>

If you are trying to connect your tool to Lucid chain, you have to click on the **globe icon** to access configuration. Once you are there, you will see two forms, once for each tool. You <u>do not need</u> to configure both of them in order to have your tool connected.

## Configuring ITop

When configuring ITop you will need first to have an user with **"Administrator"** and **"REST services user"** profiles. You can verify this in *"administration"* **>** *"User Accounts"* **>** Click in the admin user you want to use for Lucid chain Wizard **>** *Profiles*.

If you want to configure your profiles and add them to a new user. Follow these steps:

1. Create an user.
2. Go to *"administration"* **>** *"user accounts"*.
3. Click in *"admin"* or the superuser you created.
4. Click in *"profiles"*, and then click the pencil button to edit.
5. Click in *"add profile objects"*. Select *"REST serivces user"* and click *"add"*.
6. **(if it is not already done)** Click in *"add profile objects"*. Select *"Adminitrator"* and click *"add"*.
7. Click *"apply"* button.

You can check all ITop documentation in this [link](https://www.itophub.io/wiki/page?id=latest:start)

Once REST Services and administrator profiles have been given to your user, you have to fill the form.

+ <u>***Server:***</u> You have to specify here the HTTP method and the host of your ITop.

+ <u>***Port:***</u> You have to specify here the port where your ITop is listening.

+ <u>***API:***</u> You have to specify here the API route. Please verify that you do not include host, port or version in this parameter. ***A commonly right value is "/webservices/rest.php"***.

+ <u>***Username:***</u> You have to include here the login (username) with the grantted privileges given before.

+ <u>***Password:***</u> Here you have to write this user's password.

Here we show an example **assuming** that we have an ITop listening in **localhost:8000** and that our user credentials are **user:"admin" pwd:"admin"**.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
<div align="center">
![ITop form](/img/configuration/ITopForm.png)  
**Figure 2:** *Example of ITop configuration in localhost running Lucid chain locally.*
</div>

<div align="center">
![ITop form docker](/img/configuration/itopFormDocker.png)  
**Figure 3:** *Example of ITop configuration in localhost running Lucid chain in Docker.*
</div>
</div>

## Configuring Redmine

When configuring Redmine it is very important to do something similar to what is needed in ITop. We need to enable ***API REST Services*** in Redmine and make it possible to ***assign issues to groups***. If you have not done it, you can follow these steps:

1. Authenticated as an admin user, go to *"Administration"* **>** *"Configuration"* **>** *"API"*.
2. Click in *"Enable REST web Service"*.
3. Click *"save"*.
4. Go to *"Administration"* **>** *"Settings"* **>** *"Issue Tracking"*.
5. Click in *"Allow issue assignment to groups"*.
6. Click in *"save"*.

Now you have to simply fill the form:

+ <u>***Server:***</u> You have to specify here the **HTTP method** and the ***host*** of your Redmine.

+ <u>***Port:***</u> You have to specify here the port where your Redmine is listening.

+ <u>***API:***</u> You have to specify here the API route. Please verify that you do not include host, port or version in this parameter. ***A commonly right value is "/"***.

+ <u>***Username:***</u> You have to include here the login (username) with the grantted privileges given before.

+ <u>***Password:***</u> Here you have to write this user's password.

Aditionally, you will need to configure your Redmine's Database connection filling another form.

+ <u>***Server:***</u> You have to specify here the ***HTTP method*** and the ***host*** of your Redmine's database.

+ <u>***Port:***</u> You have to specify here the port where your database is listening.

+ <u>***User:***</u> You have to include here an user with privileges for CRUD operations in Redmine's database.

+ <u>***Password:***</u> Here you have to write this user's password.

+ <u>***Database:***</u> Here you have to write your Redmine's database name. ***Usually, it is called "Redmine"***.

Here we show an example **assuming** that we have an **Redmine** listening in **localhost:8080** and that our user credentials are **user:"admin" pwd:"admin"**. We also **assume** that we have a database in **localhost:3307** and an user with credentials **user: root pwd: root** with CRUD privileges for a database named **"Redmine"**, which is our Redmine's database.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
<div align="center">
![Redmine form](/img/configuration/RedmineForm.png)  
**Figure 4:** *Example of Redmine configuration in localhost running Lucid chain locally.*
</div>

<div align="center">
![Redmine form docker](/img/configuration/redmineFormDocker.png)  
**Figure 5:** *Example of Redmine configuration in localhost running Lucid chain in Docker.*
</div>
</div>

## Save configuraion

You can save this configuration by clicking of ***"Save"*** button. This will sava the data into your localstorage. This will ensure privacy because you can delete your configuration by cleaning you localstorage.

<div align="center">
![Saving configuration](/img/configuration/savedButton.png)  
**Figure 6:** *Configuration saving confirmation.*
</div>

<Disclaimer>
In future versions you will be able to delete the configuration from Lucid chain.
</Disclaimer>

<div align="center">
![Connected tools](/img/configuration/connected.png)  
**Figure 7:** *Lucid chain connected to ITop and Redmine.*
</div>
