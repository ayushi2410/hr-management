import {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Attendance from './components/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import MonthlyReport from './components/MonthlyReport';
import M from 'materialize-css';
function App() {
  const [emp, setEmp] = useState([
  {
    name:'Candy',
    role:'SDE-I',
    img: 'https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/usr/RetocQT/sarah-fielding.jpg'

  },
  {
    name: 'sarah',
    role:'SDE-II',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'
  },]);
  
  return (
    <div className="App">
       <div id="header">
        <Navbar/>
       </div>
      <div className="side_menu">
      <PermanentDrawerLeft/>
      </div>
     </div>
  
  );
}

export default App;
