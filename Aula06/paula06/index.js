import { registerRootComponent } from 'expo';

import Home from './src/pages/Home2';
import Home2 from './src/pages/Home2';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Home2);
