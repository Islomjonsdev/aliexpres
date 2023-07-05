import './App.css';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import Routes from "./routes"

function App() {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <Routes />
    </div>
  );
}

export default App;
