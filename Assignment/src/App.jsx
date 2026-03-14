import { useState } from 'react';



function App() {

  const [searchTerm, setSearchTerm] = useState('');



  const handleSearch = (event) => {

    // Update the searchTerm state here 
    setSearchTerm(event.target.value)
  };



  return (

    <div>

      <h1>Search App</h1>

      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      <p>Searching for: {searchTerm}</p>

    </div>

  );

}



function Search(props) {

  return (

    <div>

      <label htmlFor="search">Search: </label>

      <input

        id="search"
        type="text"
        value={props.searchTerm}
        onChange={props.onSearch}
      />
        {/* Add value and onChange here */}



    </div>

  );

}



export default App; 