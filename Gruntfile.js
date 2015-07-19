module.exports = function(grunt) {

    // load tasks
    [
        'grunt-contrib-watch',
        'grunt-contrib-less',
        'grunt-express',
        'grunt-open'

    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    // setup init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            css: {
                options: {
                    paths: ["less"]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: ['*.less'],
                        dest: 'css/',
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
                    bases: [__dirname]
                }
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
        'express-keepalive'
    ]);

};