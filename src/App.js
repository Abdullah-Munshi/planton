import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import GardenAbout from "./pages/GardenAbout";
import GardenNotification from "./pages/GardenNotification";
import MyPlanton from "./pages/MyPlanton";
import NotificationDetailsChat from "./pages/NotificationDetailsChat";
import Nutritionism from "./pages/Nutritionism";
import ProfileSetting from "./pages/ProfileSetting";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Video from "./pages/Video";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/my-planton" element={<MyPlanton />} />
          <Route path="/nutritionism" element={<Nutritionism />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/about" element={<GardenAbout />} />
          <Route path="/notification" element={<GardenNotification />} />
          <Route
            path="/notification/:notificationId"
            element={<NotificationDetailsChat />}
          />
          <Route path="/live" element={<Video />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
