import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDataRow from "../Components/ProfileDataRow";
import {
  getProfileDetailsFailure,
  getProfileDetailsRequest,
  getProfileDetailsSuccess,
} from "../Redux/action";

const Homepage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileData);

  const getData = () => {
    dispatch(getProfileDetailsRequest());
    axios
      .get("/profile")
      .then((r) => {
        dispatch(getProfileDetailsSuccess(r.data));
      })
      .catch((e) => dispatch(getProfileDetailsFailure(e)));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <table>
        <thead style={{ fontWeight: "700"}}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          {profileData?.map((i) => {
            return <ProfileDataRow profile={i} key={i.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
