import routesConfig from '@/config/routes';

// Layouts
import { HeaderOnly } from '@/components/Layouts';

// Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

// Public route: can access without login
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Private route: can't access without login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
