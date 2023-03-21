/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

const NFTDropPage = () => {

  const connectWithMetamusk = useMetamask();
  const address = useAddress();
  const disconnectWallet = useDisconnect();
  console.log(address);

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* Left */}
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
              <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
                <img 
                    src="https://links.papareact.com/8sg" 
                    alt="main" 
                    className='w-44 rounded-xl object-cover lg:h-80 lg:w-64' 
                    />
              </div>
                  
              <div className="text-center p-5 space-y-2">
                <h1 className="text-4xl font-bold text-white">PAPAFAM APES</h1>
                <h2 className="text-lg text-gray-300">A collection of PAPAFAM Apes who live & breathe React!!</h2>
              </div>    
            </div>
        </div>

        {/* Right */}
        <main className="flex flex-1 flex-col p-12 lg:col-span-6">
          {/* Header */}
          <header className="flex justify-between items-center">
            <h1 className='w-52 cursor-pointer text-lg font-extralight sm:w-80'>
              The{' '} 
              <span className='font-extrabold underline decoration-pink-600/50'>
                PAPAFAM
              </span>{' '} 
              NFT Market Place
            </h1>

            <button 
              className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-2 lg:text-base"
              onClick={() => address ? disconnectWallet() : connectWithMetamusk()}
            >
              {address ? 'Sign out' : 'Sign in'} 
            </button>
          </header>

          <hr className="my-2 border border-gray-100" />

          {address && <p className="text-center text-sm text-rose-400">{`You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.lenght - 5)}`}</p>}

          {/* Content */}
          <div className="mt-10 flex flex-1 flex-col items-center space-y-3 lg:space-y-0 lg:justify-center">
            <img src="https://links.papareact.com/bdy" alt="" className="w-80 object-cover pb-10 lg:h-40" />
            
            <h1 className="text-3xl font-bold text-center lg:text-4xl lg:font-extrabold">The PAPAFAM Ape Coding Club | NFT</h1>
            
            <p className="pt-2 text-xl text-green-500">13 / 21 NFT`s claimed</p>
          </div>

          {/* Mint Button */}
          <button className="h-12 w-full bg-red-600 text-white rounded-full mt-10 font-bold">Mint NFT [0.01 ETH]</button>
        </main>
    </div>
  )
}

export default NFTDropPage;