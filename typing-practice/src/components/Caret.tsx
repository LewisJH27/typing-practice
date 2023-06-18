import { motion } from "framer-motion";

const Caret = () => {
    return (
        <motion.div
            aria-hidden={true}
            className="inline-block bg-blue-400 w-0.5 h-7"
            style={{ marginTop: "-3px", marginBottom: "-4px", borderRadius: "9999px" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ repeat:Infinity, duration: 0.8, ease: "easeInOut"}}
        />
    );
};

export default Caret;