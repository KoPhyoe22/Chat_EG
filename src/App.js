import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import "./style.scss";

import{ // ပတ်လမ်းတွေကို စနစ်တကျထားဖို့
  BrowserRouter, // ပထမ main 
  Routes, // ပတ်လမ်းကြေညာ
  Route, // ခေါ်ချင်တဲ့ဖိုင် 
  Navigate
  //ဒါမဲ့  သူ့ပုံစံကိုက အစဉ်လိုက်တည်ဆောက်ရတယ်.
}from "react-router-dom"; // npm add react-router-dom
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children; // home page ပြန်ခေါ်တာပါ.
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
          /> {/* <Home/> က မှ ဖိုင်အမည်ခေါ်တာ ရှေ့က လမ်းကြောင်းအမည်ပေးတာ မတူအောင်လို့ */}
          <Route path="login" element={<Login/>}/> {/* Register.jsx က navigate သုံးတဲ့အခါပေါ်အောင်ပါ.. */}
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
