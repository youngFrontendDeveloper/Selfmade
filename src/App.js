import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { UserContextProvider } from "./contexts/userContext";
import { SelfmadeRespectContextProvider } from "./contexts/selfmadeRespectContext";
import { SRDataContextProvider } from "./contexts/SRData";
import { DiskFullnessContextProvider, } from "./contexts/diskFullnessContext";
import { NotificationContextProvider } from "./contexts/notificationContext";

function App() {
  return (
    <UserContextProvider>
      <SelfmadeRespectContextProvider>
        <SRDataContextProvider>
          <DiskFullnessContextProvider>
            <NotificationContextProvider>
            <Header/>
            <Main/>
            <Footer/>
            </NotificationContextProvider>
          </DiskFullnessContextProvider>
        </SRDataContextProvider>
      </SelfmadeRespectContextProvider>
    </UserContextProvider>
  );
}

export default App;
