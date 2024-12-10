import { useState, useEffect } from 'react'
import './App.css'


// import our components
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'


function App() {
  //Constant with API Key
  const apiKey = 'f2640249'

  // State to hold movie data 
  const [movie, setMovie] = useState(null);
  
  //function to get movies
  const getMovie = async(searchTerm) => {
    try {
      ///Make fetch requrest and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    //Parse Json response int a JavaScript Object
    const data = await response.json();
    //Set the Movie state to the recieved data
    setMovie(data)
      
    } catch (error) {
      console.log(error)
    }
    
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Guardians of the Galaxy Vol. 2");
  }, [])

  return (
    <div className="App">
     <Form movieSearch={getMovie}></Form>
     <MovieDisplay movie={movie}></MovieDisplay>
    </div>
  )
}

export default App
