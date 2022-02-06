import React, { useEffect, useState } from 'react';

const api = 'https://dog.ceo/api/breeds/image/random'

function App() {
    const [ image, setImage ] = useState(null)

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => setImage(data.message))
    }, [])

if (!image) {
    return <h2>Loading...</h2>
}

  return (
  <div>
     <img alt="A Random Dog" src={image}></img>
  </div>
  )
}

export default App;
// create your App component here
