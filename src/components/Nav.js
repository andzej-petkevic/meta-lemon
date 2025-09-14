import {HStack} from "@chakra-ui/react";

const Nav = () => {
    return (
        <nav>
            <HStack spacing={8}>
                <a href="/">Home</a>
                <a href="/booking">Booking</a>
            </HStack>
        </nav>
    )
}

export default Nav;