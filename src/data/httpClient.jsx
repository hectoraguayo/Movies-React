const API = "https://api.themoviedb.org/3"
export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY2MzMyM2E2MjI5MTE4YmM4OTk1Y2I4MGIwNzA3MyIsInN1YiI6IjY1YTA0ZTc2NWIwNzE0MDEyY2ZkY2YzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bKZImUrc02cIwiSjKgRhZ9WKeM6_OSY8xK3v9338zis',
            "Content-Type": "application/json;charset=utf-8"
        },
    }).then((result) => result.json());
}