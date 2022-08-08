"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

let simpleOfFilm = prompt("Один из просмотренных фильмов?", ""),
    estimationOfFilm = prompt("На сколько оцените его?", "");

personalMovieDB.movies[simpleOfFilm] = estimationOfFilm;

console.log(personalMovieDB);