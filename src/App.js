import './App.css';
import { MonsterList, MonsterPage } from "./components";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<div>welcome to monster app</div>} />
            <Route path="monsters" element={<MonsterList />}>
              <Route path=":monsterID" element={<MonsterPage />} />
            </Route>
          </Route>
          <Route path="about" element={<div>About page</div>} />
        </Routes>
      </BrowserRouter>
  );
}
const Menu = () => (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/monsters">Monsters</Link>
        </li>
      </ul>
      <Outlet />
      <footer>this is footer</footer>
    </div>
  );


export default App;
