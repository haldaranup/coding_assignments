
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Posts } from "./Posts";
export const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
