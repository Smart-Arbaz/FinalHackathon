// import { Routes } from 'react-router-dom';
// import './App.css';
//import HeaderCarousel from './components/carousel/HeaderCarousel';
 import GetStarted from './components/startpage/GetStarted';
// import { Route }  from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
 import SignUpPage from './components/signuppage/SignUpPage';
 import LoginPage from './components/loginpage/LoginPage';
 import AdminHeader from './components/adminPart/adminHeader/AdminHeader';
 import AdminProductDetail from './components/adminPart/adminHeader/AdminProductDetail';



function App() {
  return (


    <div className="App">
    <Routes> 
      <Route path='/' element={<GetStarted />}/>
      <Route path='/signuppage' element={<SignUpPage />}/>
      <Route path='/loginpage' element={<LoginPage />}/>  
     </Routes>  

     <AdminHeader />
     <AdminProductDetail />
    </div>
  );
}

export default App;
