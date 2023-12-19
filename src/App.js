import React from "react";
import "./app.css"
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Books from "./pages/Books";
import About from "./pages/About";
import MyShelf from "./pages/MyShelf";
import Login from "./pages/Login";
import NothingFound from "./pages/NothingFound";
import Layout from "./components/Layout";
import SearchPage from "./pages/SearchPage";
import PrivateRoute from "./components/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";

function App() {

  return (
      <AuthProvider>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={"books"} element={<Books/>}/>
                    <Route path={"about"} element={<About/>}/>
                    <Route
                        path="shelf"
                        element={
                            <PrivateRoute
                                element={<MyShelf />}
                            />
                        }
                    />
                    <Route path={"loginpage"} element={<Login/>}/>
                    <Route path={"search"} element={<SearchPage/>}/>
                    <Route path={"*"} element={<NothingFound/>}/>
                </Route>
            </Routes>
      </AuthProvider>
  );
}

export default App;
