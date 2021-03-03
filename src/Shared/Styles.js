//const theme = "dark";
const theme = "light";
export const lightTheme = theme === "light";


//blue tile color
export const color = lightTheme ? "#dcdcdc" : "#061a44";

//darker blue page color
export const color2 = lightTheme ? "#c1c1c1" : "#010e2c";

//green/shadow color
export const color3 = lightTheme ? "#09f010" : "#42ff3a";

if (lightTheme) {
    document.body.style.background = "#bbbbbb";
    document.body.style.color = "rgb(142, 57, 57)";
} else {
    document.body.style.background = "rgb(2, 11, 34)";
    document.body.style.color = "rgb(196, 195, 195)";
}

// dont forget to change


export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2}`;
export const greenBackgroundColor = lightTheme ? "#6b0606" : `background-color: ${color3}`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? "#a9b6ff" : "#121d5b"}`;
// export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px rgb(81, 93, 255)`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";

// var today = new Date();

// var time = today.getHours();
// console.log(today.getHours())
// var body =  document.body
// function colorTheme () {
//     if (time < 18) {
//         body.style.backgroundColor = `${color2}`
// } else  {
//     body.style.backgroundColor = "#4F4BC5"
// } 
// }
// colorTheme();