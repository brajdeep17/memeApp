import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
// import Teams from "./Components/Teams";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/NotFound";
import { Suspense, lazy, useState } from "react";
import Accordian from "./Components/Accordian";

const Teams = lazy(() => import("./Components/Teams"));
function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <BrowserRouter>
        <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
          Memes World!
          <nav className="p-2 m-2 w-96 justify-between text-lg">
            {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/teams">Teams</a>
          <a href="/login">Login</a> */}

            <ul className="flex ">
              <li className="px-8">
                <Link to="/">Home</Link>
              </li>
              <li className="px-8">
                <Link to="/about">About</Link>
              </li>
              <li className="px-8">
                <Link to="/teams">Teams</Link>
              </li>
              <li className="px-8">
                <Link to="/login">Login</Link>
              </li>
              <li className="px-8">
                <Link to="/accordian">Accordian</Link>
              </li>
              <select
                className="px-8 text-black"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="sp">Spanish</option>
              </select>
            </ul>
          </nav>
        </header>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
          </Route>

          <Route
            path="/teams"
            element={
              <Suspense fallback={() => <h1>Loading...</h1>}>
                <Teams />
              </Suspense>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordian" element={<Accordian />}>
            Accordian
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
