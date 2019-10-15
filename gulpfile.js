var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
const { getQuestions } = require('./app/pages/contentful.js');

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|njk)')
    .pipe(data(async function() {
        const questions = await getQuestions();
        // console.log('question', questions.questions[0,0][1].question)
        // console.log('title', questions.questions[0,0][1].answers[0].fields.title)
        // console.log('answer', questions.questions[0,0][1].answers[0].fields.answer.content[0].content[0].value)
        return questions;
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('dist'))
  });