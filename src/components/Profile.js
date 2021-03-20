import React from 'react';
import PropTypes from 'prop-types';
const User =({ name, tag, location, avatar, stats }) => 
(
   <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
            <p class="name">{ name}</p>
            <p class="tag">@{ tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
                <span class="quantity">{ stats}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{ stats}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{ stats}</span>
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