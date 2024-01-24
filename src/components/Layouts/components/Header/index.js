import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '@/assests/images';
import Image from '@/components/Image';
import Menu from '@/components/Popper/Menu';
import SearchBox from '../SearchBox';
import Button from '@/components/Button';
import {
    CircleQuestionIcon,
    EllipsisVerticalIcon,
    Gear,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    TiktokCoinIcon,
    UploadIcon,
    UserIcon,
} from '@/assests/icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean',
                },
            ],
        },
    },
    {
        icon: <CircleQuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                // console.log(menuItem.code);
                break;
            default:
        }
    };

    const USER_MENU = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <TiktokCoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <Gear />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo.default} alt="TikTok Logo" />
                {/* Search */}
                <SearchBox />
                <div className={cx('actions')}>
                    {!currentUser ? (
                        // Before login
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    ) : (
                        // After login
                        <>
                            <Tippy delay={200} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {!currentUser ? (
                            // Before login
                            <button className={cx('more-btn')}>
                                <EllipsisVerticalIcon />
                            </button>
                        ) : (
                            // After login
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d380a4eb3184c7e2ff7884006451cab1~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706187600&x-signature=4Oc5Hgz6YljchadIv6bCCetL%2FAo%3D"
                                alt="avatar user"
                            />
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
