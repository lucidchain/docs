# Lucid Chain backend

In this section we are going to learn how lucid chain is structured. The first thing you can see when you enter the project, is that there are 2 parts very different from each other. The first one is ***back***. This folder contains all backend logic and the integrations with Redmine and ITop. The other one is ***front***, which contains all the frontend.

## Backend

This is the more complex part of the application. It has a relatively well distributed system that integrates Redmine and ITop tools with an API in order to make them understand and support SCModel and other features. In the following sections we will describe each part.

## lucid-chain-tools

This directory contains all integration logic. The main file is called ***index.js***, and it makes it possible to manage logic from ITop and Redmine. There is also another folder called src next to it. This directory has another 3 folders inside.

Each sc-tool folder is designed with an object structure. Depending on the service_type we take functions from different files. There is a file called inxedToolName.js, which groups up every feature and defines the methods in order to be usefull for index.js.

### sc-itop

Here we find all ITop logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for ITop configuration and another one for ImportModel. The second one is almost deprecated.

### sc-redmine

Here we find all Redmine logic, including importation, exportation and so on. Metrics are also here. There another 2 extra folders, one for Redmine configuration and another one for ImportModel. The second one is almost deprecated.

### shared

Here we can find SCModel validations and some common functions used in Redmine and ITop logic.

## src

This directory contains services and routes. In ***routes folder*** we can find all app routes with it's Open API Specifications.

In ***services folder*** we hace the functions that use index.js from lucid-chain-tools. There is one service for each feature.

## testing-material

Here we can find some examples of service chains. There are invalid yamls so we can test validations, and correct ones so we can test Redmine and ITop features.

## tests

This part of the project is currently empty. Here we will find all lucid chain tests in the future.

## uploads

This directory is not usefull and serves as a folder where the app store uploaded files.
