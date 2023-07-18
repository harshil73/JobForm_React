import "./App.css";
import JobForm from "./component/JobForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableForm from "./forms/TableForm";
function App() {
  return (
    <div className="App">
      {/* <JobForm /> */}

      <BrowserRouter>
        <Routes>
        <Route path="/add" element={<JobForm />}></Route>
        <Route path="/add/:id" element={<JobForm />}></Route>
        <Route path="/tabledata" element={<TableForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
