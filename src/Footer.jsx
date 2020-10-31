import React from "react";
function Footer(){
    var day=new Date();
    var currentYear=day.getFullYear();
    return(<footer><p>Copyright ⓒ {currentYear}</p></footer>);
}
export default Footer;