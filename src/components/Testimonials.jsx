import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

const testimonials = [
    {
        id: 1,
        name: "Arjun Mehta",
        role: "Business Owner",
        text: "The quickest disbursal I've ever experienced. No hidden charges and the team was extremely helpful throughout.",
        loan: "Business Loan",
        initials: "AM",

    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "IT Professional",
        text: "Ask Me Credit made my home renovation possible. The digital process was seamless and completely paperless.",
        loan: "Personal Loan",
        initials: "PS",
    },
    {
        id: 3,
        name: "Rahul Verma",
        role: "Entrepreneur",
        text: "Transparent pricing and flexible EMIs. Finally a fintech platform that actually cares about the user experience.",
        loan: "Gold Loan",
        initials: "RV",
    },
    {
        id: 4,
        name: "Sneha Gupta",
        role: "Doctor",
        text: "I was surprised by how fast the eligibility check was. Got my funds within 24 hours. Highly recommended!",
        loan: "Personal Loan",
        initials: "SG",
    },
];

const Testimonials = () => {
    return (
        <section className="testi-section">
            <div className="container">
                <motion.div
                    className="testi-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="testi-badge">Reviews</span>
                    <h2>Trusted by <span>Thousands</span></h2>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // Mobile: 1 card
                        0: {
                            slidesPerView: 1,
                        },
                        // Tablet: 2 cards
                        768: {
                            slidesPerView: 2,
                        },
                        // Desktop: 3 cards
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testi-swiper"
                >
                    {testimonials.map((rev) => (
                        <SwiperSlide key={rev.id}>
                            <div className="testi-card">
                                <div className="quote-icon">“</div>

                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                <p className="rev-text">{rev.text}</p>

                                <div className="testi-footer">
                                    {/* <div className="avatar-wrapper">
                    <div className="avatar-main">{rev.initials}</div>
                    <div className="verified-badge">✓</div>
                  </div> */}
                                    <div className="user-details">
                                        <h4>{rev.name}</h4>
                                        <p>{rev.role} • <span className="loan-type">{rev.loan}</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;