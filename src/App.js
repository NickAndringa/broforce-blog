import './App.sass';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content p-5 mx-auto my-10 max-w-4xl">
        <Home/>
      </div>
    </div>
  );
}

export default App;
