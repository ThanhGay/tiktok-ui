import config from '@/config';

// Layouts
import { HeaderOnly } from '@/layouts';

// Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import Live from '@/pages/Live';
import Explore from '@/pages/Explore';
import Friends from '@/pages/Friends';
import Settings from '@/pages/Settings';
import Feedback from '@/pages/Feedback';
import Coin from '@/pages/Coin';

// Public route: can access without login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.coin, component: Coin },
];

// Private route: can't access without login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
