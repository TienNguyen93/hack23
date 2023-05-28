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
    },
    button: {
      backgroundColor: 'aliceblue',
      borderRadius: '15px',
      padding: '10px',
      cursor: 'pointer'
    }
  }

  // helper function
  const handleClick = (borough) => {
    let filter = []
    filter = events.filter(event => event.borough === borough)
    setEvents(filter)
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
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        Here you can find any events within the five boroughs of NYC!
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '1rem',
          }}>
          <button style={style.button} onClick={handleClick}> Brooklyn </button>
          <button style={style.button} onClick="manhattan()"> Manhattan </button>
          <button style={style.button} onClick="queens()"> Queens </button>
          <button style={style.button} onClick="bronx()"> Bronx </button>
          <button style={style.button} onClick="sisland()"> Staten Island </button>
        </div>
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
}

/*shift option f to reformat */


export default Homepage