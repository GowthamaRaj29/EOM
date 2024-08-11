import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import axios from 'axios';
import Footer from '../components/Footer';
import '../styles/Service.css';

// Define initialReviews here
const initialReviews = [
    // Sample review objects
    {
        id: 1,
        name: 'Jane Doe',
        title: 'Marketing Manager',
        company: 'Acme Corp',
        quote: 'This is a fantastic platform!',
        category: 'User Submitted'
    },
    {
        id: 2,
        name: 'John Smith',
        title: 'Product Manager',
        company: 'Tech Innovations',
        quote: 'Great service and support!',
        category: 'Business'
    }
];

const Service = () => {
    const [filter, setFilter] = useState('All');
    const [userReviews, setUserReviews] = useState(initialReviews);
    const [newStory, setNewStory] = useState({ name: '', title: '', company: '', quote: '' });
    const [editIndex, setEditIndex] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newStory.quote.trim()) {
            try {
                if (editIndex !== null) {
                    // Update existing story
                    const updatedReview = { ...userReviews[editIndex], ...newStory };
                    await axios.put(`http://localhost:5000/api/stories/${updatedReview.id}`, updatedReview);
                    const updatedReviews = [...userReviews];
                    updatedReviews[editIndex] = updatedReview;
                    setUserReviews(updatedReviews);
                    setEditIndex(null);
                } else {
                    // Create new story
                    const response = await axios.post('http://localhost:5000/api/stories', {
                        ...newStory,
                        category: 'User Submitted'
                    });
                    setUserReviews([...userReviews, response.data]);
                }
                setNewStory({ name: '', title: '', company: '', quote: '' });
            } catch (error) {
                console.error('Error submitting story:', error);
            }
        }
    };

    const handleEdit = (index) => {
        setNewStory(userReviews[index]);
        setEditIndex(index);
    };

    const handleDelete = async (index) => {
        try {
            const reviewToDelete = userReviews[index];
            await axios.delete(`http://localhost:5000/api/stories/${reviewToDelete.id}`);
            const updatedReviews = [...userReviews];
            updatedReviews.splice(index, 1);
            setUserReviews(updatedReviews);
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    };

    const filteredReviews = filter === 'All' ? userReviews : userReviews.filter(review => review.category === filter);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div>
            <div className="customer-reviews-s">
                <div className="experience-section-s">
                    <h2>Brands who create experiences with us</h2>
                    <p>Here are a few examples of how our customers have run successful events using D-Events.</p>
                </div>
                <div className="filter-dropdown-s">
                    <label htmlFor="filter">Filter by:</label>
                    <select id="filter" onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Business">Business</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="User Submitted">User Submitted</option>
                    </select>
                </div>
                <div className="reviews-container-s">
                    {filteredReviews.map((review, index) => (
                        <div className="review-card-s" key={review.id}>
                            <div className="review-content-s">
                                <h3>{review.company}</h3>
                                <p>"{review.quote}"</p>
                                <p><strong>{review.name}</strong>, {review.title}</p>
                                {review.category === 'User Submitted' && (
                                    <div className="review-actions-s">
                                        <EditIcon onClick={() => handleEdit(index)} className="icon-button-s" />
                                        <DeleteIcon onClick={() => handleDelete(index)} className="icon-button-s" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="submit-story-container-s">
                    <h2>Love using DEvents</h2>
                    <p>We would like to know your Backstage story. Let’s get in touch?</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={newStory.name}
                            onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="text"
                            value={newStory.title}
                            onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                            placeholder="Your Title"
                            required
                        />
                        <input
                            type="text"
                            value={newStory.company}
                            onChange={(e) => setNewStory({ ...newStory, company: e.target.value })}
                            placeholder="Company Name"
                            required
                        />
                        <textarea
                            value={newStory.quote}
                            onChange={(e) => setNewStory({ ...newStory, quote: e.target.value })}
                            placeholder="Share your story..."
                            required
                        ></textarea>
                        <button type="submit">{editIndex !== null ? 'Update Story' : 'Submit Your Story'}</button>
                    </form>
                </div>
                <div className="faq-container-">
                    <h2 className="faq-title-s">Frequently Asked Questions</h2>
                    <div className="faq-item-s" onClick={() => toggleFaq(1)}>
                        <div className="faq-question-s">
                            How does the 15-day trial work?
                            {activeFaq === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        <Collapse in={activeFaq === 1}>
                            <div className="faq-answer-s">
                                Your 15-day Premium trial will be activated as soon as you sign up for DEvents, during which time you can explore all our premium features. After the trial period, you’ll be moved to our Free Plan if you did not choose to upgrade.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-item-s" onClick={() => toggleFaq(2)}>
                        <div className="faq-question-s">
                            What payment methods do you offer?
                            {activeFaq === 2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        <Collapse in={activeFaq === 2}>
                            <div className="faq-answer-s">
                                We offer a variety of payment methods including credit card, PayPal, and direct bank transfer.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-item-s" onClick={() => toggleFaq(3)}>
                        <div className="faq-question-s">
                            What’s the difference between a subscription-based and pay-per-event plan?
                            {activeFaq === 3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        <Collapse in={activeFaq === 3}>
                            <div className="faq-answer-s">
                                Subscription-based plans are billed annually or monthly, providing continuous access to all features. Pay-per-event plans are billed per event, ideal for occasional event organizers.
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Service;
