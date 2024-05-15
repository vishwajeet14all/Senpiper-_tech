import Form from "./Form";
import Table from "./Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Tabs = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Tabs;
