import React from 'react';

const plans = [
  {
    name: "Basic",
    price: "$10",
    period: "/mo",
    features: [
      "100 AI Bids / month",
      "Place up to 500 bids",
      "Bid every 3 minutes",
      "Up to 15 Skills",
      "Unlimited Sealed Bids",
      "Client Filters"
    ],
    isPopular: false,
    buttonStyle: "btn-outline-primary"
  },
  {
    name: "Ultimate",
    price: "$30",
    period: "/mo",
    features: [
      "500 AI Bids / month",
      "Unlimited Bids",
      "Bid every 1 minute",
      "Unlimited Skills",
      "Unlimited Sealed Bids",
      "Advanced Project Filters",
      "Priority Support"
    ],
    isPopular: true,
    buttonStyle: "btn-primary"
  }
];

function Pricing() {
  return (
    <section id="pricing" className="py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Choose the plan that fits your freelancing needs.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          flexWrap: 'wrap' 
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{ 
              border: plan.isPopular ? '2px solid var(--primary-color)' : '1px solid var(--border-color)', 
              borderRadius: '10px', 
              padding: '40px', 
              width: '100%', 
              maxWidth: '350px',
              position: 'relative',
              backgroundColor: 'white'
            }}>
              {plan.isPopular && (
                <span style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  right: '50%', 
                  transform: 'translateX(50%)', 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  padding: '5px 15px', 
                  borderRadius: '20px', 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>
                  Most Popular
                </span>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
              </div>
              
              <ul style={{ marginBottom: '40px', textAlign: 'left' }}>
                {plan.features.map((item, i) => (
                  <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'green', marginRight: '10px', fontWeight: 'bold' }}>✓</span> 
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className={`btn ${plan.buttonStyle}`} style={{ width: '100%' }}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;