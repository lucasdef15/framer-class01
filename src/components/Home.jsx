import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      repeat: Infinity,
      // repeatDelay: 0.3,
      repeatType: 'mirror',
      // duration: 0.3,
    },
  },
};
const containerVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    x: '-100vw', //slides out
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariants}
      initial='initial'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
