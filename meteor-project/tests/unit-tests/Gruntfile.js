(function () {
    'use strict';

    var
        LIVERELOAD_PORT = 35729,
        lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
        mountFolder = function (connect, dir) {
            return connect.static(require('path').resolve(dir));
        };


    module.exports = function (grunt) {

        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            jshint: {
                all: [
                    'Gruntfile.js'
                ],
                options: {
                    jshintrc: '.jshintrc'
                }
            },

            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec',
                        require: 'coffee-script/register'
                    },
                    src: [
                        'tests/**/*.coffee'
                    ]
                },
                current: {
                    options: {
                        reporter: 'spec',
                        require: 'coffee-script/register'
                    },
                    src: [
                        'tests/coffeeSourceTests.coffee'
                    ]
                }

            }
        });
        grunt.registerTask('compile', ['coffee']);
        grunt.registerTask('test_only', ['mochaTest:test']);
        grunt.registerTask('test', ['mochaTest:test']);
        grunt.registerTask('test_current', ['mochaTest:current']);
    };
}());
