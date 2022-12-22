import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Rooms from "./pages/Rooms/Room";
import UserList from "./pages/UserList/UserList";
import UserTable from "./pages/UserTable/UserTable";
import UserDetail from "./pages/UserDetail/UserDetail";
import TimeTemp from "./pages/TimeTemp/TimeTemp";
import Signin from './Screens/Signin&Signup/Signin'

function App() {
  return (
<>
<Router>
      <div>
        {/* <Signin /> */}
        {/* <div className="dashboard-container"> */}
          {/* <SideBar menu={sidebar_menu} /> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<Signin />} /> */}
            {/* <Route path="/Signup" element={<Signup />} /> */}
            {/* <Route path="/ForgetPwd" element={<ForgetPwd />} /> */}
              {/* <Route path="/ResetPwd" element={<ResetPwd />} /> */}
          {/* </Routes> */}

          {/* <div className="dashboard-body"> */}
            <Routes>
              <Route exact path="/" element={<Signin />} />
              <Route exact path="/dashboard" element={<Dashboard/>} />
              <Route exact path="/rooms" element={<Rooms/>} />
              <Route exact path="/patients" element={<UserList/>} />
              <Route exact path="/devices" element={<UserTable/>} />
              <Route exact path="/userDetail" element={<UserDetail/>} />
              <Route exact path="/doctors" element={<TimeTemp/>} />
              {/* <Route exact path="/profile" element={<div></div>} /> */}
            </Routes>
          {/* </div> */}
        {/* </div> */}
      </div>
    </Router>
</>




    // <Router>
    //   {/* <Topbar title="fu@@d" /> */}
    //   <div className="containers">
    //     {/* <Navbar /> */}
    //     <Switch>
    //       <Route exact path="/">
    //         <Signin />
    //       </Route>
    //       <Route exact path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //       <Route path="/rooms">
    //         <Rooms />
    //       </Route>
    //       <Route path="/patients">
    //         <UserList />
    //       </Route>
    //       <Route path="/devices">
    //         <UserTable />
    //       </Route>
    //       <Route path="/userDetail">
    //         <UserDetail />
    //       </Route>
    //       <Route path="/doctors">
    //         <TimeTemp />
    //       </Route>

    //       {/* <Route path="/MainRoom">
    //   <MainRoom/>
    // </Route> */}
    //     </Switch>
    //     {/* <MainContainer/> */}
    //     {/* <Dashboard/> */}
    //   </div>
    // </Router>
    // </Admin>
  );
}

export default App;
