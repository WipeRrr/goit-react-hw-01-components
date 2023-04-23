import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({id,name,avatar,isOnline}) => (
            <FriendListItem key ={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
            >
                
           </FriendListItem>
       ))}
        
  </ul>;
};



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};