let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько вы его оцените?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;       
            console.log('done');     
        } else {
            console.log('error');
            i--;   
        }
    }
}

rememberMyFilms();

function detectPesonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Намана');
    } else if (personalMovieDB.count >= 30) {
        console.log('Очень много');
    } else {
        console.log('Ошибка');
    }
}

detectPesonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.geners[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

