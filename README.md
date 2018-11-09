# Stock Stalk Example and HTML Template

##  What is Stock Stalk

Stock Stalk is an implimentation of the "To-Do List Example" minimum proposed by by @zachberry. It's a Stock Watcher / Nueral Network Stocl Predictor using [https://api.iextrading.com/](IEXTrading's Api) and [brain.js](https://github.com/BrainJS) (eventually) as an example app of this proposal for... folder structure? Template? Whatever.

![I accept you're challenge. Bravo for actually reading the alt text.](https://media.giphy.com/media/jNWig8QMg4jsc/giphy.gif).

## Features

* Web Components v1
* Javascript modules
* Custom Elements
* ES6, ES7, generators, iterators, async/await
* .documentation.md files in folders I thought would be relevant,
    *  Follow the white rabbit of imports starting with index.html's script and link tags as two starting points. 
* Only two packages total (both of which are `--save-dev`). These can both be installed globally and  package.json/node_modules could be removed.
* `npm run start` uses the [http-server]() package to start a development (aka local) server. 
    * The link will probably be http://localhost.com:8080 unless you know what you're doing and want to change it.
* The following three commands use [surge.sh](https://surge.sh). A free cdn hosting service for static webpages.
    * `npm run publish` gives you an instant one off (free) url
    * `npm run published:list` lists all deployed urls
    * `npm run teardown {url from published:list}` removes a published url 
* They can even do custom urls
* And protected urls.

## Coming soon

* Stand-Alone Babel Support for IE11
* CSS Houdini support using a polyfill
* Generalizing the principals in the documentation so everytihng is more template and cookie-cutter.

## Where's your Medium Article?

It's coming soon, @zachberry, jesus. 
