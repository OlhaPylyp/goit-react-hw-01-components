import React from 'react';
import './App.css';
import User from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";
import friends from './components/Friend/friends.json'
import statisticData from "./components/Statistic/statistical-data.json";
import transactions from "./components/Transaction_history/transactions.json"
import StatisticList from "./components/Statistic/StatisticList";
import FriendsList  from "./components/Friend/FriendsList"
 import Panel from "./components/Panel.jsx"
import TransactionHistory from "./components/Transaction_history/Transaction.jsx"

   
function App() {
  return (
    <div >
          {/* <ColorPicker options={colorPickerOptions} /> */}
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
      
      <h2 className="title">Statistic</h2>
      <Panel title="Upload stats">
 <StatisticList  stats={statisticData} /></Panel>
      {/* <StatisticList stats={statisticData} />; */}
       <h2 className="title">Friends List</h2>
        <FriendsList friends={friends} />
      
  <h2 className="title">Transaction History</h2>
        <TransactionHistory items={transactions} />
 
    </div>
  );
}

export default App;
