import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '@/assests/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback = images.defaultImage, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            alt={alt}
            src={_fallback || src}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
