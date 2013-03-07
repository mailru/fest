'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        meta: {
            src  : 'lib/**/*.js',
            specs: 'spec/**/*.spec.js'
        },
        watch: {
            test : {
                files: ['<%= meta.src %>', '<%= meta.specs %>'],
                tasks: 'test'
            }
        },

        clean: {
            tests: ['spec/tmp']
        },

        fest_build: {
            initial: {
                args: [
                    '--dir=spec/templates',
                    '--exclude=*error*',
                    '--out=spec/tmp/initial',
                    '--po=spec/tmp/initial/ru_RU.po'
                ]
            },
            translated: {
                args: [
                    '--dir=spec/templates',
                    '--exclude=*error*',
                    '--out=spec/tmp/translated',
                    '--translate=spec/templates/en_US.po'
                ]
            }
        },

        jasmine_node: {
            options: {
                specs: './spec',
                compile: {
                    debug: true,
                    beautify: true
                }
            },
            mode_string: {
                options: {
                    compile: {
                        mode: 'string'
                    }
                }
            },
            mode_array: {
                options: {
                    compile: {
                        mode: 'array'
                    }
                }
            },
            mode_function: {
                options: {
                    compile: {
                        mode: 'function'
                    }
                }
            }
        },
        jshint: {
            all: [
                // 'Gruntfile.js',
                '<%= meta.specs %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.registerMultiTask('jasmine_node', 'Run jasmine-node', function () {

        var options = this.options(),
            done = this.async();

        grunt.util.spawn({
            cmd: './node_modules/.bin/jasmine-node',
            args: [options.specs],
            opts: {
                env: grunt.util._.extend(
                    {}, process.env, { FEST_COMPILE: JSON.stringify(options.compile) }
                )
            }
        }, function (error, result) {
            if (error) {
                grunt.log.error(error);
                done(false);
            } else {
                grunt.log.write(result.toString());
                done();
            }
        });

    });

    grunt.registerMultiTask('fest_build', 'Run fest-build', function () {

        var options = this.data,
            done = this.async();

        grunt.util.spawn({
            cmd: './bin/fest-build',
            args: options.args
        }, function (error, result) {
            if (error) {
                grunt.log.error(error);
                done(false);
            } else {
                grunt.log.write(result.toString());
                done();
            }
        });

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['clean', 'jshint', 'fest_build', 'jasmine_node']);

    grunt.registerTask('default', ['test']);

};