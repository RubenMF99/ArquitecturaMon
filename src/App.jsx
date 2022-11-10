import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Sesion/Login';
import Monitor from './components/Monitor/Monitor';
import {AuthProvider} from './context/Auth';
import Register from './components/Sesion/Register';
function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Monitor/>}></Route>
                <Route path='/register' element={<Register/>}></Route>

            </Routes>
        </AuthProvider>
   </BrowserRouter>
  );
}

export default App
