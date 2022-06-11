import React from 'react'
import Auth from './pages/Auth'
import { ChainId , ThirdwebProvider } from '@thirdweb-dev/react'

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby} >

    
    <Auth/>

    
    </ThirdwebProvider>
  )
}

export default App