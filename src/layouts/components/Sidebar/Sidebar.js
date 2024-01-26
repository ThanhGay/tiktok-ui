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
    LiveIcon,
    LiveActiveIcon,
} from '@/assests/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserWithLeftArrowIcon />}
                    activeIcon={<UserWithLeftArrowActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
