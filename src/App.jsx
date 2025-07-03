import { Routes, Route } from "react-router";

// Page Container
import SiteWrapper from "./components/global/SiteWrapper"

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SiteWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
