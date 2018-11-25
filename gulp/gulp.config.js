/**
 * Created by rafal on 02.05.16.
 */
module.exports = {
  pattern: ['./gulp/tasks/**/*.js'],
  bowerDefault: [
    'bower.json',
    'package.json'
  ],
  jsLibrary: [
    'src/frontend/bower_components/angular/angular.js',
    'src/frontend/bower_components/angular-route/angular-route.js',
    'src/frontend/bower_components/angular-local-storage/dist/angular-local-storage.js',
    'src/frontend/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'
  ],
  jsScripts: [
    'src/frontend/app.js',
    'src/frontend/modules/common/scripts/subject-list.js',
    'src/frontend/modules/teacher/controller/teacher.js',
    'src/frontend/modules/student/controller/student.js',
    'src/frontend/modules/subject/controller/subject.js',
    'src/frontend/modules/home/controller/home.js',
    'src/frontend/modules/common/navbar/controller/navbar.js',
  ],
  cssLibrary: [
    'src/frontend/bower_components/html5-boilerplate/dist/css/normalize.css',
    'src/frontend/bower_components/html5-boilerplate/dist/css/main.css'
  ],
  fonts: [
    'src/frontend/fonts/*'
  ],
  gulpLoadPlugins: {
    DEBUG: false,
    pattern: ['gulp-*', 'gulp.*', 'del', 'babel-preset-es2015', 'karma*', 'jasmine-core', 'browserify', 'watchify', 'compass*'],
    rename: {'gulp-install': 'install', 'gulp-util': 'gutil'}
  }
};
