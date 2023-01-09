import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Review from './Components/Review';
import Products from './Components/Products';
import Description from './Components/Description';
import Uses from './Components/Uses'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Review></Review>
       <Products></Products>
       <Description></Description>
       <Uses></Uses>
       <Footer></Footer>
    </div>
  );
}

export default App;
