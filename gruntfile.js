module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['src/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},

			spec: {
				src: 'spec/*Spec.js',
				dest: 'dist/spec/spec.js'
			},

			bower: {
				src: ['bower_components/monocle/monocle.js', 'bower_components/quo.js'],
				dest: 'dist/bower_components/bower_components.js'
			}
			
		},

		jasmine: {
			pivotal: {
				src: 'src/**/*.js',
				options: {
					specs: 'spec/*Spec.js',
					helpers: 'spec/*Helper.js'
				}
			}
		},

		git_deploy: {
			your_target: {
				options: {
					url: 'https://github.com/elreplicante/grunt-skeleton.git',
					message: '<%= pkg.author %> commits like a ninja',
					branch: 'master'
				},
				src: '.'
			},
		},

		watch: {
			source: {
				files: ['src/*.js', 'spec/*.js'],
				tasks: ['concat', 'jasmine', 'git_deploy'],
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-git-deploy');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'jasmine', 'git_deploy']);

}