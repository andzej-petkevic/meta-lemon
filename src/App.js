import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import {BookingProvider} from "./context/bookingContext";

const App = () => {

    return (
        <ChakraProvider>
            <BookingProvider>
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>
            </BookingProvider>
        </ChakraProvider>
    );
}

export default App;
