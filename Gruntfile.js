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
                    '--out=spec/tmp/build/initial'
                ]
            },
            translated: {
                args: [
                    '--dir=spec/templates',
                    '--exclude=*error*',
                    '--compile.beautify=true',
                    '--out=spec/tmp/build/translated',
                    '--translate=spec/templates/en_US.po'
                ]
            }
        },

        fest_compile: {
            initial: {
                args: [
                    'spec/templates',
                    'spec/tmp/compile/initial',
                    [
                        '--compile.beautify=true'
                    ]
                ]
            },
            translated: {
                args: [
                    'spec/templates',
                    'spec/tmp/compile/translated',
                    [
                        '--compile.beautify=true',
                        '--translate=spec/templates/en_US.po'
                    ]
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
        var po = require('./lib/po');

        var input_files = path.resolve(this.data.args[0]);
        var output_files = path.resolve(this.data.args[1]);
        var args = this.data.args[2];
        var done = this.async();

        var files = fs.readdirSync(input_files);
        var is_ok = true;

        // we need to use this 'forEachLimit' on Mac OS X because of 'spawn EMFILE' error
        grunt.util.async.forEachLimit(files, 31, function(file, cb) {
            if (file.indexOf('.xml', file.length - 4) === -1) {
                // process only files with '.xml' extension in input_files directory
                return cb();
            }

            var compile_args = [];
            var lang = '';
            for (var i in args) {
                compile_args.push(args[i]);
                if (args[i].indexOf('--translate=') === 0) {
                    var pof = po.load(args[i].slice(12));
                    lang = pof.headers['Language'];
                }
            }

            if (file.indexOf('error') === -1) {
                var compiled_filename = file.slice(0, -4) + (lang ? '.' + lang : '') + '.js';
                var compiled_file = path.resolve(output_files, compiled_filename);
                compile_args.push('--out=' + compiled_file);
            }
            var template_file = path.resolve(input_files, file);
            compile_args.push(template_file);

            grunt.util.spawn({
                cmd: './bin/fest-compile',
                args: compile_args
            }, function (error, result) {
                if (file.indexOf('error') !== -1) {
                    if (!error && !result.stderr) {
                        grunt.log.error(template_file, error, result);
                        is_ok = false;
                    }
                } else {
                    if (error) {
                        grunt.log.error(error);
                        is_ok = false;
                    }
                }
                cb();
            });
        }, function() {
            done(is_ok);
        });

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['clean', 'jshint', 'fest_build', 'fest_compile', 'jasmine_node']);

    grunt.registerTask('default', ['test']);

};
