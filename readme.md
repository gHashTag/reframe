<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.






-->
<p align="right">
    <sup>
        <a href="#">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/star.svg?sanitize=true"
              width="16"
              height="12"
            >
        </a>
        Star if you like
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://github.com/reframejs/reframe/blob/master/docs/contributing.md">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/biceps.min.svg?sanitize=true"
              width="16"
              height="14"
            >
            Co-maintain Reframe
        </a>
    </sup>
    <br/>
    <sup>
        <a href="https://twitter.com/reframejs">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/twitter-logo.svg?sanitize=true"
              width="15"
              height="13"
            >
            Follow on Twitter
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href="https://discord.gg/kqXf65G">
            <img
              src="https://github.com/reframejs/reframe/raw/master/docs/images/chat.svg?sanitize=true"
              width="14"
              height="10"
            >
            Chat on Discord
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
    </sup>
</p>
<p align="center">
    <a href="https://github.com/reframejs/reframe">
        <img src="https://github.com/reframejs/reframe/raw/master/docs/images/logo-with-title.min.svg?sanitize=true" width=450 height=94 style="max-width:100%;" alt="Reframe"/>
    </a>
</p>

<div><p align="center">
    Framework to create web apps.
</p></div>

<div><p align="center">
    <sub><sub><img src="https://github.com/reframejs/reframe/raw/docs/docs/images/thunderbolt.min.svg?sanitize=true" width="26" height="26"></sub></sub>&nbsp;&nbsp;<b>Rapid&nbsp;Dev</b>&nbsp;&nbsp;&#8209;&nbsp;&nbsp;Implement&nbsp;apps&nbsp;in&nbsp;no&nbsp;time.
    &nbsp; &nbsp; &nbsp; &nbsp;
    <sub><sub><img src="https://github.com/reframejs/reframe/raw/docs/docs/images/tornado.min.svg?sanitize=true" width="26" height="26"></sub></sub>&nbsp;&nbsp;&nbsp;<b>Fully&nbsp;Flexible</b>&nbsp;&nbsp;&#8209;&nbsp;&nbsp;Easily&nbsp;and&nbsp;progressively&nbsp;ejectable.
</p></div>

<br/>

[**Overview**](/../../)<br/>
Starters: [React Server](/docs/react-server-starter.md) | [React Frontend](/docs/react-frontend-starter.md) | [React Database](/docs/react-database-starter.md)<br/>
[Usage Manual](/docs/usage-manual.md)<br/>
[Concepts](/docs/concepts.md)<br/>
[Plugins](/docs/plugins.md)

<br/>

# Overview

 - [Introduction](#introduction)
 - [Example](#example--top)
 - [Getting Started](#getting-started--top)

<br/>
<br/>

### Introduction

With Reframe you can create a web app simply by defining "page configs".
Your pages are automatically built and served.

~~~jsx
// A page config
const WelcomePage = {
  route: '/welcome',
  view: () => <div>Welcome to Reframe</div>,
  title: 'Welcome'
};
~~~

**No build configuration** and **no server configuration** is required.

Yet, thanks to its "Progressive Eject" feature and its simple architecture,
you can easily **customize and gain control over everything**.
Reframe doesn't lock you in: You can progressively and fully eject Reframe.
You can quickly implement a prototype while staying fully flexible down the road.

Reframe is a "Universal Framework":
You can create any type of app:
a **modern interactive frontend with React**,
a Node.js **backend with old-school non-interactive HTML pages**,
a serverless Vue Frontend,
a **full-stack app** with modern frontend + Node.js server + **Database/ORM** (ORM integration is WIP),
etc.
Changing from one type of app to another is easy.
You can start write your prototype right away and
without thinking about what type of app is right for you.

When we say Reframe is rapid yet flexible, we mean it.

See [Concetps](/docs/concepts.md) for more about Progressive Eject, Universal Framework, and other concepts such as the non-interactive-by-default approach.

<br/>
<br/>

### Example &nbsp; [<sup><sub>:top:</sub></sup>](#overview)

We create a web app
by defining a page config `HelloPage`.

~~~jsx
// ~/my-app/pages/HelloPage.config.js

// By default you write your views with React.
// You can use another view library such as Vue.
import React from 'react';

const HelloPage = {
  route: '/hello/:name', // Parameterized route
  title: 'Hi there', // Page's <title>
  view: props => {
    // The route argument `name` is available at `props.route.args`
    const name = props.route.args.name;
    return (
      <div>Hello {name}</div>
    );
  }
};

export default HelloPage;
~~~

Reframe does the rest:

<p align="center">
    <img src='https://github.com/reframejs/reframe/raw/master/docs/images/reframe-start.png?sanitize=true' width="780" style="max-width:100%;"/>
</p>

That's it: We created a web app simply by defining one page config. No build config, no server config.

<br/>
<br/>

### Getting Started &nbsp; [<sup><sub>:top:</sub></sup>](#overview)

Choose a starter:

- [React Server](/docs/react-server-starter.md)
- [React Frontend](/docs/react-frontend-starter.md)
- [React Database](/docs/react-database-starter.md)

The starters scaffold an app with the following:

&nbsp; | React Frontend | React Server | React Database
--- | :---: | :---: | :---:
React Frontend | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:
Node.js Server | :x: | :heavy_check_mark: | :heavy_check_mark:
Database/ORM | :x: | :x: | :heavy_check_mark:

Don't bother choosing the right starter:
You can easily add/remove a Node.js server and add/remove a database/ORM.

Quikly choose a starter and start write your prototype.
As your prototype grows add/remove what you need.

<br/>
<br/>

<a href="#top">&#8683; TOP &#8683;</a>

<a href="#top"><b>&#8683;</b> <small>TOP</small> &#8683;</a>

<a href="#top">&#8683; <sub>TOP</sub> &#8683;</a>

<a href="#top">&#8679; <sub>TOP</sub> &#8679;</a>


<sup><a href="#top">&#8679; TOP &#8679;</a></sup>

<b><sup><a href="#top">&#8679; TOP &#8679;</a></sup></b>


<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/overview.template.md` instead.






-->
