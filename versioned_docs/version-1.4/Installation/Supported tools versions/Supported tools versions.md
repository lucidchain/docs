---
sidebar_position: 2
tags:
  - lucid-chain
  - installation
  - repository-setup
  - docker-compose
  - server-setup
  - development
keywords:
  - supported versions
  - Lucid chain
  - Supported tools
  - Supported versions
  - Redmine
  - Redmine 5.1.4
  - Redmine 5.1.3
  - Redmine compatibility
  - Redmine unsupported versions
  - iTop
  - iTop 3.0.0
  - iTop 3.2.0
  - iTop compatibility
  - MySQL
  - MySQL 5.7
  - Database recommendation
  - PhpMyAdmin
  - PhpMyAdmin 8.2.8
  - Docker-compose
  - Local environment
  - Tool testing
  - Version compatibility
  - Not tested
  - Highly recommended
  - Performance assurance
authors: 
  - name: "Daniel Galván Cancio"
    title: "Project Contributor"
    url: "https://github.com/Dangalcan"
    image_url: "https://avatars.githubusercontent.com/u/92941017"
---

# Supported tools and versions

In this section we are going to list each tool version tested and supported by Lucid chain.

## Redmine

We know that Redmine versions greater than 5.1.4 are **not** supported. Lucid chain has been developed and tested with Redmine 5.1.4 and 5.1.3. However, we ***highly recommend using Redmine 5.1.4***. Other versions lower to 5.1.3 have not been tested, so we cannot ensure a correct performance.

## iTop

Lucid chain has been tested using ***iTop 3.0.0***, but new tests are proving that ***iTop 3.2.0 is also compatible***. Other iTop versions have not been tested and we cannot ensure a correct performance.

## MySQL

Lucid chain does not have a database, but for using a local Redmine we strongly recommend using ***MySQL 5.7.*** Other versions have not been tested.

## PhpMyAdmin

In case that you want to look your Redmine database, you have available a phpMyAdmin image in local Docker-compose. ***We have only tested phpMyAdmin 8.2.8***, so we highly recommend using thatspecific version.
