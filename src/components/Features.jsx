import React from 'react';

const features = [
  {
    icon: "🤖",
    title: "AI Bid Generation",
    description: "Generate customized bids using ChatGPT as per project requirements to increase your winning chances."
  },
  {
    icon: "⚡",
    title: "Automatic Bidding",
    description: "Bidman places bid automatically on newly posted projects within seconds, giving you the first-mover advantage."
  },
  {
    icon: "🔒",
    title: "Sealed Bids",
    description: "Protect your bid details by sealing them from other freelancers so your proposal stays unique."
  },
  {
    icon: "🎯",
    title: "Project Filters",
    description: "Refine projects based on skills, budgets, countries, and keywords to bid only on relevant work."
  },
  {
    icon: "👥",
    title: "Client Filters",
    description: "Identify ideal clients based on reviews, ratings, and payment status verification."
  },
  {
    icon: "📅",
    title: "Scheduled Bidding",
    description: "Automate your bidding in your preferred timezone and set stop criteria based on your needs."
  }
];

function Features() {
  return (
    <section id="features" className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Bidman Features</h2>
          <p className="section-subtitle">
            We offer a range of innovative tools and features designed to enhance your freelancing experience.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '40px', 
              borderRadius: '10px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;