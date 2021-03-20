import React from 'react';
import './App.css';
import User from "./components/Profile";
import user from "./user.json";
import statisticData from "./statistical-data.json";
import StatisticList from "./components/StatisticList";

function App() {
  return (
    <div >
      <h2>Task 1</h2>
      <User
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats.followers}
      />
 <StatisticList title="Upload stats" stats={statisticData} />;
<StatisticList stats={statisticData} />;
    </div>
  );
}

export default App;
