import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <UserContextProvider>
      <Header/>
      <Main/>
      <Footer/>
    </UserContextProvider>
  );
}

export default App;
