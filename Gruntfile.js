module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            main: {
                options: {
                    join: true,
                    separator: "\n###\n---------------------###\n"
                },
                files: {
                    'ns.js': ['ns.coffee']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> | ' +
                        '(c) 2011 - <%= grunt.template.today("yyyy") %>, ' +
                        'By: <%= pkg.author %> | <%= pkg.license.type %> */\n'
            },
            main: {
                files: {
                    'ns.min.js': ['ns.js']
                }
            }
        },

        jasmine : {
            src : 'ns.js',
            options : {
                specs : 'tests/*.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    '*.coffee',
                    'tests/*.js'       
                ],
                tasks: ['coffee','uglify', 'jasmine']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['coffee', 'uglify', 'jasmine']);
    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('dev', ['coffee', 'uglify', 'jasmine','watch']);
};