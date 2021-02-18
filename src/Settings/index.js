import React from "react";
import Greeting from "./Greeting";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";

export default function() {
    return  <Page name="settings"> 
        <Greeting/> 
        <ConfirmButton/> 
    </Page>
}