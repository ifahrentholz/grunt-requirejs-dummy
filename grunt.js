/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'js/modules/**/*.js', 'libs/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        define: true
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: 'js/',
          mainConfigFile: 'js/main.js',
          name: 'main',
          out: 'js/dist/optimized.js',
          optimize: 'uglify2',
          preserveLicenseComments: false,
          generateSourceMaps: true,
          useSourceUrl: true,
          paths: {
            requireLib: 'libs/require'
          },
          include: 'requireLib'
        }
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // Default task.
  grunt.registerTask('default', 'lint requirejs qunit');

};
