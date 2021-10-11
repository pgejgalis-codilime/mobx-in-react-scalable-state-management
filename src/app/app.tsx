import { lazy, Suspense } from 'react';
import { provider } from 'react-ioc';
import { Theme } from './_common/components/theme/theme';
import { ThemeDataStore } from './_common/stores/theme.data-store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RootPaths } from '@/app/_common/navigation/root-paths';

const Dashboard = lazy(() => import('./dashboard/dashboard'));
const Users = lazy(() => import('./users/users'));

export const App = provider(
  ThemeDataStore,
  //
)(() => {
  return (
    <Theme>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route key="users" exact path={RootPaths.USERS} component={Users} />
            <Route key="dashboards" path={RootPaths.DASHBOARD} component={Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </Theme>
  );
});
