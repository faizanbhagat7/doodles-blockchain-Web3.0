import React from 'react'
import { useMetamask , useDisconnect , useAddress } from '@thirdweb-dev/react'
import Header from './Header.js'
import Main from './Main'
import './Auth.css'
import toast , {Toaster} from 'react-hot-toast'


const Auth = () => {

    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnectWithMetamask= useDisconnect();
   
    const notify = (toastHandler = toast) =>{ toastHandler.success('Wallet Connected ', 
    {
      style: {
        background : '#15201b',
        color : 'white',
        fontFamily:'apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontSize : '1.5rem'
    }, 
  }
    )
    }
    
    
  

  return (
    <>
    {
        address ?
            <div>
               
                  <Header/>
                  
                  <Toaster position='top-center' reverseOrder={false} />
                  <Main/>
               

                



                   

             

            </div>
                    :
            <div className='login'>
              <div>
              <button className='connectbtn'
               onClick={
                 ()=>{
                    connectWithMetamask();
                    notify();
                  }
               }>
                    Connnect with Wallet 
              </button>
             
              </div>

              <div>
              <h2 className='logininfo'>
                Connect with Metamask Wallet in order to access this application
              </h2>

                  </div>

            </div>
    }
    </>
  )
}

export default Auth