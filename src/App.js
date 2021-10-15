import Dashboard from "./screens/Dashboard";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
    <div className="App">
        
      <Router>
        <Switch>
          <Route path="/">
           
            <Dashboard />
          </Route>
        </Switch>
 

     
      </Router>

    </div>
  );
}

export default App;
