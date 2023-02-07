'use client'
import { Card, Collapse, Text } from '@nextui-org/react'
import ItemDepositar from '../Components/ItemDepositar'
import Nav from "../Components/Nav/Nav"
import ModalDepositar from '../Components/ModalDepositar'
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast'

export let inputValue 

export default function pageDepositar({image, text, price}) {

  let mlc = 1
  let cup = 0.00625

  return (
    <>
    <Nav/>
<div className='collapse-container'>
    <Card>
    <div className='input-depositar-container'>
    <input onChange={(e) => inputValue = e.target.value} type="text" className='input-depositar' placeholder='$0.00'/>
    </div>
            <Card.Body>
                <Collapse.Group className='collapse-group'>
                <Collapse  title={<h4>Criptomonedas</h4>}>
                    <div className='collapse-content'>
                    <ItemDepositar coin='BTC' wallet='bc1qtfgly3f5mwt3qx23zekln2eln4g980sh8da5sv' image='https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg' text='BTC' price='Bitcoin'/>               
                    <ItemDepositar coin='ETH' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg' text='ETH' price='Etherem'/>
                    <ItemDepositar coin='TRX' wallet='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg' text='TRX' price='Tron'/>
                    <ItemDepositar coin='USDT' wallet='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg' text='USDT' price='TRC-20'/>
                    <ItemDepositar coin='LTC' wallet='ltc1qhkthlnurv6ce8n4uq7qk0pcjyah6f0uerg8acv' image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg' text='LTC' price='Litecoin'/>
                    <ItemDepositar coin='USDC' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg' text='USDC' price='ERC-20'/>
                    <ItemDepositar coin='XRP' wallet='rLshcZJQ6ogQJBNcnEUvsNTyDaLoA4Zq4p' image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg' text='XRP' price='XRP'/>
                    <ItemDepositar coin='DASH' wallet='XasxQKSbSZBfDAXRrRYZLrzXfp9MrtwGNn' image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg' text='DASH' price='Dash'/>
                    <ItemDepositar coin='BNB' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/473558/binance.svg' text='BNB' price='BSC'/>
                    <ItemDepositar coin='BNB' wallet='bnb13jt8k5mldyt7qdr25hfc3mz8588nayt47aqyam' image='https://www.svgrepo.com/show/331309/binance.svg' text='BNB' price='BNB'/>
                    <ItemDepositar coin='SHIB' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png' text='SHIB' price='Shiba'/>
                    <ItemDepositar coin='DOGE' wallet='D771Z5Q4CSPxhJD2VWX9Vqj5EyPmktLKV9' image='https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' text='DOGE' price='Dogecoin'/>                  
                    <ItemDepositar coin='ADA' wallet='addr1q9kqkz9lm8fd53z4sgtrxjkuj4050gg4078y36hgep4n8r6dugfe0f6hh54ep864z0y023el8mxc5875v2re9jtaaukq37s2la' image='https://qvapay.com/img/coins/ada.svg' text='ADA' price='Cardano'/>
                    <ItemDepositar coin='BUSD' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://qvapay.com/img/coins/busd.svg' text='BUSD' price='BSC'/>
                    <ItemDepositar coin='SOL' wallet='EWBm3f1RWTrN68kogjuVcTHJcbWedjUHKq2NDgjZD1Qs' image='https://qvapay.com/img/coins/sol.svg' text='SOL' price='Solana'/>
                    <ItemDepositar coin='CRO' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://qvapay.com/img/coins/cro.svg' text='CRO' price='Cronos'/>
              
                 
                    <ItemDepositar  coin='XTZ' wallet='tz1RZ4Sx7EHbGtk6pP1eA3iftQXUyjEVTCro' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tezos/info/logo.png' text='XTZ' price='Tezos'/>
                    
                    <ItemDepositar coin='MATIC' wallet='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png' text='MATIC' price='Polygon'/>
                  

                    </div>

                    </Collapse>
                    <Collapse title={<h4>Bank</h4>}>
                    <div className='collapse-content'>
                   
                    <ItemDepositar coins={cup} wallet='9205 1299 7508 7231' coin='CUP' image='https://www.svgrepo.com/show/399943/bank.svg' text='CUP' price='Cuba'/>
                    <ItemDepositar coins={mlc} wallet='9225 1299 7129 7756' coin='MLC' image='https://www.svgrepo.com/show/395853/bank.svg' text='MLC' price='Cuba'/>
                   
                    </div>                
                    </Collapse>
 
                    <Collapse title={<h4>E-Wallet</h4>}>
                    
                    <div className='collapse-content'>
                    
                    <ItemDepositar coins={cup} wallet='+5356093822' coin='Etecsa' image='https://qvapay.com/img/coins/etecsa.svg' text='Etecsa' price='Etecsa'/>
                  
                    </div>
                                   
                    </Collapse>
                </Collapse.Group>
               
    <div className='button-depositar'>
  
    <ModalDepositar/>
    </div>
                
            </Card.Body>
        </Card>
    </div>
    <Toaster/>
    </>
  )
}