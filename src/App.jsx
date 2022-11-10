import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Sesion/Login';
import Monitor from './components/Monitor/Monitor';
import {AuthProvider} from './context/Auth';
import RouteProtected from './layouts/RouteProtected';
function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Monitor/>}></Route>
            </Routes>
        </AuthProvider>
   </BrowserRouter>
  );
}

export default App
