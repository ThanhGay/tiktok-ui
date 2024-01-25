// debounce là một phương pháp giúp cải thiển performance
// sử dụng debounce sẽ giảm thiểu số lần ứng dụng phải xử lý những sự kiện liên tục (search box)
// Debounce function buộc một hàm phải đợi một khoảng thời gian nhất định trước khi nó được chạy lại
// hàm này được xây dựng để giới hạn số lần hàm được gọi trong một khoảng thời gian

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
