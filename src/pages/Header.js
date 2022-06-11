import React from 'react';
import './Header.css';
import { useAddress, useDisconnect } from '@thirdweb-dev/react'


const Header = () => {

    const address = useAddress();
    const disconnectWithMetamask = useDisconnect();
 

    return (
        <>
            <div className="main">

                <div className='logo'>
                    <img src="/assets/cryptopunk-logo.png" />
                </div>

                <div className="searchbar">
                    <div className='searchlogo'>
                        <img src="/assets/search.png" />
                    </div>
                    <div className='input'>
                        <input type="text" placeholder='Search for NFT , Assets and Marketpalce' />
                    </div>
                </div>

                <div className='others'>
                    <p >
                     <div className='network'>
                         <div className='networkimage'>          
                    <img src="/assets/weth.svg" />

                    </div>

                    <div className='Rinkeby'>
                     <h3>Rinkeby</h3>
                    </div>
                    <div className='verifiedimage' >
                      <img src="/assets/check.png" />
                    </div>
                    </div>

                            <div>
                       <h3 className='address'> {address.substring(0,5)+'...'+address.substring(address.length-5)}  </h3>

                       </div>


                    </p>
                   
                   <p>
                    <button className='disconnectbtn' onClick={disconnectWithMetamask}>
                        Disconnect
                    </button>
                    </p>
                </div>

                   

            </div>
        </>
    )
}

export default Header