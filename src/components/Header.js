import logo from "../lemon.png";
import {Img} from "@chakra-ui/react";

const Header = () => {
    return(
        <header className="App-header">
            <Img src={logo} className="App-logo" alt="logo"  height="10rem"/>
        </header>
    )
}

export default Header;