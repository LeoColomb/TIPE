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
      pdf: {
        src: 'TIPE.tex',
        options: {
          outputDirectory: 'dist/',
          jobname: 'TIPE'
        }
      },
      bib: {
        src: 'dist/TIPE.aux',
        options: {
          engine: 'bibtex',
          interaction: false
        }
      }
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['latex:pdf', 'latex:bib', 'latex:pdf']
      },
      bibtex: {
        files: '**/*.bib',
        tasks: ['latex:bib', 'latex:pdf']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);
};
