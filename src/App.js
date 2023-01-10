import AppRouter from "./components/AppRouter";
import Navbar from './components/navbar/Navbar'
import './styles/nullingstyle.scss'
import './styles/fonts.scss'
import {
  useLocation
} from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar
        pathname={location.pathname} />
      <AppRouter />
    </>
  );
}

export default App;
