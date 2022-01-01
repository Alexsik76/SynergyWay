import { Routes, Route, Outlet, Link } from "react-router-dom";
import UsersList from "./UsersList";
import UserCreateUpdate from "./UserCreateUpdate";
export default function App(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Synergy React Demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/users/">Users</a>
                        <a className="nav-item nav-link" href="/users/create/">Create User</a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center">
                </div>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                    <Route path="/users/" element={<UsersList/>}/>
                    <Route path="/users/create/" element={<UserCreateUpdate/>}/>
                </Routes>
            </div>
        </div>
  )
};
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users/">About</Link>
          </li>
          <li>
            <Link to="/users/create/">Create User</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

