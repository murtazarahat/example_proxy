import { Admin, Resource, createMuiTheme } from 'react-admin';
import customDataProvider from './providers/ExpressDataProvider';
import { RigsList } from './components/RigsList';
import { purple } from '@mui/material/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: purple[500],
    },
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

export const App = () => (
  <>
    <Admin
      theme={theme}
      dataProvider={customDataProvider}
      title="Clear Path Admin Panel"
    >
      <Resource
        name="rigs/some"
        options={{ label: 'Rigs Search By Time' }}
        list={RigsList}
      />
    </Admin>
  </>
);
