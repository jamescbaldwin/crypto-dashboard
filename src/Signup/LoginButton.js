import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import {backgroundColor2, fontSize2} from "../Shared/Styles";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const buttonStyle = {
        color: {backgroundColor2}
    }
    return (
        <button onClick={() => loginWithRedirect()} style={buttonStyle}>
            Log In
        </button>
    )
}

export default LoginButton
