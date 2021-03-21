import PropTypes from 'prop-types';
import '../Profile/Profile.css'
const User =({ name, tag, location, avatar, likes, views,followers}) => 
(
    <div className="container">
   <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
            <p className="name">{ name}</p>
            <p className="info">@{ tag}</p>
    <p className="info">{location}</p>
  </div>

  <ul className="stats">
    <li className="stats__item">
      <span className="label">Followers</span>
                <span class="quantity">{ followers}</span>
    </li>
    <li className="stats__item">
      <span className="label">Views</span>
      <span className="quantity">{ views}</span>
    </li>
    <li className="stats__item">
      <span className="label">Likes</span>
      <span className="quantity">{ likes}</span>
    </li>
  </ul>
    </div>
    </div> 
)

User.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string.isRequired,
  //price: PropTypes.number,
  tag: PropTypes.string.isRequired, //default
  avatar: PropTypes.string.isRequired,
   stats:PropTypes.number.isRequired,

}
export default User;