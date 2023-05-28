
import { AiOutlineSearch } from 'react-icons/ai';
import "./HomepageLooks.css";

const Homepage = () => {
  const brooklyn = () => {
    window.close()
    const url = 'https://www.google.com'
    window.open(url)
  }

  return (

    <div>
      Here you can find any events within the five boroughs of NYC!
      <button onClick={brooklyn}> Brooklyn </button>
      <button onClick="manhattan()"> Manhattan </button>
      <button onClick="queens()"> Queens </button>
      <button onClick="bronx()"> Bronx </button>
      <button onClick="sisland()"> Staten Island </button>

      <div className="home">
        <div className="title">

          <h1>LinkCity</h1>
          <AiOutlineSearch />
          <input
            placeholder="Enter your search..."
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage