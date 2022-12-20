import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { UserContextProvider } from "./contexts/userContext";
import { SelfmadeRespectContextProvider } from "./contexts/selfmadeRespectContext";
import { DiskFullnessContextProvider, } from "./contexts/diskFullnessContext";
import { NotificationContextProvider } from "./contexts/notificationContext";
import { StatisticsContextProvider } from "./contexts/statisticsContext";

function App() {
  return (
    <UserContextProvider>
      <SelfmadeRespectContextProvider>
        <DiskFullnessContextProvider>
          <NotificationContextProvider>
            <StatisticsContextProvider>
              <Header/>
              <Main/>
              <Footer/>
            </StatisticsContextProvider>
          </NotificationContextProvider>
        </DiskFullnessContextProvider>
      </SelfmadeRespectContextProvider>
    </UserContextProvider>
  );
}

export default App;
