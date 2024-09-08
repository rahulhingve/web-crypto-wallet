"use client";
import { Button } from './button';
import React, { useState } from 'react';

interface CardUIProps {
    mnemonic: string;
    publicKey: string;
    privateKey: string;
}

const CardUI: React.FC<CardUIProps> = ({ mnemonic, publicKey, privateKey }) => {
    const [showPhrases, setShowPhrases] = useState(true);
    const [showPrivateKey, setShowPrivateKey] = useState(false);


    const renderMnemonicGrid = () => {
      
        const words = mnemonic ? mnemonic.split(' ') : [];
        const grid = [];
        for (let i = 0; i < words.length; i += 4) {
            grid.push(words.slice(i, i + 4));
        }
        return grid;
    };

    return (
        <div>

       
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4">Your Wallet Information</h2>


            <div className="my-4 space-y-3">
                {renderMnemonicGrid().map((row, index) => (
                    <ul key={index} className="flex space-x-2">
                        {row.map((word, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        {showPhrases ? word : '****'}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

         
            <button
                onClick={() => setShowPhrases(!showPhrases)}
                className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            >
                {showPhrases ? 'Hide Mnemonic Phrases' : 'Show Mnemonic Phrases'}
            </button>

            
        </div>
        <div>
        
            <div className="mt-4 max-w-md">
                <p className="text-sm text-gray-300">Public Key:</p>
                <p className="text-base font-bold text-gray-900 dark:text-white">{publicKey}</p>
            </div>

            <div className="mt-4 max-w-md flex flex-col ">
                <p className="text-sm text-gray-300">Private Key:</p>
                <p className="text-base font-bold text-gray-900 dark:text-white overflow-auto ">
                    {showPrivateKey ? privateKey : '********'}
                </p>
                <Button
                    onClick={() => setShowPrivateKey(!showPrivateKey)}
                    className="flex  items-center text-sm p-2 mt-5"
                >
                    {showPrivateKey ? 'Hide Private Key' : 'Show Private Key'}
                </Button>
            </div>
        </div>
        </div>
        
    );
};

export default CardUI;
