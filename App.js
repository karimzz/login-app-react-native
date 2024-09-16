import { StatusBar } from 'react-native';
import AppNavigation from './AppNavigation';
import { thems } from './Thems';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor={thems.MainColor} />
    <AppNavigation />
    </>
  );
}

