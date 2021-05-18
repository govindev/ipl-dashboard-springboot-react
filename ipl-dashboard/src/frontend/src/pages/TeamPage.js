import { React } from 'react';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { MatchDetailCard } from '../components/MatchDetailCard'

export const TeamPage = () => {
  return (
    <div className="TeamPage">
      <h1>IPL Dashboard</h1>
      <MatchDetailCard />
      <MatchSmallCard />
      <MatchSmallCard />
      <MatchSmallCard />
    </div>
  );
}

export default TeamPage;
