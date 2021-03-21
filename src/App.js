import React from 'react';
import './App.css';
import User from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";
import friends from './friends.json'
import statisticData from "./components/Statistic/statistical-data.json";
import transactions from "./transactions.json"
import StatisticList from "./components/Statistic/StatisticList";
import FriendsList  from "./components/FriendsList"
import Panel from "./components/Panel.jsx"
import TransactionHistory from "./components/Transaction.jsx"
// import ColorPicker from './components/ColorRand/ColorRand'
       
//         const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
   
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
 <StatisticList title="Upload stats" stats={statisticData} />
      {/* <StatisticList stats={statisticData} />; */}
       
        <FriendsList friends={friends} />
      
 <Panel title = "Task4">
        <TransactionHistory items={transactions} />
     </Panel>
    </div>
  );
}

export default App;
