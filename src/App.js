import AppRouter from "./components/AppRouter";
import Navbar from './components/navbar/Navbar'
import './styles/nullingstyle.scss'
import './styles/fonts.scss'
import {
  useLocation
} from 'react-router-dom'
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar
        pathname={location.pathname} />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
