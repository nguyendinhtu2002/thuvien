import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import HomeScreen from "./components/View/HomeScreen";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import View from "./components/Detail/View";
import Edit from "./components/Detail/Edit";
import PrivateRoutes from "./PrivateRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<HomeScreen />} />
          {/* <Route element={<PrivateRoutes />}> */}
            <Route path='/View' element={<View />} />
            <Route path='/Edit' element={<Edit />} />
            <Route path='/Register' element={<Register />} />

          {/* </Route> */}

        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
