# Youtube Video Viewer

React application that allows you to watch and search for Youtube videos as well as get detailed information about a selected video.

The project is currently hosted in https://react-video-viewer-c64e8.web.app/

Youtube limits the amount of request a key can make so if you get a 403 error, it is probably because the quota for that key has been exceeded.

# First Screen
![youtubeViewerApp](https://user-images.githubusercontent.com/59084107/215021204-b61d615f-c587-4fd6-81f6-7c8c872a4947.png)


## The parts included in this screen are the following:

### Search input
To write what you want to search for. If you press "enter" it will start the search for videos (just like clicking the button).

### Video
Player with the first video of the search result.

### Title
Below the loaded video the title of the video is shown.

### Button or link to view video details
To the right of the video title there is a button that leads to the video detail screen.

### Related videos
On the right of the video 3 related videos are shown (returned in the search). By clicking on one of them, that video is loaded into the main player.

### Video viewed counter
Keeps track of all the videos played by the user

# Second Screen
![youtubeViewerApp2](https://user-images.githubusercontent.com/59084107/215021216-1d59516e-b41b-420d-9266-e0b030eca4f5.png)

## The parts included in this screen are the following:

### Back button
By pressing this button, you return to the main screen of the application, maintaining
the previously played video, the list of related videos, and the total number of
user views.

### Title
Text with the title of the selected video.

### Main image
A video image is shown.

### Video detail
To the right of the image, the detail information of the selected video should be displayed.

### Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
**Note: this is a one-way operation. Once
