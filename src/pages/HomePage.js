import lemon_green from "../lemon_green.png";
import {Img} from "@chakra-ui/react";

const HomePage = () => {
    return(
        <section>
            <Img src={lemon_green} alt={"lemon logo"} width="20rem"/>
            <h1>This is home page for our little restaurant.</h1>

        </section>
    )
}

export default HomePage;