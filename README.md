# Music Store 

## Project Setup
This is a React-based Music Store project that uses:
- `json-server` as a local database
- `react-router-dom` for navigation
- `Sass` for styling

### Prerequisites
Make sure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd music-store
## Install dependencies:
```sh
 npm install
```
## Setting Up JSON Server
1. Create a db.json file in the root directory (or use an existing one) with the following structure:
```sh
{
  "songs": [
    {
      "id": 1,
      "title": "Blinding Lights",
      "artist": "The Weeknd"
    }
  ]
}
```

2. Install json-server globally if not installed:
```sh
npm install -g json-server
```
3.Start the JSON server:
```sh
json-server --watch db.json --port 5000
```
This will serve the database at http://localhost:5000/songs

## Running the React App
1. Start the development server:
```sh
npm start
```
2. Using React Router
Routes are managed using react-router-dom. Ensure it is installed:
```sh
npm install react-router-dom
```
Example usage in App.js:
```sh
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SongDetails from './pages/SongDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs/:id" element={<SongDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
```

Styling with Sass
Ensure sass is installed:
```sh
npm install sass
```
Use .scss files for styling:
```sh
$primary-color: #ff6600;

body {
  background-color: $primary-color;
}
```
Build the Project
To create a production build:
```sh
npm run build
```
Conclusion
Now you have a fully functional React Music Store with:

A local database powered by json-server

Navigation using react-router-dom

Styling with Sass
