import React from "react";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/books/:id/edit" element={<EditBook />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default Routes;
