import { useReduxState } from "@src/hooks/useReduxState"
import { setTheme } from "@src/store/redux-store/actions/themeActions"
import React from "react"
import { useDispatch } from "react-redux"

const Navbar = () => {

    const { theme } = useReduxState().theme
    const dispatch = useDispatch();

    const handleTheme = () => {
        theme === "darkTheme" ? dispatch(setTheme("lightTheme")) : dispatch(setTheme("darkTheme"))
    }

    return(
        <>
        <ul>
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
            <li>Item 04</li>
        </ul>
        <button onClick={() => { handleTheme() }}>Mudar o thema</button>
        <h2>{theme}</h2>
        </>
    )
}

export default Navbar;