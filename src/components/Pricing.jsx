import React from 'react';
import { motion } from 'framer-motion';

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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
};

function Pricing() {
    return (
        <section id="pricing" className="py-5" style={{ backgroundColor: 'white' }}>
            <div className="container">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="section-title">Pricing Plans</h2>
                    <p className="section-subtitle">Choose the plan that fits your freelancing needs.</p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: plan.isPopular ? 1.05 : 1.03,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                            }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            style={{
                                border: plan.isPopular
                                    ? '2px solid var(--primary-color)'
                                    : '1px solid var(--border-color)',
                                borderRadius: '14px',
                                padding: '40px',
                                width: '100%',
                                maxWidth: '350px',
                                position: 'relative',
                                backgroundColor: 'white'
                            }}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: 'spring' }}
                                    style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        right: '50%',
                                        transform: 'translateX(50%)',
                                        backgroundColor: 'var(--primary-color)',
                                        color: 'white',
                                        padding: '6px 18px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Most Popular
                                </motion.span>
                            )}

                            {/* Plan Name */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}
                            >
                                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>
                                    {plan.price}
                                </span>
                                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                            </motion.div>

                            {/* Features */}
                            <ul style={{ marginBottom: '40px', textAlign: 'left' }}>
                                {plan.features.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}
                                    >
                                        <span style={{ color: 'green', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className={`btn ${plan.buttonStyle}`}
                                style={{ width: '100%' }}
                            >
                                Start Free Trial
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Pricing;
