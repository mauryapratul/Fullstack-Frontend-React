import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path = "/" element = {<Home />}/>
      <Route  path = "/adduser" element = {<AddUser />} />
      <Route path= "/edituser/:id" element={<EditUser />} />
      <Route path = "/viewuser/:id" element = {<ViewUser />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
   
    </>
  );
}

export default App;
