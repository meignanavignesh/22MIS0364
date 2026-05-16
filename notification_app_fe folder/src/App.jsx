import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard
from "./pages/Dashboard";

import PriorityNotifications
from "./pages/PriorityNotifications";

function App() {

  return (

    <BrowserRouter>

      <div
        style={{
          padding: "20px",
        }}
      >

        <Link to="/">
          Dashboard
        </Link>

        {" | "}

        <Link to="/priority">
          Priority
        </Link>

      </div>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;