import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } }
  };

  const linkHover = {
    scale: 1.1,
    y: -3,
    color: '#4f46e5',
    transition: { type: 'spring', stiffness: 400 }
  };

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          background: scrolled
            ? 'linear-gradient(90deg, #ffffff, #f3f4f6)'
            : 'transparent',
          backdropFilter: 'saturate(180%) blur(10px)',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0,0,0,0.12)'
            : '0 2px 6px rgba(0,0,0,0.04)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
            padding: '0 2rem'
          }}
        >
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              fontSize: '28px',
              fontWeight: '800',
              color: 'linear-gradient(90deg, #4f46e5, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px',
              textDecoration: 'none'
            }}
          >
            Bidman
          </motion.a>

          {/* Nav */}
          <motion.nav
            variants={navVariants}
            initial="initial"
            animate="animate"
            style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
          >
            {['Features', 'Pricing'].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={linkHover}
                style={{
                  fontWeight: '500',
                  color: 'var(--text-dark)',
                  position: 'relative'
                }}
              >
                {item}
                {/* Underline animation */}
                <motion.span
                  layoutId={`underline-${i}`}
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -4,
                    height: 2,
                    width: '100%',
                    backgroundColor: '#4f46e5',
                    borderRadius: 2,
                    scaleX: 0,
                    transformOrigin: 'left'
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.a>
            ))}

            <motion.a
              href="#login"
              whileHover={{ scale: 1.1, color: '#4f46e5' }}
              style={{ fontWeight: '600', color: 'var(--primary-color)' }}
            >
              Login
            </motion.a>

            <motion.a
              href="#signup"
              className="btn btn-primary"
              whileHover={{ scale: 1.15, rotate: -1 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '8px',
                background: 'linear-gradient(90deg,#4f46e5,#3b82f6)',
                color: '#fff',
                fontWeight: '600',
                boxShadow: '0 6px 15px rgba(79,70,229,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Sign up
            </motion.a>
          </motion.nav>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

export default Header;
