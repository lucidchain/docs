---
sidebar_position: 3
---

# Frontend

The frontend is very easy to understand. It is a simple project developed in Svelte. The main part is in ***src*** folder. In ***components*** we can find all the different frontend reusable and/or complex parts. Some examples are issue tables, piecharts and other artifacts.

In ***routes*** we can find the screens and navigation structure. Svelte assigns each folder to a word between slashes in the browser, which creates a route. For example, if we have the folders docs/example, that means that the route "/docs/example" exists in the app. Inside every folder we can find the exact same name for every file, which is ***+page.svelte***. This allows the framework to create routes and associate them to screens in a dynamic and confortable way.

There are folders that have special meaning. If you see any folder named between brackets, that means it is an url param. For example, the folder name [target] is refering to an url param, in this case, target.

Let's see a full example for a better understanding:

There are 3 folders:

+ routes
+ routes/export
+ routes/export/[target]

This means that in the app there is an url corresponding to the route /export/:target

Let's supose that there is a file called **+page.svelte** inside [target] folder. That means that when the user goes to /export/:target, he will find the screen defined in that +page.svelte file.

In this case, the user will find the same page whatever taget value is. In lucid chain case, this means that /export/itop and /export/redmine will lead to the same screen.
