# Stock Stalk Example and Progressive Web App Template

##  What is Stock Stalk

Stock Stalk is an implimentation of the "To-Do List Example" minimum proposed by by [@zachberry](https://github.com/zachberry). It's a Stock Watcher / Nueral Network Stock Predictor using [IEXTrading's Api](https://api.iextrading.com/) and [brain.js](https://github.com/BrainJS) to make an open source Market Speculator.


![I accept you're challenge. Bravo for actually reading the alt text.](https://media.giphy.com/media/jNWig8QMg4jsc/giphy.gif)

Hey [allygator](https://allygator.me/), sorry I responded with basically just a link like a knob. This is going to be a better example of what I was talking about.

## Features

* Web Components v1 examples and implementation
* Javascript module examples and implementation
* Custom Elements examples and implementation
* ES6, ES7, generators, iterators, async/await... you get the idea.
* .documentation.md files can be found in folders I thought would be nice to have one.
    *  Follow the white rabbit of imports starting with [index.html](https://github.com/loraxx753/html-template/blob/master/index.html)'s [script](https://github.com/loraxx753/html-template/blob/master/script.js) and [link](https://github.com/loraxx753/html-template/blob/master/style.css) tags as the two starting points. 
* Only two packages, both of which are `--save-dev` only. Alternatively, they can be installed globally, removing the need for either `package.json` or a `node_modules` folder.
* `npm run start` uses the [http-server](https://www.npmjs.com/package/http-server) package to start a development (aka local) server. 
    * The link will probably be http://localhost.com:8080 unless you know what you're doing and want to change it.
* The following three commands use [surge.sh](https://surge.sh). A [free](https://surge.sh/help/why-is-surge-free) [cdn](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) for [Progressive](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Advantages) [web](https://developers.google.com/web/progressive-web-apps/) [apps](https://developers.google.com/web/fundamentals/).
    * `npm run publish` gives you an instant one off (free) url
    * `npm run published:list` lists all deployed urls
    * `npm run teardown {url from published:list}` removes a published url 
* They can even do [custom urls]()
    * [protected urls](), too.

## Coming Soon

* Stand-Alone Babel Support for IE11
* CSS Houdini support using a polyfill
* Generalizing the principals in the documentation so everytihng is more template and cookie-cutter.
* ES8 features. Some of these may already be implemented, though. I haven't really been paying attention.

## Where's your Medium Article?

It's coming soon, [Zachary](https://github.com/zachberry).

Do you hear me, _[Zachary](https://github.com/zachberry)_? It's coming, okay?


