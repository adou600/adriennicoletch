module.exports = function(grunt) {

    // load tasks
    [
        'grunt-contrib-watch',
        'grunt-contrib-less',
        'grunt-contrib-copy',
        'grunt-express',
        'grunt-open'

    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    // setup init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            build: {
                cwd: 'src',
                src: [ 'index.html', 'css/**', 'font-awesome/**', 'fonts/**', 'img/**', 'js/**', 'mail/**' ],
                dest: 'dist',
                expand: true
            }
        },

        less: {
            css: {
                options: {
                    paths: ["less"]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/less',
                        src: ['*.less'],
                        dest: 'src/css/',
                        ext: '.css'
                    }
                ]
            }
        },
        express: {
            all: {
                options: {
                    port: 10000,
                    hostname: "localhost",
                    bases: [__dirname],
                    livereload: true
                }
            }
        },
        watch: {
            all: {
                files: [
                    'src/index.html',
                    'src/less/*.less',
                    'src/js/*.js',
                    'src/img/*.png'
                ],
                options: {
                    livereload: true
                },
                tasks: ['less']
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    grunt.registerTask('default', [
        'less'
    ]);

    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);

};