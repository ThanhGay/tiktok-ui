import { GoOnTopIcon } from '@/assests/icons';
import { useEffect, useState } from 'react';

function Home() {
    const [showGoOnTop, setShowGoOnTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                // Show
                setShowGoOnTop(true);
            } else {
                // Hide
                setShowGoOnTop(false);
            }

            // setShowGoOnTop(window.scrollY >= 200)
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h2 style={{ height: 2000 }}>Home page</h2>
            {showGoOnTop && (
                <button
                    style={{
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    <GoOnTopIcon width="1.6rem" height="1.6rem" />
                </button>
            )}
        </div>
    );
}

export default Home;
