import React from "react";
import styled from "styled-components";
import Ticker from "react-ticker";

const TickerContent = () => {

    return (
        <marquee behavior="scroll" direction="left">Hello</marquee>
    )
    // <Ticker>
    //     {{{ index }} => (
    //         <>
    //             <h1> This is a headline element of #{index}!</h1>
    //             <img src="www.image.com"></img>
    //         </>
    //     )}
    // </Ticker>
}

export default TickerContent;