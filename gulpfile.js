/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;

const minify = () => {
  return src('./cache/**/*js').pipe(uglify()).pipe(dest('dist'));
};

exports.minify = minify;
