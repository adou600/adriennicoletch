module.exports = function(grunt) {

    // load tasks
    [
        'grunt-contrib-watch',
        'grunt-contrib-less'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    // setup init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // compile LESS files in `less/` into CSS files
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
        }
    });

    grunt.registerTask('default', [
        'less'
    ]);

};