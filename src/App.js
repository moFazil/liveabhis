import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Home from './Components/Sidebar/Home/Home';
import InstituteTable from './Components/Sidebar/Institutes/InstituteTable';
import AdminsTable from './Components/Sidebar/Admins/AdminsTable';
import ReportsTable from './Components/Sidebar/Reports/ReportsTable';
import ELibraryTable from './Components/Sidebar/E-Library/ELibraryTable';
import Footer from './Components/Footer/Footer';
import MyprofileForm from './Components/Header/MyprofileForm';
import SupportTable from './Components/Sidebar/Support/SupportTable';
import AdminForm from './Components/Sidebar/Admins/AdminForm';
import ELibraryForm from './Components/Sidebar/E-Library/ELibraryForm';
import InstituteForm from './Components/Sidebar/Institutes/InstituteForm';


function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Header/>   
    
    <Routes>
    <Route path='/form'                element={<MyprofileForm/>}/>
      <Route path='/'                  element={<Home/>}/>
      <Route path='/institute'         element={<InstituteTable/>}/>
      <Route path='/institute/form'    element={<InstituteForm/>}/>
      <Route path='/admins'            element={<AdminsTable/>}/>
      <Route path='/admins/form'       element={<AdminForm/>}/>
      <Route path='/reports'           element={<ReportsTable/>}/>
      <Route path='/elibrary'          element={<ELibraryTable/>}/>
      <Route path='/elibrary/form'     element={<ELibraryForm/>}/>
      <Route path='/support'           element={<SupportTable/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
