# Movie App

## Overview
The **Movie App** is a React Native application that interacts with the FreeTestAPI Movies API. It allows users to search, view, and explore detailed information about movies with a user-friendly interface.

## Features
- **Home Screen**: Displays a list of movies retrieved from the API.
- **Search Functionality**: Filter movies by title using the search bar.
- **Movie Details**: View detailed information about a selected movie, including its title, year, director, genre, rating, and description.

## API Endpoints
The app interacts with the following API endpoints:
- **Fetch all movies**: `GET /api/movies`
- **Fetch movie details**: `GET /api/movies/{id}`

## Tech Stack
- **Frontend**: React, Next.js, Tailwind CSS
- **API Integration**: FreeTestAPI Movies API

## Folder Structure
```
project-root/
├── app/
│   ├── api/
│   │   ├── movies/
│   │   │   ├── route.js
│   │   │   └── [id]/route.js
│   ├── movie/[id]/
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── movie-detail.js
│   ├── movie-list.js
│   ├── search-bar.js
│   └── search-provider.js
├── lib/
│   └── api.js
├── public/
├── styles/
├── package.json
├── README.md
└── ...
```
