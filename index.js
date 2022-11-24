/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Import:
import FlexBoxLayout from './src/screens/FlexBox/FlexBoxLayout';
import Flex from './src/screens/Flex/Flex';
import DirectionLayout from './src/screens/Direction/DirectionLayout';

AppRegistry.registerComponent(appName, () => Flex);
