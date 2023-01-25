import AppRouter from "./components/AppRouter"
import Navbar from './components/navbar/Navbar'
import './styles/nullingstyle.scss'
import './styles/fonts.scss'
import {
  useLocation
} from 'react-router-dom'
import Footer from "./components/footer/Footer"
import styles from './styles/app.module.scss'

function App() {
  const location = useLocation();

  return (
    <div className={styles.App}>
      <Navbar
        pathname={location.pathname} />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
