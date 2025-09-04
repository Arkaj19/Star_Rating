import "./styles.css";
import { StarRating } from "./Components/StarRating";

export default function App() {
  return (
    <div className="App">
      <h3>Star Rating</h3>
      <p>Click on stars to see</p>
      <StarRating stars={10} />
    </div>
  );
}
