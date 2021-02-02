'use strict';

let numberOfFilms;

function start () {
   numberOfFilms = +prompt("Cколько фильмов вы посмотрели?","");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Cколько фильмов вы посмотрели?","");
   }

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номер ${i} `);
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourGenres();

function rememberMyFilms () {
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
}

rememberMyFilms();

function detectPersonalLevel () {
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
}

detectPersonalLevel();

function showMyDb () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("error");
    }
    
}

showMyDb();

