const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {

    },
    actors: {

    },
    genres: [],
    privat: false,
};

for (let i = 0; i <2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');
    
    if (a != null && b != null && a.length<50 && a != '' && b != '' ) {
    personalMovieDB.movie[a] = b;
}
else {
    i--;
}

}   

    console.log(personalMovieDB);

// let a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?',''),
//     c = prompt('Один из последних просмотренных фильмов?',''),
//     d = prompt('На сколько оцените его?','');
    
//     personalMovieDB.movie[a] = b;
//     personalMovieDB.movie[c] = d;

//     console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
// let a = prompt('Один из последних просмотренных фильмов?',''),
//     b = prompt('На сколько оцените его?','');
//     personalMovieDB.movie[a] = b;
    
//     while (a.length>50) {
//         a = prompt('Один из последних просмотренных фильмов?','');
        
//     }
//     while (b.length>50) {
//         b = prompt('На сколько оцените его?','');
        

//     }
//     while (a.length==0) {
//         a = prompt('Один из последних просмотренных фильмов?','');
//     }
//     while (b.length==0) {
//         b = prompt('На сколько оцените его?','');
// }
// personalMovieDB.movie[a] = b;
// }   
// if (personalMovieDB.count<10) {
//     alert("Просмотрено довольно мало фильмов");
// }
// else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
//     alert("Вы классический зритель");
// } 
// else if (personalMovieDB.count>=30) {
//     alert("Вы киноман");
// }
// else {
//     console.log("Error");
// }
// console.log(personalMovieDB);



