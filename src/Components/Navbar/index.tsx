import { useReduxState } from "@src/hooks/useReduxState"
import { setTheme } from "@src/store/redux-store/actions/themeActions"
import { useDispatch } from "react-redux"
import { translate } from "@src/services/i18n"

const Navbar = () => {

    const { theme } = useReduxState().theme
    const dispatch = useDispatch();

    const handleTheme = () => {
        theme === "darkTheme" ? dispatch(setTheme("lightTheme")) : dispatch(setTheme("darkTheme"))
    }

    return(
        <>
        <ul>
            <li>{translate("NAVBAR.HOME1123132")}</li>
            <li>{translate("NAVBAR.HOME")}</li>
            <li>Item 04</li>
        </ul>
        <button onClick={() => { handleTheme() }}>Mudar o thema</button>
        <h2>{theme}</h2>
        </>
    )
}

export default Navbar;