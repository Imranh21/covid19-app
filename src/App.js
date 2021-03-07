import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryList from "./components/countries/CountryList";
import CountryDetails from "./components/details/CountryDetails";
import Global from "./components/global/Global";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Global />
            <CountryList />
          </Route>
          <Route path="/country/:name">
            <CountryDetails />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
