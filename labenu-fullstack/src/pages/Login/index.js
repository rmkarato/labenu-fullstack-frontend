import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

function Login() {
    let history = useHistory();
    
    return (
        <div>
            <PageHeader title="Header Page" />
            <h1>Login</h1>
        </div>
    )
}

export default Login;