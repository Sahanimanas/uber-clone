import React, { createContext, useState } from "react";

export const CaptainDatacontext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState("");
    const [isloading, setLoading] = useState(false);
    const updateCaptain = (captaindata) => {
        setCaptain(captaindata);
    };
    return (
        <CaptainDatacontext.Provider value={{ captain, setCaptain, isloading, setLoading , updateCaptain }}>
            {children}
        </CaptainDatacontext.Provider>
    );
};

export default CaptainContext;