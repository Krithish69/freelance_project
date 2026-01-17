import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section
      id="home"
      style={{
        padding: '110px 0 70px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #e6f0ff 0%, #ffffff 100%)',
        overflow: 'hidden'
      }}
    >
      <div className="container">

        {/* Glow Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,123,255,0.15), transparent 70%)',
            top: '-150px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0
          }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            fontSize: '3.5rem',
            lineHeight: '1.2',
            marginBottom: '20px',
            fontWeight: '800',
            position: 'relative',
            zIndex: 1
          }}
        >
          Empowering Freelancers with <br />
          <motion.span
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-primary"
            style={{
              backgroundImage: 'linear-gradient(90deg, #007bff, #00c6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundRepeat: 'no-repeat'
            }}
          >
            Automated AI Bidding
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          Bidman is a powerful freelancer auto bidding application designed to eliminate the challenges of bidding by automating the process and providing advanced filtering options.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
          className="mb-5"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.a
            href="#signup"
            className="btn btn-primary"
            whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(0,123,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{ fontSize: '1.2rem', padding: '15px 40px' }}
          >
            Start 5-Day Free Trial
          </motion.a>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#888' }}>
            No credit card required for trial
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '50px',
            marginTop: '60px',
            position: 'relative',
            zIndex: 1
          }}
        >
          {[
            { value: '6.1M+', label: 'Bids Placed' },
            { value: '18.9K+', label: 'Projects Awarded' },
            { value: '$2.4M+', label: 'USD Earned' },
            { value: '85+', label: 'Countries Served' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.h3
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-primary"
                style={{ fontSize: '2.5rem', marginBottom: '0' }}
              >
                {stat.value}
              </motion.h3>
              <div style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;
