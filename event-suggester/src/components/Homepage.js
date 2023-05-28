import { useState, useEffect } from "react"
import axios from "axios"
import Event from "./Event"

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

  return (
    <div>
      homepage here
      <button>sdfjasdfahsdkj</button>
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

export default Homepage