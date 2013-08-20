# Canvas Modules [![Build Status](https://travis-ci.org/aaronshaf/canvas-modules.png?branch=master)](https://travis-ci.org/aaronshaf/canvas-modules)

## Getting started

If you don't already have node & npm, get it [here](http://nodejs.org/) or use [brew](http://brew.sh/):
```
brew install node
```

If you already have node & npm, upgrade:

```
brew upgrade node
```

Make sure you have node >= 0.10.15 and npm >= 1.3.5

```
node --version
npm --version
```

If you don't already have [grunt](http://gruntjs.com/):
```
sudo npm install -g grunt-cli
```
```
git clone https://github.com/aaronshaf/canvas-modules.git
```

```
cd canvas-modules
```

```
npm install
```

```
cp config.example.json config.json
```

```
npm start
```

## Mock API, and proxy API

By default a mock API is used. If you would like to test against a running instance of Canvas, uncomment the [api line in gruntfile.coffee](https://github.com/aaronshaf/canvas-modules/blob/master/gruntfile.coffee#L17).

## To do

* Automatically generate main.js (see [Ryan's Rakefile](https://github.com/rpflorence/canvas-client-app/blob/aafa96e50fe529fab35e4c1ed79f73fa3ec7d760/Rakefile#L34-L59))
* Share canvas-global's CSS
* Grunt task for export into canvas-global?
* Make tests work in either tests/** or in main controller/route/model directories
