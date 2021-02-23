import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import {AppProvider} from "./AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard";
import LoginButton from "../Signup/LoginButton";
import LogoutButton from "../Signup/LogoutButton";
import Profile from "../Signup/Profile";



function App() {
  return (
    <AppLayout> 
      <AppProvider>
        <AppBar />
        {/* <LoginButton/>
        <LogoutButton/> */}
        {/* PUT AUTH0 buttons with user JSON below app content */}
        <Profile/>
        <Content>
        <Settings />
        <Dashboard />
        </Content>
        <LoginButton/>
        <LogoutButton/>
      </AppProvider>
    </AppLayout>

  );
}

export default App;
