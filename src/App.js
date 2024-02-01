import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Summary from "./pages/Summary";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="summary/:id" element={<Summary />} />
        <Route path="form/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
