import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '@/components/Popper';

import styles from './AccountPreview.module.scss';
import Button from '@/components/Button';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div>
            <PopperWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <Image className={cx('avatar')} src="" alt="" />
                        <Button className={cx('follow-btn')} primary>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('body')}>
                        <h4 className={cx('nickname')}>
                            Quoc Nguyen Phu
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>QuocNguyen</p>
                    </div>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>429.2M </strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default AccountPreview;
