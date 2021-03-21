import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => (
    <ul className="friend-list"> {
        friends.map(({ avatar, name, id, isOnline }) => (<li key={id}>
    <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{ name}</p>
        </li>))
    }
 
</ul>
)

FriendsList.defaultProps ={
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763704.svg'
}
FriendsList.prototype={ friends:PropTypes.exact({
        id:PropTypes.number.isRequired,
        isOnline:PropTypes.bool.isRequired,
        avatar:PropTypes.string,
        name:PropTypes.string.isRequired, 
    })}


export default FriendsList;