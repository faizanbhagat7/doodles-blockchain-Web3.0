import React, { useState } from 'react'
import './Selected.css'



const Main = ({ info  }) => {


    return (
      <>

        <div className="mainheader" >

          <div className='nftimage'>

            <img src={info[0]?.metadata?.image} alt="" />
          </div>
          <div className='nftinfo'>
            <div className='nftname'>
              <h1>

                {info[0]?.metadata?.name}  

              </h1>
            </div>



            <div className='nftname'>
                <h1 className='dot'> #{info[1]}</h1>
            </div>



            <div className='nftprice'>
              <div className='ethimg'>
                <img src='/assets/weth.svg' alt="error" />
              </div>
              <div className='price'>
                <h1>{info[0]?.metadata?.attributes[0]?.value}</h1>
              </div>
            </div>

          
          </div>

          <div className='otherbuttons'>


            <div className='button-85' >
              <a href='https://testnets.opensea.io/collection/doodesfaizanbhagat' target='_main'>
                <div className='flex'>
                  <div className='btnlogo'>
                    <img src='https://testnets.opensea.io/static/images/logos/opensea.svg' alt="error" />
                  </div>
                  <div className='link'>
                    Verify collection on opensea
                  </div>
                </div>
              </a>
            </div>


            <div className='button-85' >
              <a href='https://thirdweb.com/dashboard/rinkeby/nft-collection/0x9f8b8902466D9f3393B860Ed817e1dEDdD071507' target='_main'>
                <div className='flex'>
                  <div className='btnlogo'>
                    <img src='data:image/jpeg;base64,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' alt="error" />
                  </div>
                  <div className='link'>
                    Verify collection on thirdweb
                  </div>
                </div>
              </a>
            </div>



          </div>

        </div>



      </>
    )
  }

  

export default Main