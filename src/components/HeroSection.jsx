import React from 'react';

function HeroSection() {
  return (
    <section id="home" style={{ 
      padding: '100px 0 60px', 
      textAlign: 'center',
      // UPDATED: Subtle gradient background
      background: 'linear-gradient(180deg, #e6f0ff 0%, #ffffff 100%)' 
    }}>
      <div className="container">
        <h1 style={{ 
          fontSize: '3.5rem', 
          lineHeight: '1.2', 
          marginBottom: '20px',
          fontWeight: '800'
        }}>
          Empowering Freelancers with <br />
          <span className="text-primary">Automated AI Bidding</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          marginBottom: '40px', 
          maxWidth: '800px', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          Bidman is a powerful freelancer auto bidding application designed to eliminate the challenges of bidding by automating the process and providing advanced filtering options.
        </p>
        
        <div className="mb-5">
          <a href="#signup" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
            Start 5-Day Free Trial
          </a>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#888' }}>No credit card required for trial</p>
        </div>

        {/* Statistics Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px', 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '50px',
          marginTop: '60px'
        }}>
          <div>
            <h3 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '0' }}>6.1M+</h3>
            <div style={{ color: 'var(--text-muted)' }}>Bids Placed</div>
          </div>
          <div>
            <h3 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '0' }}>18.9K+</h3>
            <div style={{ color: 'var(--text-muted)' }}>Projects Awarded</div>
          </div>
          <div>
            <h3 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '0' }}>$2.4M+</h3>
            <div style={{ color: 'var(--text-muted)' }}>USD Earned</div>
          </div>
          <div>
            <h3 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '0' }}>85+</h3>
            <div style={{ color: 'var(--text-muted)' }}>Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;