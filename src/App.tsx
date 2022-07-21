import { ProtectedRouter } from "./components/protectedRouter/protectedRouter";
import { Registration } from "./views/authorization/registration/registration";
import { Completed } from "./components/todo/completed/completed";
import { Pending } from "./components/todo/pending/pending";
import { Login } from "./views/authorization/login/login";
import { BrowserRouter } from "react-router-dom";
import { All } from "./components/todo/all/all";
import { Route, Routes } from "react-router";
import { Home } from "./views/home/home";
import { Layout } from "./layout/layout";

export const App = () => {

  return <BrowserRouter>
      <Routes>
      <Route element={<Layout/>}>
        <Route element={<ProtectedRouter/>}>
          <Route path="/" element={<Home/>}>
            <Route index element={<All/>}/>
            <Route path="/pending" element={<Pending/>}/>
            <Route path="/completed" element={<Completed/>}/>
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

}
