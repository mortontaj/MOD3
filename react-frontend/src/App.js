import ListChildren from "./components/ListChildren";
import AddChild from "./components/AddChild";
import UpdateChild from "./components/UpdateChild";
import DeleteChild from "./components/DeleteChild";
import ViewChild from "./components/ViewChild";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListChildren}></Route>
            <Route path="/children" component={ListChildren}></Route>
            <Route path="/add-child" component={AddChild}></Route>
            <Route path="/update-child/:id" component={UpdateChild}></Route>
            <Route path="/delete-child/:id" component={DeleteChild}></Route>
            <Route path="/view-child/:id" component={ViewChild}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
