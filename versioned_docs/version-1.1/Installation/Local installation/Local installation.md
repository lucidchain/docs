---
sidebar_position: 2
---

# Local installation

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you will learn how to run Lucid chain locally. There are 3 ways and each one is usefull for something different.

## Installation with Docker (Recommended)

If you want to install just Lucid chain because you already have Redmine or ITop available and deployed, you just have to run the following commands:

``` bin/bash
docker pull lucidchain/lucidchain_wizard:latest
docker run -d --name lucid-chain lucidchain/lucidchain_wizard:latest
```

This will pull Lucid chain image and run a container named ***lucid-chain*** in your docker.

:::important
Take into account that you need to have ***your port 3000 available*** in order to make it work. Please make sure you use ***latest*** version because there are not other stable versions yet.
:::

If you want to install locally ITop and Redmine too, you can do it all in one following these steps:

1. Clone infrastructure repository.

    ``` bin/bash
    git clone https://github.com/lucidchain/infrastructure
    cd infrastructure
    ```

2. Use docker-compose-test or docker-compose-local for installing Redmine, ITop and Lucid chain at the same time

    ```bin/bash
    cd docker-lucidchain
    docker-compose -f "docker-compose-test.yaml" up -d
    ```

    :::important
    Take into account that you need to have ***your ports 3000, 3306, 8080, 8081 and 8000 available*** in order to make it work. Please make sure you use ***latest*** version in Lucid chain because there are not other stable versions yet.
    :::

    <div align="center">
    ![Installing in docker](/img/installation/dockerLucidChainResult.png)  
    **Figure 1:** *Lucid chain installed with ITop and Redmine using Docker.*
    </div>

    <Alert>
    + In ITop it is only tested up to version 3.2.0. Choosing a greater version can cause unknown problems

    + Redmine versions greater than 5.1.4 ***are not supported***. We are very sorry about that but there is nothing that we can do with it because we suspect that this is due to Gem internal configurations. In future versions we will try to support greater Redmine versions.
    </Alert>

:::tip
You can use this command to remove all the containers with its volumes.

```bin/bash
cd docker-lucidchain
docker-compose -f "docker-compose-test.yaml" down -v
```

:::

## Installation from repository

If you are interested in having your own Lucid chain in local, and have access to make modifications, you should choose this option and follow these steps:

1. Clone lucid chain repository.

    ``` bin/bash
    git clone https://github.com/lucidchain/wizard
    cd wizard
    ```

2. Now you have to prepare the enviroment and install the dependencies. You are going to run it locally, so you can leave the env variables as they are.

    ``` bin/bash
    cd front
    cp .env.example .env
    npm install
    npm run build
    cd ..
    cd back
    cp .env.example .env
    npm install
    ```

3. Run the application with *npm start* or *node app.js*

    :::important
    Take into account that you need to have ***your port 3000 available*** in order to make it work.
    :::

    <div align="center">
    ![Run in local](/img/installation/runningLocally1.4.png)  
    **Figure 2:** *Lucid chain installed running locally.*
    </div>

<Disclaimer>
If you are going to work in this repository, you will need to check contributing section for a better understanding a some additional installation details. You will also learn about enviroment variables so do not forget to check that.
</Disclaimer>

## Custom Docker installation (Only recommended for developers)

If you already have installed Lucid chain with its repository and you have modified it, you can use its Dockerfile in order to apply your changes and have them in your Lucid chain container. This is usually made to test how Lucid chain behaves in a deployment enviroment. Please ensure that your application works properly before updating Lucid chain image or opening an issue in Github or something similar such as a pull request.

``` bin/bash
docker build -t my-modded-lucid-chain .
docker run -d --name my-modded-lucid-chain-container -p 3000:3000 my-modded-lucid-chain
```

<Disclaimer>
Do not forget to run these commands in the ***main directory***. If you are in *"/back"* or *"/front"* do not forget to return to it by using *"cd .."*. Also take into account that your modified lucid chain may not work because your port ***3000 could be in use*** and/or your ***modifications could be incorrect***.
</Disclaimer>

<Disclaimer>
Be aware that important structure modifications can lead to a need of Dockerfile update. Please change things with caution and remember to test everything before updating.
</Disclaimer>
