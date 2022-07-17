import { ProtectedRouter } from "./components/protectedRouter/protectedRouter";
import { Registration } from "./views/registration/registration";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Login } from "./views/login/login";
import { Home } from "./views/home/home";
import { Layout } from "./layout/layout";

export const App = () => {

  return <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route element={<ProtectedRouter />}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="registration" element={<Registration />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

}
