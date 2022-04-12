import React from "react";

const Body = (props) =>
    (   
        <>
        <input type="button" onClick={props._ubahnama} value="klik tutor selanjutnya"/>
        <br />
        <label>nama baru</label>
        <input type="text" onBlur={(event) => props._ubahnama2(event.target.value)}/>
        <br />
        <label>aplikasibaru</label>
        <input type="text" onBlur={(event) => props._ubahaplikasi2(event.target.value)}/>
        </>
    )

export default Body