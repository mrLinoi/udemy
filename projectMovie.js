const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};



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

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Намана');
} else if (personalMovieDB.count >= 30) {
    console.log('Очень много');
} else {
    console.log('Ошибка');
}


console.log(personalMovieDB);