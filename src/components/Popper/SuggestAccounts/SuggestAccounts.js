import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
