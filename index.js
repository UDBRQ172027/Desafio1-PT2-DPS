import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import { 
    DefaultTheme,
    Provider as PaperProvider,
    ThemeProvider 
} from 'react-native-paper';

import App from './App';
import ThemeColor from './src/utils/ThemeColor';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: ThemeColor.primary,
        background: ThemeColor.background
    }
}

export default function Main() {
    const [nightMode, setNightmode] = useState(false);

    return (
        <PaperProvider theme={nightMode ? DarkTheme : theme}>
            <ThemeProvider theme={nightMode ? DarkTheme : theme}>
                <App />
            </ThemeProvider>
        </PaperProvider>
    );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
