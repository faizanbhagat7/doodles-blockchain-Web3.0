import React, { useState, useEffect } from 'react'
import './Main.css';
import { useNFTCollection } from '@thirdweb-dev/react'
import Selected from './Selected.js'


const Cardcollection = () => {

    const [list, setList] = useState([])
    const [selectednft, setSelectednft] = useState([])
    const nftCollection = useNFTCollection('0x9f8b8902466D9f3393B860Ed817e1dEDdD071507');
    
    useEffect(() => {
        
        const data = async () => {
            
            const nfts = await nftCollection.getAll()
            
            setList(nfts)

            setSelectednft([nfts[0],0])

        }
        data()
    }, [])
    



    return (
        <>
        {
            list.length !== 0  ?

            <div>

    <Selected info={selectednft} />


            <div className='nftlist'>

                {
                    list.map((item, key) => {

                        //  find index of nft based on name


                        const index = list.indexOf(item)
                        key = index
                        return (

                            <div className='collectionmain' onClick={()=>setSelectednft([item,key])}>
                                <div className='image'>
                                    <img src={item.metadata.image} alt='image' />
                                </div>

                                <div className='index'>
                                    <h2>{'#' + ' '+ key}</h2>
                                </div>

                                <div className='name'>
                                    <h2>{item.metadata.name}</h2>
                                </div>


                                <div className="info">
                                    <div className='ethimage'>
                                        <img src="/assets/weth.svg" />
                                    </div>
                                    <div className="price">
                                        <h2>{item.metadata.attributes[0].value}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            :
            // Loading animation
            <div className='loader'>

                <div>
                  <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div> 
                
            </div>


            }
        </>
    )

}

export default Cardcollection