
import CmsAddcar from './Components/page/Cms-addCar/Cms-addCar.jsx';
import SigninCms from './Components/page/Cms-signin/Cms-sign-in.jsx';
import CmsEditcar from './Components/page/Cms-editCar/Cms-editCar.jsx';
// import SIgnUpCms from './Components/register/register.js';
import Dashboard from './Components/page/Dashboard.js';
import Listcar from './Components/page/Listcar.js';
import Sidebar from './Components/Sidebar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SigninCms}/>
          <Route path="/sidebar" exact component={Sidebar}/>
          {/* <Route path="/daftar" exact component={SIgnUpCms}/>  */}
          <Route path="/add" exact component={CmsAddcar}/> 
          <Route path="/edit" exact component={CmsEditcar}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
