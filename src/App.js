import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { UserContextProvider } from "./contexts/userContext";
import { SelfmadeRespectContextProvider } from "./contexts/selfmadeRespectContext";
import { DiskFullnessContextProvider, } from "./contexts/diskFullnessContext";
import { NotificationContextProvider } from "./contexts/notificationContext";

function App() {
  return (
    <UserContextProvider>
      <SelfmadeRespectContextProvider>
          <DiskFullnessContextProvider>
            <NotificationContextProvider>
            <Header/>
            <Main/>
            <Footer/>
            </NotificationContextProvider>
          </DiskFullnessContextProvider>
      </SelfmadeRespectContextProvider>
    </UserContextProvider>
  );
}

export default App;
