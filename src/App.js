import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import Routes from "./routes"
// import { Overlay } from './utils';


function App() {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
