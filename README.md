# Movie App

## Overview
The **Movie App** is a React Native application that interacts with the FreeTestAPI Movies API. It allows users to search, view, and explore detailed information about movies with a user-friendly interface.

## Features
- **Home Screen**: Displays a list of movies retrieved from the API.
- **Search Functionality**: Filter movies by title using the search bar.
- **Movie Details**: View detailed information about a selected movie, including its title, year, director, genre, rating, and description.
- **Smooth User Experience**:
  - Elegant preloader animations for data loading.
  - Curved corners for the search bar.
- **Error Handling**: Informative messages when data fetching fails.

## Installation
To run the project locally, follow these steps:

### Prerequisites
- Node.js (>= 16.0.0)
- npm (>= 7.0.0)
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. Use the search bar to find movies by title.
3. Click on any movie to view its details.

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
