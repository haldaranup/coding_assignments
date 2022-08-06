import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import EditMusicRecord from "../Pages/EditMusicRecord";
import Login from "../Pages/Login";
import MusicRecords from "../Pages/MusicRecords";
import SingleMusicRecord from "../Pages/SingleMusicRecord";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecords />} />
      <Route
        path="/music/:id"
        element={
          <ReqAuth>
            <SingleMusicRecord />
          </ReqAuth>
        }
      />
      <Route path="/music/:id/edit" element={<EditMusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
