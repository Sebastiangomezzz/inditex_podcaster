# Inditex Podcaster

## Important note on the API use:

One endpoint used in this app development is different from the one given by the examiner, since `https://itunes.apple.com/lookup?id={podcastId}` didn't return the podcast tracks required to complete the task, I've searched and found the one serving my needs and replaced it in my test.

## Requirements

A SPA (Single Page Application) that allows the user to listen to the most 100 popular podcasts in the Apple Podcasts list. The user should be able to search for a podcast and listen to it.
It has three main screens:
### Home
The home screen shows the 100 most popular podcasts in the Apple Podcasts list. The user is able to filter by the title of the podcast and the name of the podcaster. The user can also click on one podcast and access the details list of episodes screen.
### Podcast details
The podcast details screen shows the list of episodes of the selected podcast. The user can click on one episode and access the player screen.
### Podcast player
The player screen shows the selected episode and allows the user to play/pause the episode. It also shows the progress of the episode and some information about it.

## Technologies used

- React
- Context API
- React Query
- React Router
- Styled Components
- Material UI
- Linkify

## Folder structure

- **components**: React components
- **components/common**: React components that are used in more than one place
- **components/podcaster**: React components related to the podcaster
- **hooks**: Custom hooks used to fetch data
- **context**: contains a subfolder, LoadingContext, for controlling the loading state of the header
- **utils**: Utility functions, in this case for formatting table data
- **views**: React components that renders a page

## Available Scripts

In the project directory, you can run:
### IMPORTANT!
- Before running the app, it's important to allow CORS in your browser. Do it by accessing to the following link: `https://cors-anywhere.herokuapp.com/corsdemo`
- Check node and npm versions are, at least:
 node version >= v16.13.0
 npm version >= 8.1.0

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run test`

It will launch the test runner

