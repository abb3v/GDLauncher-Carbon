---
title: "GDLauncher: A new journey - App rewrite, new partnership and more"
description: Hello everyone! As some of you might know, we have been thinking about doing a rewrite of GDLauncher for a while, and we're here today to finally give you some updates! [...]
author: Davide Ceschia
pubDate: 01 November 2022
heroImage: https://cdn.gdl.gg/articles/curseforge-partnership-announcement/thumbnail.jpg
---

<details>
  <summary id="tableListSummary">Table of Contents</summary>
  <ul id="tableList"></ul>
</details>

<br />

# A new start

Hello everyone! As some of you might know, we have been thinking about doing a rewrite of GDLauncher for a while, and we're here today to finally give you some updates!

# What is GDLauncher

For those who don't know, GDLauncher is a simple, yet powerful Minecraft custom launcher with a strong focus on the user experience. Its main goal is to make it easy and enjoyable to manage different Minecraft versions and install forge/fabric/other modloaders, bringing the playing and modding experience to the next level.

# GorillaDevs Inc. is now a company!

GorillaDevs is now officially a company. As such, we will be able to get access to a lot of things that were just out of reach before. We can also now hire people to help us develop GDLauncher, which we have wanted to do for a while.

By the way, let me present to you our new incredible team!

- Davide (Founder of GDLauncher) - President / CEO / Software Engineer
- Valentin (ex Co-founder of Modrinth) - Co-Founder & General Advisor

We also have a couple of software engineers and designers working with us full time, as well as other partners and collaborators.

# A bit of history

GDLauncher was created back in 2014 by Davide as a way to learn programming and do something fun. Over the years, the project has grown, and the users have gone from just Davide and a couple of friends to hundreds and then thousands today.

Since the project's primary goal was to get better at programming and have fun, it has been rewritten multiple times in multiple languages and frameworks, allowing us to experiment with what works for us and what doesn't.

Below, you can see GDLauncher's design evolution over the years.

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/launcher_evolution.png"
  alt="GDLauncher's Evolution"
/>

# GDLauncher x CurseForge

GDLauncher is currently just a simple launcher, but it can be much more!

We are thrilled to announce that we have partnered up with Curseforge and Overwolf!
Curseforge is going through a profound internal change after being acquired by Overwolf, and we believe this partnership will benefit all parties, especially the community.

After the decision to allow mods to opt out from third parties due to them not contributing to the content creators' payments, the Minecraft community took a hit.

Playing modded Minecraft became very stressful and cumbersome, especially for Linux users and anyone who didn't like the Curseforge app; it shouldn't be like this. We believe we can make modded Minecraft more convenient and fun while delivering exciting and useful features that don't exist anywhere else. By using GDLauncher Carbon, you'll also be contributing to paying authors of mods and modpacks on Curseforge, as well as the team behind GDLauncher!

We also got invited into Overwolf's funding program, allowing us to take the next big step and create a fantastic product!

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/GDl_Dev_meme.jpg"
  alt="GDLauncher's Slow Development"
/>

One of the more frequent complaints was the lack of consistency in our release schedule and bug fixes. GDLauncher has always been loved for our attention to detail and the fantastic user experience it provides, but the truth is that we can still do so much better. We believe that our product is average at best, somewhat buggy, heavy, and still lacking in essential features that a custom launcher should have. This is where our partnership comes in.

It will give us the resources to bring the development of GDLauncher to the next level.

Wouldn't it be wonderful if we could work on it full time and be able to provide awesome content to the community? That's the goal of this partnership.

We are dedicating all of our resources towards developing a brand new version of the launcher called GDLauncher Carbon, which will have full access to CurseForge's APIs, including third-party opted-out mods, while also improving the current experience in every way.

# FAQ

## How will this partnership impact the current launcher? What about the rewrite, Carbon?

This partnership will not impact the current launcher too much. Over time its support will be discontinued in favor of GDLauncher Carbon.

All the resources will go towards developing GDLauncher Carbon. We don't have an ETA yet, and we will publish updates in the next few months on our [Discord](https://discord.gdlauncher.com).
After GDLauncher Carbon will be ready to go to production, the current release of GDLauncher will be completely archived.

## Will GDLauncher Carbon be part of the Overwolf platform?

Not really. GDLauncher will remain a standalone installable/portable executable that does not depend on any Overwolf apps, yet it will partially supported by the Overwolf platform.

## Will GDLauncher Carbon become a paid product?

No, there will always be a free version of GDLauncher.
However, to support us, the developers of GDLauncher, and mod(pack) developers on CurseForge, there will be non-intrusive advertisements integrated within the launcher.

## Will advertisements in GDLauncher Carbon be intrusive?

It depends on your definition of intrusive. It will definitely be more intrusive than not having ads, but in general they won't bother you too much. We won't have full screen popups, hidden ads, ads that are difficult to identify from content and that kind of stuff. We will make sure to define where the content is and where the ads are and differentiate them appropriately so you don't end up clicking them by accident. Our main goal with GDLauncher Carbon is to completely rethink and redefine the user experience and bring so much more to the table than a simple launcher.
We will try to keep ads as unintrusive as possible.
We want to make it easy and enjoyable to play modded Minecraft, and we believe that advertisements are necessary to

- Support the developers of GDLauncher
- Support mod and modpack developers on CurseForge
- Pay for the infrastructure needed to run the launcher
- Keep GDLauncher up to date, bug-free and performant

If you really hate ads (understandable) you will have the option to pay a monthly subscription to access premium non-essential features and disable ads, or keep using the current edition of GDLauncher, even though it will not receive any more updates or support.

## Will GDLauncher Carbon support other games other than Minecraft?

No, our goal is to make GDLauncher the best Minecraft launcher out there. We will not be adding support for other games.

## Will Overwolf own GDLauncher Carbon?

No, GDLauncher will remain completely independent in its decisions and development.
Although we will become a 2nd-party, Overwolf and CurseForge will not be involved in any decisions regarding the development of GDLauncher aside from the funding requirements.

## I heard that GDLauncher Carbon will still use Electron. Is that true?

Yes, GDLauncher Carbon will still use Electron. We know there are other options out there, but we don't believe there is any real production-ready alternative to Electron.
However, because of our independent native core and web-based frontend, we will be able to switch between web-based application frameworks (e.g., Tauri) without too much fuss if we see the opportunity in the future.
This said, Electron is not as bad as you might think. What makes it really bad is people writing unoptimized code most of the time.
Here you can see a few comparisons.

on MacOS:

C++ / QT

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/multimc-mac.png"
  alt="MultiMC - Mac"
/>

Electron

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/gdlauncher-mac.png"
  alt="GDLauncher Carbon - Mac"
/>

On Windows:

Java

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/atlauncher-win.png"
  alt="ATLauncher - Windows"
/>

Electron

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/curseforge-win.png"
  alt="CurseForge - Windows"
/>

Electron

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/gdlauncher-win.png"
  alt="GDLauncher Carbon - Windows"
/>

The comparison is unfair because GDLauncher Carbon is still in development, but it's still a good example of how Electron can be optimized to perform really well.

## Will it be faster, lighter, look better?

Even though we will still use Electron, there are some significant differences in the tech stack we will be using.

Right now, the entire app is written in (unoptimized) React, including all the system operations, networking, logic, etc. This is an issue since NodeJS is single-threaded, and running both the UI and business logic on it is not ideal. React is also not very performant when it comes to rendering.

In the rewrite, all the native operations will be done in [Rust](https://rust-lang.org) on a separate process, taking advantage of its blazingly fast speed. The UI will be written in [SolidJS](https://solidjs.com), a super lightweight library with close to vanilla-js performance, and we will be removing styled components, that alone will improve performance by many orders of magnitude.

## What about translations? Will it support \_\_ language?

Translations will have first-class support in GDLauncher Carbon, both for the website and the app! We know many of our users are not native English speakers, and we can't wait to give them the option to use GDLauncher in their native language.

The first languages we want to support are English, German, Italian, Japanese, and French.
There is no reason why we shouldn't support other languages, so if you would like to have your language added, let us know on our [Discord](https://discord.gdlauncher.com). We will also look into crowd-sourcing translations in some way in the future.

## Will GDLauncher Carbon still be open source?

We strongly believe in the power of open source to improve the world around us, but choices need to be made to be sustainable long term.
The short answer is kind of. There are more details explained below.

### Our goal

Our goal is to keep the source code as open as possible so that everyone can inspect, study and possibly even contribute to the code while also trying to make the project sustainable long term.

### Open Source is awesome

Open source is awesome, it allows people to learn and study from someone else's code, fork projects that are no longer maintained, and even use them in their own projects! It also forces continuous innovation and inspires people to write cleaner and better code. As we said, we strongly believe in the power of open source, and a lot of times, making your project open source is the correct answer!

### Open Source is not always awesome

Despite its strengths, there are some dark sides to open source. Many projects are riddled with bugs, poorly documented, and sometimes even dangerous to use. The web is littered with abandoned projects that once seemed promising. It's like a clearance bin you'd find at a discount store; there may be some treasures in there, but you'll have to dig through a lot of undesirables to find the gems. In an industry that's inundated weekly with "hot new" libraries and projects, all just a click away for free, it can be tough to figure out which ones to gamble on.

### Commitment to the project

Some projects are one-trick ponies that don't require ongoing commitment. For example, a math library that performs matrix operations or a formatting library. If the author abandons the project, it's no big deal. Other projects like ours require continuous work to keep up to date with all the external dependencies we have, like CurseForge, Modrinth, all the changes happening in Minecraft itself, all the external modloaders, and so on.

### Hampered by success

Paradoxically, success is the very thing that kills many open source projects because they don't have a funding mechanism to underwrite all the demands. The project that was once the twinkle in the author's eyes often ends up being a thorn in their side. They can't afford (or don't really want) to keep up with the demands. That's not to say that all open source projects suffer this fate. We have the utmost respect for open source authors, and we don't mean to diminish anyone's hard work or generosity.

### Sustainable

Maintaining open-source software has always been challenging. Most people (like us) do it just because they love programming and love creating amazing software. However, most people have a job, family, and other interests... and there is only so much time we can spare, so some tradeoff needs to happen, and open source is usually what is left out.

Moreover, even though open source software can technically be community driven, in most cases it's not, and GDLauncher is a clear example. The vast majority of it has been developed by just 2 of us over the years, taking thousands of hours of work.
Below you can find insights into all contributors' added/removed lines of code.

<img
  src="https://cdn.gdl.gg/articles/curseforge-partnership-announcement/gdl_contributions.jpg"
  alt="GDLauncher's contributions"
/>

### More about this

If you want to dig deeper into why we chose this direction, please read [this](https://greensock.com/why-license/) article. We also copied parts of that article because we believe it explains it very well.

### Code License

We want to keep the project as open as possible while preventing unfair competition and exploitation of our work by competitors or corporations.
Our code will be licensed under a custom EULA that will allow personal use and contributions to the project, but will prevent commercial use and redistribution of the code.
This way you'll be able to inspect and study the code, but companies won't be able to use it in their own project or redistribute it.
We are currently still working on the exact terms, so if you have any ideas or suggestions, please let us know on our [Discord](https://discord.gdlauncher.com).

### Asset License

Assets (branding, images, illustrations, videos, animations, etc.) are all licensed under All Rights Reserved (`ARR`).

### Translations' License

Translations will be licensed under Creative Commons Zero (`CC0`) v1.0 Universal.

## What advantages will the rewrite have over the current version?

As explained in the [history](#a-bit-of-history) section, GDLauncher was originally written with little coding knowledge and has accumulated a non-negligible amount of technical debt, to the point where today it is very hard to maintain and add new features to it.

You can look at the current version as a proof of concept of what we can achieve with no resources and little coding knowledge. A few years have passed, we are way more experienced, and we now also have enough resources to bring it to the next level.

GDLauncher Carbon will be a complete rewrite of the app from the ground up, using the best practices and technologies available today. It will be faster, lighter, more secure, and easier to maintain.

## Our commitment to privacy

A really important aspect that we want to focus on is privacy.
As a business, we will need to collect some data to be able to provide our services, but we will make sure that we are not collecting anything that is not necessary.
Moreover, in order to be able to make informed decisions about GDLauncher's features and design, we will be collecting additional usage data, but you will be able to opt-out of it if you want to, even though we would really appreciate if you didn't. We don't share or sell any of this data with third parties, the only people able to access it are the GDLauncher founders, but this data really helps us understand how people use GDLauncher and how we can optimise the design and features to make it better for everyone.

## Modrinth support

We were recently able to find an agreement with their team and GDLauncher will have first-class support for Modrinth!
You'll be able to install and browse mods and modpacks from both Curseforge and Modrinth in a seamless way.

## Other collabs / integrations

If you know of any other projects that would be a good fit and would be interested in collaborating with us, please let us know on our [Discord](https://discord.gdlauncher.com).

## What about some real content?

A launcher is just a tool that lets you enjoy Minecraft a bit more, but it's not the essence. That's why we decided to start working on a few GDL branded custom modpacks / mods that will be available sometime next year but we will keep you posted on our [Discord](https://discord.gdlauncher.com).

## How can I contribute?

There are a lot of ways in which you can contribute to making GDLauncher an excellent product!
First of all, if you didn't do it already, you could come over to our [Discord](https://discord.gdlauncher.com) and make suggestions on what you would like to see implemented!
Moreover, if you feel like you have the skills, you could come work with us.
Yes, you heard that right! If you want to join the team, you can either:

- Contribute in your spare time
- Apply to our hiring selection at [here](https://gdlauncher.com/en/careers) to work with us! We are hiring Rust and JavaScript engineers

## I have more questions!

If you have any other questions, you are welcome to talk with us on our [Discord](https://discord.gdlauncher.com). We are more than happy to clarify your doubts and queries!

# TLDR

GDLauncher is going places.
