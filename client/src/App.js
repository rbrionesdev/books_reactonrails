import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Books from "./components/Books"
import { Switch, Route } from "react-router-dom";
import BookForm from "./components/BookForm";
import BookFormEdit from "./components/BookFormEdit";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/new" component={BookForm} />
        <Route exact path="/books/:id/edit" component={BookFormEdit} />

        <Route component={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
