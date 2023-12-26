
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/Header/HeaderComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import MainDomain from './pages/maindomains/MainDomain';


function App() {
  return (
    
    <>
 <HeaderComponent/> 
<BrowserRouter>
<NavbarComponent/>
<Routes>
  <Route path='/' element={<DashboardPage/>}/>
  <Route path='/maindomains' element={<MainDomain/>}/>
</Routes>
</BrowserRouter>


    </>

  );
}

export default App;
