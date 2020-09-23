import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

function Signup() {
    let history = useHistory();
    
    return (
        <div>
            <PageHeader title="Header Page" />
            <h1>Signup</h1>
        </div>
    )
}

export default Signup;