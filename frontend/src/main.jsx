import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from 'react-redux';
import "./index.css";
import App from "./App.jsx";
import store from "./store";
import HomeScreens from "./screens/HomeScreens.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";



createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route index={true}  element={<HomeScreens />}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen />}/>
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>
);
