'use strict';

let personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Cколько фильмов вы посмотрели?","");
     
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Cколько фильмов вы посмотрели?","");
        }
     },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номер ${i} `);

            if ( genre === '' || genre === null) {
                console.log("Неt данных");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

           
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
    
            let a  = prompt("Один из последних просмотренных фильмов?",""),
                b = prompt("На сколько оцените его?","");
        
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a]= b;
                console.log("done");
            } else  {
                console.log("error");
                i--;
            }
           
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        }  else if (personalMovieDB.count >= 10 && personalMovieDB.count <30)  {
            alert("Вы классический зритель");
        }  else if (personalMovieDB.count >= 30 ) {
            alert("Вы киноман");
        }
            else { 
            alert("Произошла ошибка");
        
        }
    },
    showMyDb: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("error");
        }
        
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};


