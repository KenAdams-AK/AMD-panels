# Panel Output Applicaton

The application displays a list of panels that have been retrieved by an API request.

## Main features

- the panels contain a set of information about a certain element;
- user is able to check full information about the certain panel
- there is a functionality to add/remove to/from favorites
- `favorites` button redirects to the separate page with only favorites panels
- favorites panels are saved to LocalStorage

## API Data Source

The JSON file `panels.json` within the API in the app's root folder is a mock DB. The `json-server` library is used to mock a server, to launch the server use the command `$ npm run serve-json`

## Run the App

To install all necessary dependencies use the command `$ npm install`. To launch the application in the browser use the command `$ npm start`.
