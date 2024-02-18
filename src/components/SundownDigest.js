import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SundownDigest = () => {
  const [latestDigest, setLatestDigest] = useState(null); // Use null to represent no data initially
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDigest = async () => {
      try {
        const response = await axios.get('https://cryptonews-api.com/api/v1/sundown-digest?page=1&token=vyd8neseltan9wx6hlofqqlepks4szz88wjfgrra');
        // Assuming the latest digest is the first element of the returned array
        const latest = response.data.data[0]; // Get only the latest digest
        setLatestDigest(latest); // Set state with the latest digest
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load the Sundown Digest. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchDigest();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!latestDigest) return <p>No digest found.</p>; // Handle case where no digest is available

  return (
    <div className="digest-container"> {/* Apply container styles */}
      <h2>Sundown Digest</h2>
      <div>
        <h3 className="digest-headline">{latestDigest.headline}</h3> {/* Apply headline styles */}
        <p className="digest-text">{latestDigest.text}</p> {/* Apply text styles */}
      </div>
    </div>
  );
};

export default SundownDigest;

