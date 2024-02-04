const { src, dest, watch, series } = require("gulp");
const options = require("./package.json").options;
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const fileinclude = require("gulp-file-include");

const livepreview = (done) => {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
    },
    port: 8080,
    https: false,
    notify: false,
    open: false,
  });
  done();
};

const previewReload = (done) => {
  browserSync.reload();
  done();
};

const devHTML = () => {
  return src(options.paths.src.base + "/views/*.html")
    .pipe(fileinclude({ prefix: "@" }))
    .pipe(dest(options.paths.dist.base));
};

const devStyles = () => {
  return src(options.paths.src.css + "/**/*")
    .pipe(sass())
    .pipe(concat({ path: "style.css" }))
    .pipe(cleanCSS())
    .pipe(dest(options.paths.dist.css));
};

const devScripts = () => {
  return src(options.paths.src.js + "/**/*")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(dest(options.paths.dist.js));
};

const devImages = (done) => {
  src(options.paths.src.img + "/**/*").pipe(dest(options.paths.dist.img));
  done();
};

const watchDev = () => {
  watch(options.paths.src.css + "/**/*", series(devStyles, previewReload));
  watch(
    options.paths.src.base + "/views/**/*.html",
    series(devHTML, previewReload)
  );
  watch(options.paths.src.js + "/**/*", series(devScripts, previewReload));
  watch(options.paths.src.img + "/**/*", series(devImages, previewReload));
};

exports.prod = series(devHTML, devStyles, devScripts, devImages);

exports.default = series(
  devHTML,
  devStyles,
  devScripts,
  devImages,
  livepreview,
  watchDev
);
