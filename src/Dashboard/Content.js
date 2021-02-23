import React from "react";
import styled, { withTheme } from "styled-components";
import {AppContext} from "../Application/AppProvider";
import CoinImage from "../Shared/CoinImage";

const ContentPanel = styled.div`
    // display: grid;
    // grid-template-columns: auto;
    // justify-self: center;
`

export default function () {
    return (
        
       <div className="marquee">
           <ul className="marquee-content">
               <li>₾</li>
               <li>Ξ</li>
               <li>¥</li>
               <li>₽</li>
               <li>₺</li>
               <li>₿</li>
               <li>元</li>
               <li>ɱ</li>
               <li>£</li>

               <li>₾</li>
               <li>Ξ</li>
               <li>¥</li>
               <li>₽</li>
           </ul>
       </div>
    )
}