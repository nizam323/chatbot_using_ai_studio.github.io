import React from "react";


export function Btn(props) {

     let { color, l, m, s, id } = props


     let widthofbtn;

     if (l == true) {
          widthofbtn = 500
     }
     if (m == true) {
          widthofbtn = 250
     }
     if (s == true) {
          widthofbtn = 100
     }

     return (

          <>

               <p>text : {props.color}</p>

               < button id={id} style={{ backgroundColor: color, width: widthofbtn }}> click</button >

          </>
     )



}