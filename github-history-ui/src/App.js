import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Commits } from "./pages/Commits/Commits";
import CommitContextProvider from "./contexts/CommitContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CommitContextProvider>
              <Commits />
            </CommitContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
