import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
