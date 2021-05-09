export interface IMovie {
  id: string;
  posterPath: string;
  title: string;
  voteAverage: string;
  voteCount: string;
  genres: string[];
}

export interface IWeightedMovie extends IMovie {
  weight: number;
}

export interface IMovieSort extends IMovie {
  popularity: string;
  budget: string;
  runtime: string;
  releaseDate: string;
}

export interface IPaging {
  page: number;
}

export interface IFilterConditons {
  genres?: string[];
}

export interface ICast {
  profilePath: string;
  name: string;
  character: string;
  order: number;
}

export interface IMovieDetail extends IMovie, IMovieSort {
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  runtime: string;
  cast: ICast[];
  director: {
    id: number;
    name: string;
    profilePath: string;
  };
}
