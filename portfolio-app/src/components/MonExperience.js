import React from "react";

import Block_type1 from "./blocks/block_type1";
import Block_type2 from "./blocks/block_type2";


function MonExperience() {
    return (
        <div style={{backgroundColor: "#03001C", fontFamily: "Roboto", color: "white" }}>
            <h1>Mon Expérience</h1>
             <Block_type1 
                Header="Header"
                Title="Title"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Button "
                Footer="Footer"
                Link="Link"
            />
             <Block_type2 
                Header="Header"
                Title="Title"
                DescriptionType2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Button "
                Footer="Footer"
                Link="Link"
            />
             <Block_type1 
                Header="Header"
                Title="Title"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Button "
                Footer="Footer"
                Link="Link"
            />
            <Block_type2
                Header="Header"
                Title="Title"
                DescriptionType2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                Button "
                Footer="Footer"
                Link="Link"
            />
            </div>
    );
}
export default MonExperience;