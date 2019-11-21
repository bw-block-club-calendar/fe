import React, { useEffect, useState } from "react";
// import AxiosWithAuth from "../util/AxiosWithAuth";
import AddDeets from "./AddDeets";


 const CreateProfile = (props) => {
 
  return (
<div>
    <AddDeets {...props} />

    </div>
  );
}

export default CreateProfile;