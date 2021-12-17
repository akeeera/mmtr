var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass')(require('sass')), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('sass', function () { // Создаем таск Sass
    return gulp.src('src/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
        .pipe(browserSync.reload({
            stream: true
        })) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function () {
    return gulp.src(['src/js/common.js', 'src/libs/**/*.js'])
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('code', function () {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('src/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['src/js/forms.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));