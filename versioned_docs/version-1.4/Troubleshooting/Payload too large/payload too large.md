---
sidebar_position: 4
tags: 
  - lucid-chain
  - troubleshooting
  - set up
  - development
  - 413
  - payload too large
keywords:
  - lucid-chain
  - troubleshooting
  - development
  - API
  - HTTP error
  - 413 error
  - payload too large
  - max file size
  - json size limit
  - yaml size limit
  - file upload error
  - request limit
  - bodyParser
  - backend configuration
  - server settings
  - nginx
  - proxy
  - environment variables
  - API request
  - large file support
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Payload too large

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you will learn how to solve problems related with max file size in Lucid chain.

## Introduction

If you are having problems for uploading your yaml with your service chain and both your credentials and service chain are correct, you should check HTTP responses because it can mean that your file is too large to be processed. This can also happen to you if you are using Lucid chain API and you are sending either a large json or a large YAML.

## 413 (Payload too large)

Check your browser console to see your HTTP Responses. If you see something like: ***"413 (Payload too large)"*** it is because of the max sized allowed in your server. Here you have 2 options.

<div align="center">
![413 error in browser](/img/troubleshooting/413-PAYLOAD-TOO-LARGE-BROWSER.png)  
**Figure 1:** *Payload too large error in browser.*
</div>

### External Lucid chain instance

If the Lucid chain instance you are using is not yours, you should contact your Lucid chain administrator and ask for a change in the max sixe allowed. Other solution can be reduce your YAML or JSON size in order to adapt it to your Lucid chain instance.

### Own Lucid chain instance

If the Lucid chain instance you are using is hosted by yourself or is running in your local machine, you should go to your backend terminal where Lucid chain is being executed and you will see the error.

<div align="center">
![413 error in terminal](/img/troubleshooting/413-PAYLOAD-TOO-LARGE.png)  
**Figure 1:** *Payload too large error in backend terminal.*
</div>

In this cases you have to go to ***back\app.js*** file and look for the max size configuration. Once you have located the configuration, change it to a value adapted to your needs.

:::important
By default limits are 500mb for both json and YAML files.
:::

```js
app.use(bodyParser.json({ limit: '500mb' }));  // Adjust size as needed
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
```

<Disclaimer>
In future versions we want to improve this so it can be an enviroment variable. Until then,you have to solve it manually.
</Disclaimer>

Once it is change it, restart the app and the problem should be solved.

<Alert>
Take into account that this may not work in a server due to nginx and proxy configurations. There are situtions where your requests can be handled by your Lucid chain instance but your server rejects them. In other cases, such as an hierarchically nginx proxy structure, your nginx streamer can split the requests in two, making Lucid chain process your request 2 times. This can lead to double importations or synchronizations, which are very annoying, so be very careful.
</Alert>
