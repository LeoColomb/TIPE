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
      },
      glos: {
        src: 'dist/TIPE.aux',
        options: {
          engine: 'makeglossaries',
          interaction: false
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
        }
      }
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['latex', 'latex:pdf']
      },
      bibtex: {
        files: '**/*.bib',
        tasks: ['latex:bib', 'latex:pdf']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['dist/TIPE.pdf'],
      },
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
