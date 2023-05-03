import logo from './logo.svg';
import './App.css';
import {Tabs} from "./Components/Tabs";

const items = [
  {id: 1, label: "Tab 1", content: "Tab 1 content is showing here"},
  {id: 2, label: "Tab 2", content: "Tab 2 content is showing here"},
  {id: 3, label: "Tab 3", content: "Tab 3 content is showing here"},
]

function App() {
  return (
    <div className="App">
      <Tabs items={items}/>
    </div>
  );
}

export default App;
