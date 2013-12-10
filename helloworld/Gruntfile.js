module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        src: 'src/app.js',
        dest: 'dst/app.min.js'
      }
    } 
  });
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask('default', ['uglify']);
};
