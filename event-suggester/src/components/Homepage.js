import { useState, useEffect } from "react"
import axios from "axios"
import Event from "./Event"
import { AiOutlineSearch } from 'react-icons/ai';
import "./HomepageLooks.css";

const Homepage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get("/db/data.json")
      .then((res) => setEvents(res.data))
      .catch((error) => console.log(error))
  }, [])

  const style = {
    list: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      margin: '3rem'
    }
  }

  // helper function
  const brooklyn = () => {
    window.close()
    const url = 'https://www.google.com'
    window.open(url)
  }

  return (
    <div className="home">
      <div className="title">
        <h1>LinkCity</h1>
        <AiOutlineSearch />
        <input
          placeholder="Enter your search..."
        />
      </div>
      <div>
        Here you can find any events within the five boroughs of NYC!
        <button onClick={brooklyn}> Brooklyn </button>
        <button onClick="manhattan()"> Manhattan </button>
        <button onClick="queens()"> Queens </button>
        <button onClick="bronx()"> Bronx </button>
        <button onClick="sisland()"> Staten Island </button>
      </div>

      <div style={style.list}>
        {events.map((e) => (
          <div key={e.event_id}>
            <Event
              title={e.title}
              date={e.date}
              location={e.location}
              description={e.description}
              borough={e.borough}
              organizer={e.organizer}
            />
          </div>
        ))}
      </div>
    </div>
  )


  // <div className="home">
  {/* <div className="title">
      <h1>LinkCity</h1>
      <AiOutlineSearch />
      <input
        placeholder="Enter your search..."
      />
    </div> */}
  {/* Here you can find any events within the five boroughs of NYC!
    <button onClick={brooklyn}> Brooklyn </button>
    <button onClick="manhattan()"> Manhattan </button>
    <button onClick="queens()"> Queens </button>
    <button onClick="bronx()"> Bronx </button>
    <button onClick="sisland()"> Staten Island </button> */}

  // <div style={style.list}>
  //   {events.map((e) => (
  //     <div key={e.event_id}>
  //       <Event
  //         title={e.title}
  //         date={e.date}
  //         location={e.location}
  //         description={e.description}
  //         borough={e.borough}
  //         organizer={e.organizer}
  //       />
  //     </div>
  //   ))}
  // </div>

}

/*shift option f to reformat */


export default Homepage