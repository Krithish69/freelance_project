import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: "🤖", title: "AI Bid Generation", description: "Generate customized bids using ChatGPT as per project requirements to increase your winning chances." },
  { icon: "⚡", title: "Automatic Bidding", description: "Bidman places bid automatically on newly posted projects within seconds, giving you the first-mover advantage." },
  { icon: "🔒", title: "Sealed Bids", description: "Protect your bid details by sealing them from other freelancers so your proposal stays unique." },
  { icon: "🎯", title: "Project Filters", description: "Refine projects based on skills, budgets, countries, and keywords to bid only on relevant work." },
  { icon: "👥", title: "Client Filters", description: "Identify ideal clients based on reviews, ratings, and payment status verification." },
  { icon: "📅", title: "Scheduled Bidding", description: "Automate your bidding in your preferred timezone and set stop criteria based on your needs." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
};

function Features() {
  return (
    <section id="features" className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            Bidman Features
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            We offer a range of innovative tools and features designed to enhance your freelancing experience.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
                  color: '#fff',
                  boxShadow: '0 6px 15px rgba(79,70,229,0.3)'
                }}
              >
                {feature.icon}
              </motion.div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 600 }}>
                {feature.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
