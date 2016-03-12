var gulp = require('gulp'),
	fileInclude = require('gulp-file-include'),  //@<pattern>@include('<resourceName.res>') - includes file content
	includeSources = require('gulp-include-source'),  //<!-- include:js(<fileName>.js) --> - includes file path
	download = require("gulp-download"),  //download framework src from cloud
	connect = require('gulp-connect'),
	gp_concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	postcss      = require('gulp-postcss'),
  	sourcemaps   = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer');

var src = {
	code: 'src/',
	framework_spa: 'spa-framework.html.res',
	components: 'index.html'
};
var build = 'build/';
var integration = '../integration/';  //your path to local integration folder

gulp.task('copy-source', function() {
	return gulp.src(src.code + '**/*').pipe(gulp.dest(build));
});
gulp.task('resource-framework', ['copy-source'], function() {  //compile spa landing page and save to half-done folder
	return gulp.src(src.code + 'spa.html')
			.pipe(rename(src.framework_spa))
			.pipe(fileInclude({
				prefix: '@framework@',
				context: { mode: 'dev' }
			}))
			.pipe(includeSources())
			.pipe(gulp.dest(build));
});
gulp.task('resource-components', ['resource-framework'], function() {  //compile spa landing page and save to half-done folder
	return gulp.src(build + src.framework_spa)
		.pipe(rename(src.components))
		.pipe(fileInclude({
			prefix: '@components@',
			context: { mode: 'dev' }
		}))
		.pipe(includeSources())
		.pipe(gulp.dest(build));
});
gulp.task('sass', function() {
	return gulp.src(src.code+'common/stylesheets/**/*.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(rename('master.css'))
		.pipe(gulp.dest(build+'common/css'));
});

gulp.task('http-server', function() {
  connect.server({
    root: [build],
    port: 7079,
    livereload: true
  });
});

gulp.task('dev', ['resource-components', 'http-server','sass'], function() {
	gulp.watch([src.code + '**/*'], ['resource-components']);
	gulp.watch([src.code+'common/stylesheets/**/*.scss',src.code+'vendor/bootstrap/scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['resource-framework']);
gulp.task('build', ['resource-framework']);
gulp.task('integration', ['build'], function() {
	return gulp.src(build + '**/*').pipe(gulp.dest(integration));
});
