import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      // delay: 0.5,
      mass: 0.4, //higher mass means it moves slower and lower mass means it moves faster.
      damping: 8, //is the strength of the opposing force a higher value means less oscillation if it was zero then this would just oscillate indefinitely

      //orchestration properties
      when: 'beforeChildren', //dictate when this animation should occur in relation to any children elements which are animating too
      staggerChildren: 0.4, //staggers the animation of all the children by the value in seconds
    },
  },
  exit: {
    x: '-100vw', //slides out
    transition: { ease: 'easeInOut' },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal, showModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='initial'
      animate='visible'
      exit='exit'
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
