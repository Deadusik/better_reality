import AppRouter from "./components/AppRouter";
import Navbar from './components/navbar/Navbar'
import './styles/nullingstyle.scss'
import './styles/fonts.scss'

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
