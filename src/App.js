import "./App.css";
import Home from "./pages/Home";
// import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import ListBeers from "./pages/ListBeers";
// import SingleBeer from './pages/SingleBeer';
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import SingleBeer from "./pages/SingleBeer";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StoreProvider } from "./context";

function App() {
  return (
    // <StoreProvider>
      <div className='App'>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<ListBeers />} />
          <Route path='/beers/:id' element={<SingleBeer />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer />} />
          {/* <Route path="/search?q={query}" element={<SingleBeer/>}/> */}
        </Routes>
      </div>
    // </StoreProvider>
  );
}

export default App;
