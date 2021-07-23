import React, { createContext, useContext } from "react";

export const textInitData = {
    text: "I am a fresh apple"
}

export const TextContext = createContext({text: textInitData})

export const TextContextProvider = TextContext.Provider;

export const useTextContext = () => {
    const context = useContext(TextContext);
    if(context === undefined) {
        throw new Error("The use text Context is missing a text provider");
    }

    return context;
}

export default TextContext;
