import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
};

function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      style={{
        background: 'linear-gradient(180deg, #1b1c1f, #212529)',
        color: '#adb5bd',
        padding: '60px 0 30px',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <h4
              style={{
                color: 'white',
                fontSize: '1.8rem',
                marginBottom: '20px',
                background: 'linear-gradient(90deg, #4f46e5, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Bidman
            </h4>
            <p style={{ lineHeight: '1.6' }}>
              Automated AI bidding platform for freelancers to save time and win more projects.
            </p>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <h5 style={{ color: 'white', marginBottom: '20px' }}>Useful Links</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'Features', 'Pricing', 'Login', 'Sign Up'].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.05, color: '#4f46e5' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ listStyle: 'none', cursor: 'pointer' }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h5 style={{ color: 'white', marginBottom: '20px' }}>Support</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.05, color: '#4f46e5' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ listStyle: 'none', cursor: 'pointer' }}
                >
                  <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 6, scale: 1.05, color: '#4f46e5' }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ listStyle: 'none', cursor: 'pointer' }}
              >
                <a href="mailto:info@bidman.co" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>
                  info@bidman.co
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#adb5bd'
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Bidman. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
