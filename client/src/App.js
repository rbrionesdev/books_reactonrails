import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Books from "./components/Books"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        {/* <Route exact path="/new" component={BookNew} /> */}
        <Route component={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
