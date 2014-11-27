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

            coffee: {
                compile_source: {
                    options: {
                        bare: false
                    },
                    files: [{
                        expand: true,
                        //add all the files to test here
                        src: [
                            '../../coffeSource.coffee'
                        ],
                        dest: 'js/js/', //somehow it works
                        ext: '.js'
                    }]
                },
                compile_tests: {
                    expand: true,
                    src: ['tests/**/*.coffee'],
                    ext: '.js'
                }
            },

            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec'
                    },
                    src: [
                        'tests/**/*.js'
                    ]
                },
                current: {
                    options: {
                        reporter: 'spec'
                    },
                    src: [
                        'tests/coffeeSourceTests.js'
                    ]
                }

            }
        });
        grunt.registerTask('compile', ['coffee']);
        grunt.registerTask('test_only', ['mochaTest:test']);
        grunt.registerTask('test', ['coffee', 'mochaTest:test']);
        grunt.registerTask('test_current', ['coffee', 'mochaTest:current']);
    };
}());
