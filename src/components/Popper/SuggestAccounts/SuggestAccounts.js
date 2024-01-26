import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, showInfo = false }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem showInfo={showInfo} />
            <AccountItem showInfo={showInfo} />
            <AccountItem showInfo={showInfo} />
            <AccountItem showInfo={showInfo} />
            <AccountItem showInfo={showInfo} />
            <AccountItem showInfo={showInfo} />

            <p className={cx('see-all-btn')}>See all</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
