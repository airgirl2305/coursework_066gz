import './App.css'
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./pages/Main/Main.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

// import { Account } from "./pages/Account/Account.jsx";
// import { UserList } from "./components/UserList/UserList.jsx";
// import SignUp from "./components/Forms/SignUp/SignUp";
// import SignIn from "./components/Forms/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
function App() {


  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          {/*<Route path="/signup" element={<SignUp />} />*/}
          {/*<Route path="/signin" element={<SignIn />} />*/}
          {/*<Route path="/users" element={<UserList />} />*/}
          {/*/profile/me*/}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
