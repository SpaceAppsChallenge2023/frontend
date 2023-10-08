import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TitleScreen from "./components/title_screen/TitleScreen";
import Project from "./components/project/Project";
import Warning from "./components/warning/Warning";
import "./App.css";
import { OrbitSpace } from "orbit-space";
import BlackScreenFade from "./BlackScreenFade";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pageTransitionDuration = {
    duration: 1.5,
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

function RoutesWithTransitions({

  pageTransition,
  pageTransitionDuration,
}) {
  const location = useLocation();

  // Add a useEffect to log route changes
  useEffect(() => {
    console.log("Route changed:", location.pathname);
  }, [location]);

  return (
    <>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route
            path="/"
            element={
              <BlackScreenFade>
                <div className="text-center">
                  <Link to="/warning">
                    <OrbitSpace>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={pageTransition}
                        transition={pageTransitionDuration}
                      >
                        <TitleScreen />
                      </motion.div>
                    </OrbitSpace>
                  </Link>
                </div>
              </BlackScreenFade>
            }
          />
          <Route
            path="/home"
            element={
              <BlackScreenFade>
                  <Project />
              </BlackScreenFade>
            }
          />
          <Route
            path="/warning"
            element={
              <BlackScreenFade>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={pageTransition}
                  transition={pageTransitionDuration}
                >
                  <Warning />
                </motion.div>
              </BlackScreenFade>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
