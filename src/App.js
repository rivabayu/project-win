
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Products from "./pages/Products";
import Layout from "./component/Layout/Layout";



function App() {
  return (
    <Router>
         <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dasboard/>}/>
            <Route path="products" element={<Products/>}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
