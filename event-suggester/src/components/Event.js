const Event = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <h3>Date: {props.date}</h3>
        <h3>Location: {props.location}</h3>
        <h3>{props.description}</h3>
        <h3>{props.borough}</h3>
        <h3>{props.organizer}</h3>
      </div>
      <div>
        image here
      </div>
    </div>
  )
}

export default Event