import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
