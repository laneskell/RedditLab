import React from "react";
import error from "../../assets/images/error.png";
import { ErrorImage, ErrorPageContainer } from "./styled";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
    </ErrorPageContainer>
  );
};

export default ErrorPage;
