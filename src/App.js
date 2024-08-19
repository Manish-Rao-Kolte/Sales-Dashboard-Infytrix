import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard1Page from "./pages/Dashboard1Page";
import Dashboard2Page from "./pages/Dashboard2Page";
import Header from "./components/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard1Page />} />
      <Route path='/comparison' element={<Dashboard2Page />} />
    </Routes>
  </Router>
);

export default App;
