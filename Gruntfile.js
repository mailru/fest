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
                    '--compile.beautify=true',
                    '--out=spec/tmp/initial'
                ]
            },
            translated: {
                args: [
                    '--dir=spec/templates',
                    '--exclude=*error*',
                    '--compile.beautify=true',
                    '--out=spec/tmp/translated',
                    '--translate=spec/templates/en_US.po'
                ]
            }
        },

        fest_compile: {
            initial: {
                args: [
                    '--compile.beautify=true',
                    'spec/templates',
                ]
            },
            translated: {
                args: [
                    '--compile.beautify=true',
                    '--translate=spec/templates/en_US.po',
                    'spec/templates'
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
                grunt.log.write(result.stdout);
                done(false);
            } else {
                grunt.log.write(result.stdout);
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

    grunt.registerMultiTask('fest_compile', 'Run fest-compile', function () {

        var fs = require('fs');
        var path = require('path');

        var input_files = path.resolve(this.data.args.pop());
        var args = this.data.args;
        var done = this.async();

        var files = fs.readdirSync(input_files);
        files.filter(function(file) {
            // process only files with '.xml' extension in input_files directory
            return file.indexOf('.xml', file.length - 4) !== -1;
        });

        // we need to use this 'forEachLimit' on Mac OS X because of 'spawn EMFILE' error
        grunt.util.async.forEachLimit(files, 1, function(file) {
            var compile_args = [];
            for (var i in args) {
                compile_args.push(args[i]);
            }
            var template_file = path.resolve(input_files, file);
            compile_args.push(template_file);

            grunt.util.spawn({
                cmd: './bin/fest-compile',
                args: compile_args
            }, function (error, result) {
                if (file.indexOf('error') !== -1) {
                    if (error) {
                        done();
                    } else {
                        grunt.log.error('No error in file "' + template_file + '"')
                        grunt.log.error('')
                        done(false);
                    }
                } else {
                    if (error) {
                        grunt.log.error('Error in file "' + template_file + '"')
                        grunt.log.error(error);
                        grunt.log.error('')
                        done(false);
                    } else {
                        done();
                    }
                }
            });
        });

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['clean', 'jshint', 'fest_build', 'fest_compile', 'jasmine_node']);

    grunt.registerTask('default', ['test']);

};
