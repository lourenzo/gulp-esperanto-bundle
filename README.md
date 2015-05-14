# gulp-esperanto-bundle [![Build Status](https://travis-ci.org/lourenzo/gulp-esperanto-bundle.svg?branch=master)](https://travis-ci.org/lourenzo/gulp-esperanto-bundle)

Builds modules in a simple format, similar to oldtimer [es6-module-transpiler](http://esnext.github.io/es6-module-transpiler/)'s bundle, which is not available in the new [esperanto](http://esperantojs.org/).

The format consists on IIFE units handling import/export.
The stack uses esperanto to build a AMD intermediate, a dependency tree builder and later amdClean (we may specialize it to reduce the module name mess).


## Install

```
$ npm install --save-dev gulp-esperanto-bundle
```


## Usage

```js
var gulp = require('gulp');
var esperantoBundle = require('gulp-esperanto-bundle');

gulp.task('default', function () {
	return gulp.src('src/**/*.js')
		.pipe(esperantoBundle())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Lourenzo Ferreira](http://lourenzo.blog.br)
