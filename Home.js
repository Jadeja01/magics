import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate(); // नेविगेशन करने के लिए Hook

    return ( <
        div className = "flex flex-col items-center justify-center h-screen" >
        <
        h1 className = "text-3xl font-bold mb-6" > Welcome to Cricket Tournament < /h1> <
        button onClick = {
            () => navigate("/register") }
        className = "px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition" >
        Register Your Team <
        /button> <
        /div>
    );
};

export default Home;