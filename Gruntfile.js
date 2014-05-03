/*
 * Travail d'Initiative Personnelle Encadré
 * https://github.com/LeoColomb/TIPE
 * Copyright (c) 2014 Léo Colombaro
 * Licensed under MIT License
 */
module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    latex: {
      options: {
        haltOnError: 'true'
      },
      pdf_target: {
        options: {
          outputDirectory: 'dist/',
          jobname: 'TIPE'
        },
        src: ['TIPE.tex']
      }
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['latex']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);
};
