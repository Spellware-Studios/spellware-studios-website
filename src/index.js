import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { I18nextProvider } from 'react-i18next';

// top level component
import App from './App'

// i18next localization config 
import i18n from "./i18n";

// Export top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
    const target = document.getElementById('root')

    const renderMethod = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render

    const render = Comp => {
        renderMethod(
            <AppContainer>
                <I18nextProvider i18n={i18n}>
                    <Comp />
                </I18nextProvider>
            </AppContainer>,
            target
        )
    }

    // Render!
    render(App)

    // Hot Module Replacement
    if (module && module.hot) {
        module.hot.accept('./App', () => {
            render(App)
        })
    }
}
