import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TitleScreen from "./components/title_screen/TitleScreen";
import Project from "./components/project/Project";
import Warning from "./components/warning/Warning";
import "./App.css";
import { OrbitSpace } from "orbit-space";

function App() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
  };

  const pageTransitionDuration = {
    duration: 1,
  };

  return (
    <Router>
      <RoutesWithTransitions
        pageTransition={pageTransition}
        pageTransitionDuration={pageTransitionDuration}
      />
    </Router>
  );
}

function RoutesWithTransitions({ pageTransition, pageTransitionDuration }) {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center">
              <Link to="/warning">
                <OrbitSpace>
                  <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                    transition={pageTransitionDuration}
                  >
                    <TitleScreen />
                  </motion.div>
                </OrbitSpace>
              </Link>
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={pageTransitionDuration}
            >
              <Project />
            </motion.div>
          }
        />
        <Route
          path="/warning"
          element={
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={pageTransitionDuration}
            >
              <Warning />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
