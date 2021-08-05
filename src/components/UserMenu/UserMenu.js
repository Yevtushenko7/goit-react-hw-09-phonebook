import React, {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from '../UserMenu/Default_profile.jpg';

export default function UserMenu() {
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(authOperations.logout()),
        [dispatch]);
    
    return (
        <div className={styles.userMenuContainer}>
            <img src={defaultAvatar} alt='avatar' width='32' className={styles.avatar} />
            <span className={styles.userName}> Welcome {name}</span>
            <button type="button" onClick={onLogout} className={styles.btn} > Logout</button>
        </div>
    );

};

// const UserMenu = ({ avatar, name, onLogout }) => (
//     <div className={styles.userMenuContainer}>
//         <img src={avatar} alt='avatar' width='32' className={styles.avatar} />
//         <span className={styles.userName}> Welcome {name}</span>
//         <button type="button" onClick={onLogout} className={styles.btn} > Logout</button>
//     </div>

// );

// const mapStateToProps = (state) => ({
//     name: authSelectors.getUserName(state),
//     avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//     onLogout: authOperations.logout
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);