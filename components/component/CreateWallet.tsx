"use client";
import React, { useState } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import CardUI from '../ui/CardUI';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';
import { ethers } from 'ethers';

const CreateWallet = ({ blockchain }: { blockchain: string }) => {
    const [mnemonic, setMnemonic] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const generateWallet = () => {
    
        const generatedMnemonic = generateMnemonic();
        setMnemonic(generatedMnemonic);

        const seed = mnemonicToSeedSync(generatedMnemonic);

        let derivedPublicKey = '';
        let derivedPrivateKey = '';

  
        if (blockchain === 'solana') {
     
            const path = `m/44'/501'/0'/0'`; 
            const derivedSeed = derivePath(path, seed.toString('hex')).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            derivedPublicKey = keypair.publicKey.toBase58();
            derivedPrivateKey = Buffer.from(secret).toString('hex');
        } else if (blockchain === 'ethereum') {
            
            const wallet = ethers.Wallet.fromMnemonic(generatedMnemonic);
            derivedPublicKey = wallet.address;
            derivedPrivateKey = wallet.privateKey;
        }

      
        setPublicKey(derivedPublicKey);
        setPrivateKey(derivedPrivateKey);

   
        localStorage.setItem('mnemonic', generatedMnemonic);
        localStorage.setItem(`${blockchain}_publicKey`, derivedPublicKey);
        localStorage.setItem(`${blockchain}_privateKey`, derivedPrivateKey);
    };

    return (
        <div>
            <div className="flex flex-col min-h-screen bg-[#1c1c1e] text-[#e0e0e0] font-sans">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                   
                    <CardUI mnemonic={mnemonic} publicKey={publicKey} privateKey={privateKey} />
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">Create a {blockchain} Wallet</h1>
                        <button onClick={generateWallet} className="btn btn-primary">
                            Generate Wallet
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default CreateWallet;
