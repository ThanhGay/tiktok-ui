import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '@/config';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserWithLeftArrowIcon,
    UserWithLeftArrowActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserIcon,
    UserActiveIcon,
} from '@/assests/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<HomeActiveIcon width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserWithLeftArrowIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<UserWithLeftArrowActiveIcon width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<UserGroupIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<UserGroupActiveIcon width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<CompassActiveIcon width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<LiveActiveIcon width="3.2rem" height="3.2rem" />}
                />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={<UserIcon width="3.2rem" height="3.2rem" />}
                    activeIcon={<UserActiveIcon width="3.2rem" height="3.2rem" />}
                />
            </Menu>
            <h3>Suggest account</h3>
        </aside>
    );
}

export default Sidebar;
