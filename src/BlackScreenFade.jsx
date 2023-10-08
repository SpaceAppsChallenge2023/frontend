import { motion } from "framer-motion";

export const BlackScreenFade = ({ children }) => {
  const variants = {
    hidden: { opacity: 1, display: "block" },
    visible: { opacity: 0, transitionEnd: { display: "none" } },
    exit: { opacity: 1, display: "block" },
  };
  const transition = { duration: 2.5 }; // black screen transition 2-3 seconds

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={transition}
        style={{
          position: "absolute",
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />
      {children}
    </>
  );
};

export default BlackScreenFade;
