/* eslint-disable camelcase */

import { StatusBar } from 'react-native'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import theme from './src/theme'

import { SignIn } from './src/screens/SignIn'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SignIn />
    </ThemeProvider>
  )
}
