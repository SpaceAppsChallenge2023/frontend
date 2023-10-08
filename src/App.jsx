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
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0.8,
    },
    fadeIn: {
      opacity: 0,
      scale: 1,
    },
    fadeOut: {
      opacity: 1,
      scale: 1,
    },
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };
  

  const pageTransitionDuration = {
    duration: 1.5,
  };

  const pageDuration_BlackFade = { 
    duration: 5,
  };
  
  return (
    <Router>
      <RoutesWithTransitions
        pageTransition={pageTransition}
        pageTransitionDuration={pageTransitionDuration}
        pageDuration_BlackFade={pageDuration_BlackFade}
      />
    </Router>
  );
}


function RoutesWithTransitions({ pageTransition, pageTransitionDuration, pageDuration_BlackFade}) {
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
              initial="visible"
              animate="visible"
              exit="exit"
              variants={pageTransition}
              transition={pageTransitionDuration}
            >
              {/* Black Overlay */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                style={{ position: 'absolute', backgroundColor: 'black', width: '100%', height: '100%' }}
              />
              {/* Actual Content */}
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
              initial="fadeIn"
              animate="fadeOut"
              exit="fadeIn"
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
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageTransition}
              transition={pageDuration_BlackFade}
            >
              {/* Black Overlay */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }} 
                style={{ position: 'absolute', backgroundColor: 'black', width: '100vw', height: '100vh', zIndex: 1 }}
              >
              {/* Actual Content */}
              <Warning />
              </motion.div>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
