import './App.sass'
import {SignIn} from "./components/Forms/SignIn/SignIn.jsx";
import {SignUp} from "./components/Forms/SignUp/SignUp.jsx";
import { Header } from "./components/Header/Header.jsx";
import {UserList} from "./components/UserList/UserList.jsx";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";

import { Route, Routes } from "react-router-dom";
function App(props) {


  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage function={props.users.key_getContent} />} />
          <Route path="/sign-up" element={<SignUp function={props.users.key_signUp} />} />
          <Route path="/sign-in" element={<SignIn function={props.users.key_signIn} />} />
          <Route path="/users" element={<UserList function={props.users.key_getUsers} />} />
          <Route path="/" element={<h2>Вы в личном кабинете, меню выбора слева</h2>} />
          <Route path="/profile/*" element={<Profile function={props.users.key_getUser} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
