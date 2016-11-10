module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'dist/index.html': 'src/index.html'     // 'destination': 'source' 
      }
    }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',//文件路劲
          src: ['style.css'],//要压缩的css
          dest: 'dist',//压缩以后css路劲
          ext: '.min.css'//
        }]
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['htmlmin','cssmin']);

};