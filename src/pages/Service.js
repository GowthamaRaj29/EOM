import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/Service.css';


const initialReviews = [
    {
        id: 1,
        company: 'BusinessNZ',
        quote: 'Our favorite thing about D-Events is the ability to track ticket sales and watch the money come in! The ease of use in terms of editing the agenda and speaker details is also impressive.',
        name: 'Matt',
        title: 'Event coordinator',
        location: 'New Zealand',
        category: 'Business',
    },
    {
        id: 2,
        company: 'Amazon.in',
        quote: ' who attended the event were provided a seamless experience throughout their journey.',
        name: 'Satish Upadhyay',
        title: 'Head, Seller Marketing Amazon India',
        location: 'India',
        category: 'Technology',
    },
    {
        id: 3,
        company: 'Veterinarian Captain Zack',
        quote: 'We received over 1,800 registrations from vets in over 60 countries. D-Events managed this process seamlessly.',
        name: 'Dr. Jamshyd Cooper',
        title: 'Veterinarian',
        location: 'Global',
        category: 'Healthcare',
    },
    {
        id: 4,
        company: 'Microsoft',
        quote: 'D-Events has transformed our event management process, allowing us to focus on delivering high-quality content and experiences to our attendees.',
        name: 'John Doe',
        title: 'Event Manager',
        location: 'USA',
        category: 'Technology',
    },
    {
        id: 5,
        company: 'Google',
        quote: 'Using D-Events, we were able to streamline our event registration and management, resulting in a smoother experience for both our team and attendees.',
        name: 'Jane Smith',
        title: 'Event Coordinator',
        location: 'Global',
        category: 'Technology',
    },
    {
        id: 6,
        company: 'Apple',
        quote: 'The user-friendly interface of D-Events made it easy for us to set up and manage our events efficiently.',
        name: 'Emily Johnson',
        title: 'Event Specialist',
        location: 'Global',
        category: 'Technology',
    },
    {
        id: 7,
        company: 'IBM',
        quote: 'D-Events comprehensive features have significantly improved our event planning and execution.',
        name: 'Michael Brown',
        title: 'Event Director',
        location: 'USA',
        category: 'Business',
    },
    {
        id: 8,
        company: 'Facebook',
        quote: 'D-Events allowed us to easily manage our large-scale events, providing a seamless experience for all our participants.',
        name: 'Laura Wilson',
        title: 'Event Manager',
        location: 'Global',
        category: 'Technology',
    },
    {
        id: 9,
        company: 'Cisco',
        quote: 'The support team was fantastic and helped us make our events a huge success.',
        name: 'Robert Miller',
        title: 'Event Organizer',
        location: 'USA',
        category: 'Technology',
    },
];

const Service= () => {
    const [filter, setFilter] = useState('All');
    const [userReviews, setUserReviews] = useState(initialReviews);
    const [newStory, setNewStory] = useState({ name: '', title: '', company: '', quote: '' });
    const [editIndex, setEditIndex] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newStory.quote.trim()) {
            if (editIndex !== null) {
                const updatedReviews = [...userReviews];
                updatedReviews[editIndex] = { ...updatedReviews[editIndex], ...newStory };
                setUserReviews(updatedReviews);
                setEditIndex(null);
            } else {
                const newReview = {
                    id: userReviews.length + 1,
                    ...newStory,
                    category: 'User Submitted'
                };
                setUserReviews([...userReviews, newReview]);
            }
            setNewStory({ name: '', title: '', company: '', quote: '' });
        }
    };

    const handleEdit = (index) => {
        setNewStory(userReviews[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedReviews = [...userReviews];
        updatedReviews.splice(index, 1);
        setUserReviews(updatedReviews);
    };

    const filteredReviews = filter === 'All' ? userReviews : userReviews.filter(review => review.category === filter);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
          <div >
            

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
                    <div className="faq-question">
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
                <div className="faq-item-s" onClick={() => toggleFaq(4)}>
                    <div className="faq-question-s">
                        Can we switch plans?
                        {activeFaq === 4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <Collapse in={activeFaq === 4}>
                        <div className="faq-answer-s">
                            Yes, you can switch between plans at any time by contacting our support team.
                        </div>
                    </Collapse>
                </div>
                <div className="faq-item-s" onClick={() => toggleFaq(5)}>
                    <div className="faq-question-s">
                        Which Event is most popular?
                        {activeFaq === 5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <Collapse in={activeFaq === 5}>
                        <div className="faq-answer-s">
                            The In-personal Events which is been more Booked.
                        </div>
                    </Collapse>
                </div>
                <div className="faq-item-s" onClick={() => toggleFaq(6)}>
                    <div className="faq-question-s">
                        How do we contact D-Events?
                        {activeFaq === 6 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <Collapse in={activeFaq === 6}>
                        <div className="faq-answer-s">
                            Through Mail or Social Media.
                        </div>
                    </Collapse>
                </div>
                <div className="faq-item-s" onClick={() => toggleFaq(7)}>
                    <div className="faq-question-s">
                        How secure is our data?
                        {activeFaq === 7 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <Collapse in={activeFaq === 7}>
                        <div className="faq-answer-s">
                            We take data security very seriously and implement industry-standard measures to protect your data.
                        </div>
                    </Collapse>
                </div>
                <div className="faq-item-s" onClick={() => toggleFaq(8)}>
                    <div className="faq-question-s">
                        What if we have more questions?
                        {activeFaq === 8 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <Collapse in={activeFaq === 8}>
                        <div className="faq-answer-s">
                            You can always reach out to our support team or visit our help center for more information.
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
        <Footer/>
                        </div>
    );
};

export default Service;


