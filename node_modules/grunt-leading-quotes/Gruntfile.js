/*
 * grunt-leading-quotes
 * https://github.com/sparanoid/grunt-leading-quotes
 *
 * Copyright (c) 2016 Tunghsiao Liu
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require("time-grunt")(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    leading_quotes: {
      default_options: {
        files: {
          'tmp/default_options': 'test/fixtures/index.html',
        },
      },
      custom_elements: {
        options: {
          elements: 'p, li'
        },
        files: {
          'tmp/custom_elements': 'test/fixtures/index.html',
        },
      },
      custom_regex: {
        options: {
          regex: /“/
        },
        files: {
          'tmp/custom_regex': 'test/fixtures/index.html',
        },
      },
      custom_class: {
        options: {
          class: 'lq-fix'
        },
        files: {
          'tmp/custom_class': 'test/fixtures/index.html',
        },
      },
      custom_ignore: {
        options: {
          ignoreClass: 'custom-no-leading-quotes'
        },
        files: {
          'tmp/custom_ignore': 'test/fixtures/index.html',
        },
      },
      enable_style: {
        options: {
          addStyle: true,
          addStyleOffset: '-.39em'
        },
        files: {
          'tmp/enable_style': 'test/fixtures/index.html',
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    conventionalChangelog: {
      options: {
        changelogOpts: {
          preset: "angular"
        }
      },
      dist: {
        src: "CHANGELOG.md"
      }
    },

    bump: {
      options: {
        files: ["package.json"],
        commitMessage: 'chore: release v%VERSION%',
        commitFiles: ["-a"],
        tagMessage: 'chore: create tag %VERSION%',
        push: false
      }
    },

    'npm-contributors': {
      options: {
        commitMessage: 'chore: update contributors'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'leading_quotes', 'nodeunit']);

  grunt.registerTask('release', 'bump, changelog and publish to npm.', function(type) {
    grunt.task.run([
      'npm-contributors',
      'bump:' + (type || 'patch') + ':bump-only',
      'conventionalChangelog',
      'bump-commit',
      'npm-publish'
    ]);
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
