import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ margin: "100px 0" }}
    >
      {children}
    </motion.div>
  );
}
