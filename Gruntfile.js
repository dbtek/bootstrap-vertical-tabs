module.exports = function (grunt) {
  'use strict';

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*!\n' +
              ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
              ' * <%= pkg.homepage %>\n' +
              ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
              ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
              ' * License: <%= pkg.license %>\n' +
              ' */\n',
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true
        },
        dist: {
          src: ['src/{,*/}*.css'],
          dest: 'bootstrap.vertical-tabs.css'
        }
      },
      cssmin: {
        options: {
          banner: '<%= banner %>'
        },
        dist: {
          src: ['src/*.css'],
          dest: 'bootstrap.vertical-tabs.min.css'
        }
      },
      jshint: {
        options: {
          node: true,
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          unused: true,
          eqnull: true,
          boss: true
        },
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },
      watch: {
        gruntfile: {
          files: '<%= jshint.gruntfile.src %>',
          tasks: ['jshint:gruntfile']
        }
      }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task
    grunt.registerTask('build', [
      'jshint',
      'concat',
      'cssmin'
    ]);

    grunt.registerTask('default', ['build']);
  };

