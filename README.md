
# Hi, I'm Mohd Afjal! 👋


## Screenshots

![App Screenshot](https://res.cloudinary.com/backendpro2nd/image/upload/v1713065993/wasdk02faastimllqlu8.png)


# IMDBFlix Entertainment Database
Unleash Your Inner Cinephile with This Netflix-Inspired Movie Database

This React.js application empowers you to explore a vast collection of Movies, TV Shows, and Web Series, meticulously sourced from the TMDB API. Dive deep into captivating content across all genres, from action-packed thrillers to laugh-out-loud comedies!


## API Reference

#### Get all original items

```http
  GET https://image.tmdb.org/t/p/original/movie/popular?api_key=${key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Details of a Movie or a TV Show

```http
  GET /movie/{movie_id}
  GET /tv/{series_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get Details of a Cast and the crew
```http
  GET /movie/{movie_id}/credits
  GET /tv/{series_id}//credits
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Authors

- [@mohdafjal2004](https://github.com/mohdafjal2004)


## Demo Link
https://imdbflix.vercel.app/



## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    ## Color Referenc

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Black | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| 
| Red | ![#00b48a](https://via.placeholder.com/10/db202c?text=+) #db202c |



## Features

- Debouncing while searching for     optimisation
- Responsive Design
- Details about all the cast and crew
- Details about the Movies and TV Shows
- Standalone Progressive Web App 

