# gulp-css-url-prefix
Prefix urls with a matching pattern in CSS stylesheets

## Install
```
npm install gulp-css-url-prefix
```

## Usage

```
urlPrefix(prefix, regexMatch)
```
`prefix` being what you want prefixed to the url

`regexMatch` being which url you want to target.

For example you may have `background-image: url('/assets/images/bg.png');'` and you only want to target the urls beginning with `/assets/` and so you would do `urlPrefix('http://example.com', '\/assets')`

```js
var urlPrefix = require('gulp-css-url-prefix');

gulp.task('css-assets', function() {
  return gulp.src('src.css')
    .pipe(urlPrefix('http://example.com', '\/assets'))
    .pipe(gulp.dest('style.css'));
});
```