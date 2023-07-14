
import { Route,Routes } from "react-router-dom"

import Signadi from "./pages/SignIn"
import 'bootstrap/dist/css/bootstrap.min.css';




import Amtransaction from "./pages/Atransaction"
import Amorder from "./pages/Aorder"
import Asettingm from "./pages/Settingm"
import Ar from "./pages/a"
import Adetails from "./components/Admin/Asettingdetails"




const App = () => {
  return (
    <div>
   

<Routes>
  
  <Route path="/" element={<Signadi/>}/>
 
  <Route path="/amtransaction" element={<Amtransaction/>}/>
  <Route path="/amorder" element={<Amorder/>}/>
  <Route path="/asetting" element={<Asettingm/>}/>
  <Route path="/adetails" element={<Adetails/>}/>
  
  <Route path="/a" element={<Ar/>}/>

  
  

  
  
</Routes>



    </div>
  )
}
export default App