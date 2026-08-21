import { registerRootComponent } from 'expo';

import Home from './src/pages/Home';
import Scrollist from './src/pages/ScrollList';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Home);
registerRootComponent(Scrollist);