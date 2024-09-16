"use client";
import { Button } from './button';
import React, { useState } from 'react';

interface CardUIProps {
    publicKey: string;
    privateKey: string;
    accountNumber: string; 
}

const CardUI: React.FC<CardUIProps> = ({ publicKey, privateKey, accountNumber }) => {
    const [showPrivateKey, setShowPrivateKey] = useState(false); 

    return (
        <div className="w-full max-w-7xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            
            <h2 className="text-xl font-bold mb-4">{accountNumber}</h2>

           
            <div className="mt-4 ">
                <p className="text-sm text-gray-300">Public Key:</p>
                <p className="text-base font-bold text-gray-900 dark:text-white overflow-auto ">{publicKey}</p>
            </div>

          
            <div className="mt-4  flex flex-col">
                <p className="text-sm text-gray-300">Private Key:</p>
                <p className="text-base font-bold text-gray-900 dark:text-white overflow-auto">
                    {showPrivateKey ? privateKey : '********'}
                </p>
                <Button
                    onClick={() => setShowPrivateKey(!showPrivateKey)}
                    className="flex items-center text-sm p-2 mt-5"
                >
                    {showPrivateKey ? 'Hide Private Key' : 'Show Private Key'}
                </Button>
            </div>
        </div>
    );
};

export default CardUI;