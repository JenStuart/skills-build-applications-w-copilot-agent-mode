import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboard data:', data);
        setLeaders(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, idx) => (
          <li key={idx}>{leader.name || JSON.stringify(leader)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
