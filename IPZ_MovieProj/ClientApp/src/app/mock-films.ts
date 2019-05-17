import { Film } from './models/film';
import { GenreFilm, Genre } from './models';

export const FILMS: Film[] = [
        {id: 1, name: 'The Shawshank Redemption',director: 'Frank Darabont', year: 1994, 
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        filmImgPath: 'https://images.gowatchit.com/posters/original/p15987_p_v7_aa.jpg?1473180482', 
        filmTrailerPath:'https://www.youtube.com/embed/BXUEUwwgIyU',
        originCountry:'USA', budget: 25000000, ratingAvg: 9.3, 
        comments:[],
        votes:[],
        genres:[new GenreFilm(1, Genre.Drama)],
        durationInMinutes: 142
        },
        {id: 2, name: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994, 
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
        filmImgPath: 'https://cdn.steemitimages.com/DQmVvesz6vdUEMP8Jh8JALyRmMcHHsE8nYko5iMtFNziMPs/f84b961743b78e47edf22fce1cde3d2c.jpg', 
        filmTrailerPath:'https://www.youtube.com/embed/eYSnxZKTZzU',
        originCountry:'USA', budget: 55000000, ratingAvg: 8.8, 
        comments:[],
        votes:[],
        genres:[new GenreFilm (1, Genre.Drama), new GenreFilm(1, Genre.Romance)],
        durationInMinutes: 142},
        {id: 3, name: '1 + 1 (Intouchables)', director: 'Olivier Nakache, Éric Toledano', year: 2011, 
        description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        filmImgPath: 'https://filmix.co/uploads/posters/big/neprikasaemye-2011_34099_0.jpg', 
        filmTrailerPath:'https://www.youtube.com/embed/qCSW7hqBMTg',
        originCountry:'France', budget:9500000, ratingAvg: 8.5, 
        comments:[],
        votes:[],
        genres:[new GenreFilm(1, Genre.Biography ), new GenreFilm(2, Genre.Comedy), new GenreFilm(3, Genre.Drama)],
        durationInMinutes: 112},
        {id: 4, name: 'Pulp Fiction',director: 'Quentin Tarantino', year: 1994, 
        description: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        filmImgPath: 'https://img0.liveinternet.ru/images/attach/c/5/87/551/87551274_743664_kinopoisk_ruPulpFiction1480737.jpg', 
        filmTrailerPath:'https://www.imdb.com/videoembed/vi2620371481',
        originCountry:'USA', budget: 8000000, ratingAvg: 8.9, 
        comments:[],
        votes:[],
        genres:[new GenreFilm(1, Genre.Crime), new GenreFilm(1, Genre.Drama)],
        durationInMinutes: 154},
        
        
];
