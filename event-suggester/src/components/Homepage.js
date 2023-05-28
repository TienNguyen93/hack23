
import { AiOutlineSearch } from 'react-icons/ai';
import "./HomepageLooks.css";

const Homepage = () => {
  return (
    <div className="home">
      <h1>LinkCity</h1>
      <AiOutlineSearch id="icon" />
      <input placeholder="Enter your search..." />
      <div>SearchResults</div>

    </div>

  )
}
/*shift option f to reformat */

export default Homepage