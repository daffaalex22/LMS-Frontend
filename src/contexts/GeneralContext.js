import { useState } from "react";
import { createContext } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
    const [openEnrollment, setOpenEnrollment] = useState(false)

    const value = {
        openEnrollment,
        setOpenEnrollment
    }

    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    );
}

export default GeneralContextProvider;