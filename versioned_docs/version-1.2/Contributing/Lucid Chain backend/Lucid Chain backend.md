---
tags: 
  - lucid-chain
  - architecture
  - ITSM
  - API
keywords:
  - Lucid Chain Wizard
  - backend architecture
  - Redmine integration
  - service chain management
  - environment variables
  - API development
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Lucid chain backend

import Disclaimer from '@site/src/components/Disclaimer.js';

In this section we are going to learn how Lucid chain backend is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is ***back***. This folder contains all backend logic and the integrations with Redmine and ITop. The other one is ***front***, which contains all the frontend. Here you are about to explore *back* folder in order to understand its content. This is the most complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part.

<div align="center">
![Backend structure](/img/structure/backendStructureOLD.png)  
**Figure 1:** *Lucid chain backend structure.*
</div>

## Main folder files

As you can see in ***Figure 1*** there are some files that are not in any of the directories. Here we are going to explain all of them.

+ <u>**.env:**</u> This is a special configuration file. In case you have just cloned the repo you will not have it.
+ <u>**.env.example:**</u> This is a example of how your .env file should look like. We will cover enviroment variables later.
+ <u>**.gitignore:**</u> In this file we specify the files that we do not want git to track.
+ <u>**app.js:**</u> This is the main file. Here we have all the application logic an the connection to the frontend. It is very important to manipulate it with caution.
+ <u>**encripter.js:**</u> Here you can find all the encryption logic.
+ <u>**logger.js:**</u> This the application logger.
+ <u>**package.json:**</u> This file contains all the dependencies. There are some custom scripts in it.
+ <u>**package-lock.json:**</u> This file contains all the project dependencies with its exact versions.
+ <u>**readme.md:**</u> This file contains some information about Lucid chain and it contains some SCModel contraints and a tiny tutorial.

<Disclaimer>
***"node-modules"*** directory is generated automatically and you do not have to worry about it.
</Disclaimer>

## lucid-chain-tools directory

This directory contains all integration logic. The main file is called ***index.js***, and it makes it possible to manage logic from ITop and Redmine. There is also another folder called src next to it. This directory has another 3 folders inside.

Each sc-tool folder is designed with an object structure. Depending on the service_type we take functions from different files. There is a file called indexToolName.js, which groups up every feature and defines the methods in order to be usefull for index.js.

### sc-itop directory

Here we find all ITop logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for ITop configuration and another one for ImportModel. The second one is almost deprecated.

### sc-redmine directory

Here we find all Redmine logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for Redmine configuration and another one for ImportModel. The second one is almost deprecated.

### shared directory

Here we can find SCModel validations and some common functions used in Redmine and ITop logic.

<div align="center">
![lucid-chain-tools structure](/img/structure/lucid-chain-toolsStructure.png)  
**Figure 2:** *lucid-chain-tools directory structure.*
</div>

## src directory

This directory contains services and routes. In ***routes folder*** we can find all app routes with it's ***Open API Specifications***.

<Disclaimer>
Please do not forget to include Open API specifications in case you implement a new feature or change an existing one.
</Disclaimer>

In ***services folder*** we have all the functions that use index.js from lucid-chain-tools. There is one service for each feature.

<div align="center">
![src structure](/img/structure/srcStructureOLD.png)  
**Figure 3:** *src directory structure.*
</div>

## testing-material directory

Here we can find some examples of service chains. There are invalid yamls so we can test validations, and correct ones so we can test Redmine and ITop features. We can distinct the following folders:

+ <u>**sample_yaml:**</u> This folder contains a lot of examples of valid (in *valid_yaml*) and invalid (in *invalid_yaml*) folders. Invalid yamls are made to test SCModel validations, and they are divided in subdirectories for a better classification.
+ <u>**sql:**</u> This folder contains sql files for seeding Redmine database. They are not usefull at all because they must be updated. ***It is deprecated.***
+ <u>**testing_metrics_material:**</u> This folder has the same purpose but it used sample data in csv for seeding Redmine database. ***It is also deprecated.***

<div align="center">
![testing-material structure](/img/structure/testing-materialStructure.png)  
**Figure 4:** *testing-material directory structure.*
</div>

## tests directory

This part of the project is ***currently empty***. Here we will find all lucid chain tests in the future.

<Disclaimer>
This section is always open to contributions because it is very important and until now no formal testing has been added. In future Lucid chain versions we will include tests, as it is an essential feature for preserve reliability when adding changes.
</Disclaimer>

## uploads directory

This directory is not usefull and serves as a folder where the app stores uploaded files.

<Disclaimer>
In future versinos Lucid chain will delete files when it finish working with them, so this folder can be empty mostly all the time.
</Disclaimer>

<div align="center">
![test and uploads structure](/img/structure/uploadsAndTestStructure.png)  
**Figure 5:** *tests and uploads structure.*
</div>

## Enviroment variables

Now let's cover enviroment variables. If you see what is inside .env.example, you will see the following:

```.env
LUCID_USERNAME=admin
LUCID_PASSWORD=admin
LOG_LEVEL=silly  ## LOG_LEVEL CAN BE: error > warn >  info > verbose > debug > silly
NUM_DECIMALS=2  ## 2 is the recomended. The maximum is 5. More than that doesn't make sense
APP_MODE=prd    ## APP_MODE can be dev or prd. In dev you dont need authentication, but in prod u do!
```

Lets talk about them and see what they do.

+ <u>**LUCID_USERNAME:**</u> This is the username needed in order to have access to Lucid chain wizard. Its default value is ***admin***.
+ <u>**LUCID_PASSWORD:**</u> This is the password of the user needed in order to have access to Lucid chain wizard. Its default value is ***admin***.
+ <u>**LOG_LEVEL:**</u> This variable specifies log level. Logs are distributed in ***layers***, so you when you assign a layer, only logs in that layer or in higher ones will be shown. There are six layers, hierchally represented like this: ***error > warn >  info > verbose > debug > silly***. ***By default LOG_LEVEL is silly***, so all logs will be shown. ***Recommended value is info***.
+ <u>**NUM_DECIMALS:**</u> This value represents the number of decimals that you want to be shown ***in the frontend***. By default its value is 2, and it is ***recommended to not change it***.
+ <u>**APP_MODE:**</u> This variable defines the application mode. There are two modes: production (prd) and develoment (dev). ***In prodcution mode authentication is required***. This authentication must be done with ***LUCID_USERNAME and LUCID_PASSWORD credentials***. In developement mode we disable it for being able to run Vite dev mode. We will talk about that in frontend section.

<Disclaimer>
LUCID_USERNAME and LUCID_PASSWORD are mostly required in ***production enviroment***. Please make sure to change the default values for your safety.
</Disclaimer>

<Disclaimer>
Please take into account that if you are using Lucid chain in a server that already has a LOG_LEVEL defined, ***Lucid chain LOG_LEVEL enviroment variable can be ignored and substituted by the server's one***. This can also happen with the max request body size allowed.
</Disclaimer>
