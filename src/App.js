import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import DateForm from './components/DateForm';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route component={Home} path="/" exact element={<Home />} />
          <Route component={DateForm} path="/previous" exact element={<DateForm />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
