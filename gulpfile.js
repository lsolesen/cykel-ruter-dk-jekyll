// modified from generator-jekyllized 1.0.0-rc.6
"use strict";
var gulp = require("gulp");
var newer = require("gulp-newer");
var responsive = require("gulp-responsive");
var size = require("gulp-size");
const imagemin = require('gulp-imagemin');

var paths = {};

// Folder naming conventions.
paths.assetsFolderName = "assets";
paths.imageFolderName = "images";
paths.siteFolderName = "";
paths.sourceFolderName = "/home/ec2-user/environment/cykelferie";

// Directory locations.
paths.sourceDir = paths.sourceFolderName + "/";
paths.assetsDir = paths.assetsFolderName + "/";

// Paths
paths.imageFiles = paths.sourceDir + paths.assetsDir + paths.imageFolderName;
paths.imagePattern =
  "/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)";
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;
  
// Edit these paths
paths.imageFilesActivitiesOriginals = paths.sourceDir + "/src/images/routes/originals";
paths.imageFilesActivitiesDestination = paths.imageFiles + "/routes/";

// 'gulp images:optimize' -- optimize images
gulp.task("images:optimize", () => {
  return gulp
    .src(paths.imageFiles)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng(),
          imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest(paths.imageFiles));
});


// 'gulp images:feature' -- resize images
gulp.task("images:routes", () => {

  return gulp
    .src([
      paths.imageFilesActivitiesOriginals + paths.imagePattern,
      "!" + paths.imageFilesActivitiesOriginals + "/**/*.{gif,svg}"
    ])
    .pipe(
      responsive(
        {
          // resize all images
          "*.*": [
            {
              width: 320,
              rename: { suffix: "-320" }
            },
            {
              width: 768,
              rename: { suffix: "-768" }
            },
            {
              width: 1920,
              rename: { suffix: "" }
            }
          ]
        },
        {
          // global configuration for all images
          errorOnEnlargement: false,
          withMetadata: false,
          errorOnUnusedConfig: false
        }
      )
    )
    .pipe(gulp.dest(paths.imageFilesActivitiesDestination))
});

gulp.task(
  "images",
  gulp.series(
    gulp.series(
      "images:routes",
      "images:optimize"
    )
  )
);
