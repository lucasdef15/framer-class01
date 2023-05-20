import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Modal({ showModal }) {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariants}
          initial='initial'
          animate='visible'
        ></motion.div>
      )}
    </AnimatePresence>
  );
}
