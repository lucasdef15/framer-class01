import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
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
        >
          <motion.div className='modal' variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
