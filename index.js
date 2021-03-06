/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import rootContainer from './src/navigation'
import app from './src/core/app'
import {name as appName} from './app.json';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



import Amplify from 'aws-amplify'
import awsconfig from './src/config/aws-exports'
Amplify.configure(awsconfig)

//AppRegistry.registerComponent(appName, () => rootContainer);
AppRegistry.registerComponent(appName, () => app);
