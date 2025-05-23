---
sidebar_position: 4
tags:
  - lucid-chain
  - deployment
  - docker
  - nginx
  - setup
  - docker-compose
  - server-deployment
keywords:
  - Lucid Chain deployment
  - Docker deployment
  - nginx deployment
  - Redmine and ITop
  - infrastructure setup
  - Docker Compose
  - server setup
  - Lucid Chain installation
  - Docker commands
  - port configuration
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Deployment

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you will learn how to deploy Lucid chain step by step.

## Alone deployment

If you want to deploy just Lucid chain because you already have Redmine or ITop available and deployed, you just have to run the following commands:

``` bin/bash
docker pull lucidchain/lucidchain_wizard:latest
docker run -d --name lucid-chain lucidchain/lucidchain_wizard:latest
```

This will pull Lucid chain image and run a container named ***lucid-chain*** in your docker.

:::important
Take into account that you need to have ***your port 3000 available*** in order to make it work. Please make sure you use ***latest*** version because there are not other stable versions yet.
:::

## Deployment with ITop and Redmine in a nginx enviroment

In case you want to deploy Lucid chain with ITop and Redmine at the same time, you can do it installing and deploying each tool separately or through Lucid chain infrastructure.

<Alert>
You will need to have a ningx streamer in order to deploy like this. For now Kubernetes has not been tested or supported. We are sorry for that and we will try to include that in future versions.
</Alert>

In order to use Lucid chain infrastructure, you have to follow these steps:

1. Clone infrastructure repository.

    ``` bin/bash
    git clone https://github.com/lucidchain/infrastructure
    cd infrastructure
    ```

2. If you are using nginx you can use docker-compose.yaml to directly deploy all structure. But first you will have to create a .env file with some configuration variables.

    ``` .env
    SERVICES_PREFIX=yourServicePrefix
    DNS_SUFFIX=yourDNSSuffix
    RM_DB_PASSWORD=yourRedmineDatabasePassword
    RM_SECRET_KEY_BASE=yourRedmineSecretKeyBase
    ```

3. Once you have your .env you can run the following command to run all the containers.

    :::important
    Take into account that you need to have ***your ports 3000, 3306, 8080, 8081 and 8000 available*** in order to make it work. Please make sure you use ***latest*** version in Lucid chain because there are not other stable versions yet. 
    :::

    <Alert>
    + In ITop it is only tested up to version 3.2.0. Choosing a greater version can cause unknown problems

    + Redmine versions greater than 5.1.4 ***are not supported***. We are very sorry about that but there is nothing that we can do with it because we suspect that this is due to Gem internal configurations. In future versions we will try to support greater Redmine versions.
    </Alert>

    ``` bin/bash
    docker-compose -f "docker-lucidchain/docker-compose.yaml" --env-file .env up -d
    ```

    <div align="center">
    ![Deploying with ngnx](/img/installation/serverDeployMent.png)  
    **Figure 1:** *Deploy Lucid chain with ITop and Redmine.*
    </div>

<Disclaimer>
Execute this command inside infrastructure directory and remember to have in that folder a .env file.
</Disclaimer>
