import PropTypes from 'prop-types';
const User =({ name, tag, location, avatar, likes, views,followers}) => 
(
   <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
            <p className="name">{ name}</p>
            <p className="tag">@{ tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                <span class="quantity">{ followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{ views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{ likes}</span>
    </li>
  </ul>
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