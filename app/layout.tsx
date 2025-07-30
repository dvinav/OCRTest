'use client'

import GlobalStyles from '@mui/joy/GlobalStyles'

type CT = React.FC<{
  children: React.ReactNode
}>

const RootLayout: CT = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <GlobalStyles
          styles={{
            'html, body': {
              padding: 0,
              margin: 0,
              width: '100%',
              height: '80%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
