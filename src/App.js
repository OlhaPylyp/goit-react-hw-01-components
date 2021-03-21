import React from 'react';
import './App.css';
import User from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";
import friends from './friends.json'
import statisticData from "./statistical-data.json";
import transactions from "./transactions.json"
import StatisticList from "./components/StatisticList.jsx";
import FriendsList  from "./components/FriendsList"
import Panel from "./components/Panel.jsx"
import TransactionHistory from "./components/Transaction.jsx"

function App() {
  return (
    <div >
      <h2 className="title">User Profile</h2>
      <User
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Panel title = "Task 2">
 <StatisticList title="Upload stats" stats={statisticData} />
      {/* <StatisticList stats={statisticData} />; */}
        </Panel>
        <FriendsList friends={friends} />
      
 <Panel title = "Task4">
        <TransactionHistory items={transactions} />
     </Panel>
    </div>
  );
}

export default App;
