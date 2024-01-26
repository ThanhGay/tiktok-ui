import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './SuggestAccounts.module.scss';
import Image from '@/components/Image';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ showInfo }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <AccountPreview />
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                offset={[-20, 0]}
                delay={[800, 0]}
                placement="bottom"
                render={showInfo ? renderPreview : () => {}}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e1cb63ca54a99a5bc712a3be99d48503~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706446800&x-signature=me1DP5FUP1I7vf%2FLd64hxQffgR4%3D"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            Quoc Nguyen Phu
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>QuocNguyen</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
