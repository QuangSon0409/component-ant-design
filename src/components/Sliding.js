import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../App.css";
import { Button } from "antd";
import { SelectOutlined } from "@ant-design/icons";
export const showFormContext = React.createContext();

const Sliding = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  const store = {
    showSignUp,
    setShowSignUp,
  };
  return (
    <showFormContext.Provider value={store}>
      <div className="App_form-layout">
        <div className="form-container">
          <div className={`form ${showSignUp ? "left" : "right"}`}>
            {showSignUp ? <SignUp /> : <SignIn />}
          </div>
          <div className={`toggle-button ${showSignUp ? "active" : "right"}`}>
            {showSignUp ? (
              <div className="overlay left">
                <h1>Welcome!</h1>
                <p>
                  If you already have an account with us let's sign in to see
                  something awesome!
                </p>
                <Button
                  shape="round"
                  onClick={toggleSignUp}
                  icon={<SelectOutlined />}
                  size="large"
                >
                  Use your exist account
                </Button>
              </div>
            ) : (
              <div className="overlay right">
                <h1>Hello, Friend!</h1>
                <p>
                  If you don't have an account, let's enter your personal
                  details and start journey with us
                </p>
                <Button
                  shape="round"
                  onClick={toggleSignUp}
                  icon={<SelectOutlined />}
                  size="large"
                >
                  Create new account
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </showFormContext.Provider>
  );
};

export default Sliding;
