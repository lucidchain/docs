---
sidebar_position: 2
tags: 
  - lucid-chain
  - CORS
  - troubleshooting
  - vite
  - set up
  - development
keywords:
  - CORS error
  - 405 Method Not Allowed
  - env variables
  - Vite
  - backend API
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Cors

import Disclaimer from '@site/src/components/Disclaimer.js';
import Alert from '@site/src/components/Alert.js';

In this section you are going to learn how to resolve some cors problems that you may have with Lucid chain.

## Introduction

CORS can be something very annoying. Here we are going to explain how to avoid conflics with cors and credentials.

## 405 Methond Not Allowed

If you are trying to connect to your Lucid chain instance in ***http://localhost:5173*** because you ran ***npm run dev*** command, and you are not able to connect your Redmine or iTop instance to this Lucid chain, check the HTTP requests.  If in those HTTP responses you are receiving messages with the following format:

```json
{"type":"error","error":{"message":"Method Not Allowed"}}
```

 and in your browser console you see **Failed to load resource: the server responded with a status of 405 (Method Not Allowed)**, check the backend.

<div align="center">
![405 error in browser](/img/troubleshooting/405-NOT-ALLOWED-BROWSER.png)  
**Figure 1:** *Browser 405 errors.*
</div>

Check the terminal where you executed ***npm run dev***. If you see something like:
***SvelteKitError: POST method not allowed. No actions exist for this page*** read carefully. Something like this error may display:

```text
SvelteKitError: POST method not allowed. No actions exist for this page
    at Module.handle_action_json_request (yourRouteToTheProject/lucidChain/wizard/front/node_modules/@sveltejs/kit/src/runtime/server/page/actions.js:27:28)
    at Module.render_page (yourRouteToTheProject/lucidChain/wizard/front/node_modules/@sveltejs/kit/src/runtime/server/page/index.js:44:10)
    at async resolve (yourRouteToTheProject/lucidChain/wizard/front/node_modules/@sveltejs/kit/src/runtime/server/respond.js:449:18)
    at async Module.respond (yourRouteToTheProject/lucidChain/wizard/front/node_modules/@sveltejs/kit/src/runtime/server/respond.js:322:20)
    at async file:///C:yourRouteToTheProject/lucidChain/wizard/front/node_modules/@sveltejs/kit/src/exports/vite/dev/index.js:524:22 {
  status: 405,
  text: 'Method Not Allowed'
}
```

<div align="center">
![405 error in backend](/img/troubleshooting/405-NOT-ALLOWED.png)  
**Figure 2:** *405 error in backend.*
</div>

Congratulations, probably your frontend enviroment variables may not be properly configured. Go to your .env en check it looks like this:

```.env
VITE_BACKEND_API="http://localhost:3000"
```

Please ensure your did not called the variable BACKEND_API or you missed the http method. It is very important because otherwise it will not work. If this did not fix the issue, go to this file: ***front\src\stores\stores.js***. This file contains the logic for enviroment and global variables. Do not touch it unless you know very well what you are doing. If you made changes, restore them at add this line.

```js
export const BackendAPI = import.meta.env.VITE_BACKEND_API ?? '';
```

<Alert>
This will fix the issue because all enviroment variables ***MUST*** start with ***VITE_***. This make Vite detect them and work with them properly.
</Alert>

<Disclaimer>
After that, please make sure you have the correct configuration in your backend enviroment variables. Check that your .env in back looks like this:

```.env
LUCID_USERNAME=admin
LUCID_PASSWORD=admin
LOG_LEVEL=info  ## LOG_LEVEL CAN BE: error > warn >  info > verbose > debug > silly
NUM_DECIMALS=2  ## 2 is the recomended. The maximum is 5. More than that doesn't make sense
APP_MODE=dev    ## APP_MODE can be dev or prd. In dev you dont need authentication, but in prod u do!
```

</Disclaimer>

## Still having problems

If you are still encountering some problems please go to the file ***back\app.js*** and check cors configurations. Make sure you have something like this:

```js
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], 
    methods: ['POST','GET'],
    credentials: true
  }));
```

<Disclaimer>
If you are trying to use Lucid chain API and for any reasong you are having cors problems add your server url o the ***origin*** array in cors configuration, for example:

```js
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000','https:myCustomServer.com:80/myCustomApp'], 
    methods: ['POST','GET'],
    credentials: true
  }));
```

</Disclaimer>
