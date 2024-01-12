import placeholder from "../img/placeholder.png"

export function getMovieImg(path, width) {
    return path?`https://image.tmdb.org/t/p/w${width}${path}`:placeholder
}

// const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;