import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
          <span className={clsx(css.status, {
              [css.status__green]: isOnline,
          })}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};