
import { AiOutlineSearch } from 'react-icons/ai';
import "./HomepageLooks.css";

const Homepage = () => {
  return (

    <div>
      Here you can find any events within the five boroughs of NYC!
      <button onclick="brooklyn()"> Brooklyn </button>
      <button onclick="manhattan()"> Manhattan </button>
      <button onclick="queens()"> Queens </button>
      <button onclick="bronx()"> Bronx </button>
      <button onclick="sisland()"> Staten Island </button>

    <div className="home">
<div className="title">
      
      <h1>LinkCity</h1>
<AiOutlineSearch />
<input 
placeholder ="Enter your search..."
/>
</div>
    </div>
    
  )
  function bronx(){
  }
  function brooklyn(){
    const url = 'https://www.google.com';
    window.open(url);
  }
  function manhattan(){

  }
  function queens(){

  }
  function sisland(){

  }
  
}


export default Homepage