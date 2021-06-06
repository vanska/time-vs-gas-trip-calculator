import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { Global } from '@emotion/react'
import { theme } from '../../styles/theme'
import { Helmet } from 'react-helmet'
export interface RootWrapperProps {
  children: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"
        />
      </Helmet>
      <Global
        styles={{
          'html,button,input': {
            fontFamily: 'Roboto',
            fontSize: '1rem',
            color: theme.colors.text.body,
          },
          body: {
            background: theme.colors.background.grey,
            padding: 0,
            margin: 0,
          },
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '*,:after:before': {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          },
          '*': {
            userSelect: 'none',
          },
          button: {
            backgroundColor: 'transparent',
            outline: 0,
            border: 0,
          },
          p: {
            padding: 0,
            margin: 0,
          },
          input: {
            '::-webkit-outer-spin-button,::-webkit-inner-spin-button ': {
              WebkitAppearance: 'none',
              margin: 0,
            },
          },
          main: {
            overflowY: 'hidden',
            height: '100%',
            cursor: 'default',
          },
        }}
      />
      {children}
    </Provider>
  )
}

export default RootWrapper
