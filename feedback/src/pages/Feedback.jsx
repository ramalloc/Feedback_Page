import { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

// Star component representing a star with toggle functionality
const Star = ({ filled, onClick }) => (
    <span
        onClick={onClick}
        style={{ cursor: 'pointer', fontSize: '32px', color: filled ? 'gold' : 'gray', display: 'block' }}
    >
        &#9733;
    </span>
);

// FeedbackForm component for collecting user ratings and comments
export default function FeedbackForm() {
    // States to hold ratings and comments
    const [safetyRating, setSafetyRating] = useState(0);
    const [communicationRating, setCommunicationRating] = useState(0);
    const [recommendation, setRecommendation] = useState(0);
    const [praise, setPraise] = useState('');
    const [comments, setComments] = useState('');

    // Function to handle rating changes for different categories
    const handleRatingChange = (category, value) => {
        switch (category) {
            case 'safety':
                setSafetyRating(value);
                break;
            case 'communication':
                setCommunicationRating(value);
                break;
            case 'recommendation':
                setRecommendation(value);
                break;
            case 'praise':
                setPraise(value);
                break;
            default:
                break;
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (e.g., send ratings and comments to backend)
        const ratings = { safety: safetyRating, communication: communicationRating, recommendation, praise };
        console.log('Submitted Ratings:', ratings);
        console.log('Comments:', comments);
        // Reset form after submission
        setSafetyRating(0);
        setCommunicationRating(0);
        setRecommendation(0);
        setPraise('');
        setComments('');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '10px', fontFamily: 'Bree Serif', minHeight: '80vh', maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'left', color: 'rgba(0, 0, 0, 0.7)' }}>Feedback Form</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flexGrow: 1 }}>
                {/* Safety Rating */}
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="safety" style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.8)' }}>Safety:</label>
                    <div>
                        <label htmlFor="safety" style={{ fontSize: '12px', fontWeight: 'lighter', color: 'rgba(100, 99, 99, 0.8)' }}>Please rate our safety measures:</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={`safety-${index}`}
                                filled={index < safetyRating}
                                onClick={() => handleRatingChange('safety', index + 1)}
                            />
                        ))}
                    </div>
                </div>
                {/* Communication Rating */}
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="communication" style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.8)' }}>Communication:</label>
                    <div>
                        <label htmlFor="safety" style={{ fontSize: '12px', fontWeight: 'lighter', color: 'rgba(100, 99, 99, 0.8)' }}>Rate our communication:</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={`communication-${index}`}
                                filled={index < communicationRating}
                                onClick={() => handleRatingChange('communication', index + 1)}
                            />
                        ))}
                    </div>
                </div>
                {/* Recommendation */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.8)' }}>Would you recommend us?</label>
                    <div>
                        <label htmlFor="safety" style={{ fontSize: '12px', fontWeight: 'lighter', color: 'rgba(100, 99, 99, 0.8)' }}>Share your opinion about recommending us:</label>
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <AiFillLike
                            style={{ fontSize: '30px', color: recommendation === 1 ? 'green' : 'lightgray', marginRight: '5px', cursor: 'pointer' }}
                            onClick={() => handleRatingChange('recommendation', 1)}
                        />
                        <span>Yes</span>
                        <AiFillDislike
                            style={{ fontSize: '30px', color: recommendation === -1 ? 'red' : 'lightgray', marginRight: '5px', cursor: 'pointer' }}
                            onClick={() => handleRatingChange('recommendation', -1)}
                        />
                        <span>No</span>
                    </div>
                </div>
                {/* Praise */}
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="praise" style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.8)' }}>Praise:</label>
                    <div>
                        <label htmlFor="safety" style={{ fontSize: '12px', fontWeight: 'lighter', color: 'rgba(100, 99, 99, 0.8)' }}>Praise our service:</label>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '5px' }}>
                        <button
                            style={{ padding: '8px', marginRight: '10px', fontSize: '20px', borderRadius: '20px', backgroundColor: praise === 'Clean' ? 'rgba(0, 128, 0, 0.2)' : 'transparent', color: 'black', border: '2px solid rgba(0, 128, 0, 0.5)', outline: 'none', cursor: 'pointer' }}
                            onClick={(e) => { e.preventDefault(); handleRatingChange('Clean') }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 128, 0, 0.2)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = praise === 'Clean' ? 'rgba(0, 128, 0, 0.2)' : 'transparent'}
                        >
                            Clean
                        </button>
                        <button
                            style={{ padding: '8px', marginRight: '10px', fontSize: '20px', borderRadius: '20px', backgroundColor: praise === 'Adventurous' ? 'rgba(0, 128, 0, 0.2)' : 'transparent', color: 'black', border: '2px solid rgba(0, 128, 0, 0.5)', outline: 'none', cursor: 'pointer' }}
                            onClick={(e) => { e.preventDefault(); handleRatingChange('Adventurous') }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 128, 0, 0.2)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = praise === 'Adventurous' ? 'rgba(0, 128, 0, 0.2)' : 'transparent'}
                        >
                            Adventurous
                        </button>
                        <button
                            style={{ padding: '8px', marginRight: '10px', fontSize: '20px', borderRadius: '20px', backgroundColor: praise === 'Good Serving' ? 'rgba(0, 128, 0, 0.2)' : 'transparent', color: 'black', border: '2px solid rgba(0, 128, 0, 0.5)', outline: 'none', cursor: 'pointer' }}
                            onClick={(e) => { e.preventDefault(); handleRatingChange('Good Serving') }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 128, 0, 0.2)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = praise === 'Good Serving' ? 'rgba(0, 128, 0, 0.2)' : 'transparent'}
                        >
                            Good Serving
                        </button>
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '20px', fontSize: '20px', cursor: 'pointer', border: 'none', outline: 'none' }}>
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}
