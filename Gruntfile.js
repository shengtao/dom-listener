'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		name: 'lifecircle',
		srcPath: 'src',
		assetsPath: 'assets',
		distPath: 'build',
        meta: {
            version: '0.0.1'
        },
        banner: '',

		clean: ['<%= distPath%>/*'],

        concat: {
			options: {
                banner: '<%= banner %>',
                stripBanners: true
			},
		
			index: {
				src: ['src/lib/zepto.js', 'src/lib/dom-listener.js', 'src/ltc.js'],
				dest: '<%= distPath %>/ltc.debug.js'
			}
		},

		uglify: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= distPath %>',
					src: ['*.debug.js'],
					dest: '<%= distPath %>',
					ext: '.js'
				}]
			}
		},

		cssmin: {
			options: {
				report: 'min'
			},

			main: {
				files: [{
					expand: true,
					cwd: '<%= assetsPath %>',
					src: ['<%= name %>.css'],
					dest: '<%= distPath %>',
					ext: '.min.css'
				}]
			},

            identify: {
                src: ['<%= assetsPath %>/identify-lite.css'],
                dest: '<%= distPath %>/identify.min.css'
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	//grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('build', ['concat', 'uglify']);
}