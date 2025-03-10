---
sidebar_position: 3
tags: 
  - lucid-chain
  - port
  - troubleshooting
  - set up
  - development
keywords:
  - lucid-chain
  - port
  - troubleshooting
  - development
  - npm start
  - address in use
  - configuration
  - environment variables
  - Swagger
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Port already in use

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you are going to learn what to do when you receive an error saying something like ***"Address already in use :::3000"***

## In local Lucid chain instance

If you are encountering this problem in your own Lucid chain instance, it is because it is trying yo start the server in port 3000 and it can not do it because this port is already in use. This means you will have to stop whatever is in port 3000 and then try again to run ***npm start*** in your Lucid chain's ***/back*** folder.

<div align="center">
![405 error in browser](/img/troubleshooting/3000 PORT Already in use.png)  
**Figure 1:** *Port already in use problem.*
</div>

In this case you have to kill the process running in port 3000. You can do it in various ways.

### In windows

1. See which process is running in port 3000.

    ```bin/bash
    netstat -ano | findstr :3000
    ```

2. Kill the process (ProcessId is the output of step 1).

    ```bin/bash
    taskkill /PID ProcessId /F
    ```

<Disclaimer>
If you do not have privileges for running step 2 command, use CMD (Command Promt) instead. If still does not work, go to your task manager, search by PID and kill the task.
</Disclaimer>

### In Linux/Mac

1. List the process running in port 3000.

    ```bin/bash
    lsof -i :3000
    ```

2. Kill the process (ProcessId is the output of step 1).

    ```bin/bash
    kill -9 ProcessId
    ```

## Other solutions (NOT RECOMMENDED)

If you can not kill the process running in port 3000, there are other two possible solutions. Please understand that this is not recommended and can create additional problems. ONLY TRY THIS ID YOU KNOW WHAT YOU ARE DOING.

### Change App port

You can change App port in ***back\app.js***. Just go to port definition and change the variable:

```js
const port = 3000
```

:::important
This ovbiously changes your app port, so be carefull and ***change VITE_BACKEND_API in front/.env*** as well. You should also change Dockerfile and Swagger ports.
:::

### Adjust App execution to a subdomain

This solution is more complex and consists in making Lucid chain run in ***http://localhost:3000/YourCustomRoute*** instead of in ***http://localhost:3000***. Usually this is not possible and can create many problems. For example, if you try to deploy Lucid docs in localhost:3000/docs and Lucid chain in localhost:3000, it will not work easily. You have to be cautious and depending on the contexts and your server architectura it can work.

:::tip
It is much better configuring different DNS and having a proxy that redirects your HTTP requests, but also take into account that some Lucid chain enviroment variables may depend on other server configurations.
:::
