import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Home from './Components/Sidebar/Home/Home';
import Institutes from './Components/Sidebar/Institutes/Institutes';
import Admins from './Components/Sidebar/Admins/Admins';
import Reports from './Components/Sidebar/Reports/Reports';
import ELibrary from './Components/Sidebar/E-Library/E-Library';
import Support from './Components/Sidebar/Support/Support';
import InstituteTable from './Components/Sidebar/Institutes/InstituteTable';
import AdminsTable from './Components/Sidebar/Admins/AdminsTable';
import ReportsTable from './Components/Sidebar/Reports/ReportsTable';
import ELibraryTable from './Components/Sidebar/E-Library/ELibraryTable';
import Footer from './Components/Footer/Footer';
import MyprofileForm from './Components/Header/MyprofileForm';



function App() {
  return (
    <div className="App">
    <Sidebar/>
    <Header/>
    <Routes>
      <Route path='/form' element={<MyprofileForm/>}/>
    </Routes>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/institute' element={<Institutes/>}>
        <Route path='/institute/add' element={<InstituteTable/>}/>
        </Route>
      <Route path='/admins' element={<Admins/>}/>
        <Route path='/admins/add' element={<AdminsTable/>}/>
      
      <Route path='/reports' element={<Reports/>}/>
        <Route path='/reports/add' element={<ReportsTable/>}/>
      <Route path='/elibrary' element={<ELibrary/>}/>
        <Route path='/elibrary/add' element={<ELibraryTable/>}/>
      <Route path='/support' element={<Support/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
