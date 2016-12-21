# grunt-leading-quotes
[![Build Status](https://api.travis-ci.org/sparanoid/grunt-leading-quotes.svg?branch=master)](https://travis-ci.org/sparanoid/grunt-leading-quotes)
[![npm Version](https://img.shields.io/npm/v/grunt-leading-quotes.svg)](https://www.npmjs.com/package/grunt-leading-quotes)
[![npm Downloads](https://img.shields.io/npm/dm/grunt-leading-quotes.svg)](https://www.npmjs.com/package/grunt-leading-quotes)

> A grunt task which adds CSS classes for paragraphs with leading quotes in HTML

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-leading-quotes --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-leading-quotes');
```

## The "leading_quotes" task

### Overview

In your project's Gruntfile, add a section named `leading_quotes` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  leading_quotes: {
    options: {
      elements: 'h1, h2, h3, h4, h5, h6, li, p',
      regex: /「|『|“|‘|（/,
      class: 'leading-indent-fix',
      ignoreClass: 'no-lq',
      addStyle: false,
      addStyleOffset: '-.4em',
      verbose: true
    },
    all: {
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

### Options

#### elements

Type: `String`
Default: `'h1, h2, h3, h4, h5, h6, li, p'`

Elements to check, you can define multiple elements by comma-separated values.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        elements: 'p, li'
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

#### regex

Type: `String`
Default: `/「|『|“|‘|（/`

Symbols to test, in regex format.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        regex: /“|‘/
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

#### class

Type: `String`
Default: `'leading-indent-fix'`

Custom CSS class.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        class: 'lq-fix'
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

#### ignoreClass

Type: `String`
Default: `'no-lq'`

Elements to be ignored, affected to all descendants.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        ignoreClass: 'no-lq'
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

#### addStyle

Type: `Boolean`
Default: `false`

Add styles automatically for matched elements.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        addStyle: true
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

#### addStyleOffset

Type: `String`
Default: `'-.4em'`

Change default styles offset.

```js
grunt.initConfig({
  leading_quotes: {
    all: {
      options: {
        addStyleOffset: '-.39em'
      },
      files: {
        'dest-index.html': 'source-index.html',
      },
    },
  },
});
```

Result:

```html
<p class="leading-indent-fix" style="text-indent: -.39em;">&#x201C;This should be replaced.&#x201D;</p>
```

#### verbose

Type: `Boolean`
Default: `true`

Verbose logging.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- See `CHANGELOG.md` for release history
