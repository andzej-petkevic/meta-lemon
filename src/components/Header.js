import logo from "../logo.svg";
import {Img} from "@chakra-ui/react";

const Header = () => {
    return(
        <header className="App-header">
            <Img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header;