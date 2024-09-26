import React from "react";
import ProjectLayout from "../Layouts/ProjectLayout";
import { connect } from "react-redux";
import TrainingProviderInformationPage from "./TrainingProviderInformationPage";

const TrainingProviderInformationProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <TrainingProviderInformationPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(TrainingProviderInformationProjectLayoutPage);