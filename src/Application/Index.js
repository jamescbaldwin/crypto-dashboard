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
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <Content>
        <Settings />
        <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>

  );
}

export default App;
