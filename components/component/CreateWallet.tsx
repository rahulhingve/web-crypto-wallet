"use client"
import React, { useState } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import CardUI from '../ui/CardUI';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';
import {  Wallet, HDNodeWallet } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import ECPairFactory from 'ecpair';
import { Button } from '../ui/button';

const ECPair = ECPairFactory(ecc);
const bip32 = BIP32Factory(ecc);

const CreateWallet = ({ blockchain }: { blockchain: string }) => {
    const [mnemonic, setMnemonic] = useState('');
    const [wallets, setWallets] = useState<{ publicKey: string; privateKey: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const generateWallet = async () => {
        let generatedMnemonic = mnemonic;

        if (!generatedMnemonic) {
           
            generatedMnemonic = generateMnemonic();
            setMnemonic(generatedMnemonic);
        }

        const seed = await mnemonicToSeedSync(generatedMnemonic); 

        let derivedPublicKey = '';
        let derivedPrivateKey = '';

        if (blockchain === 'solana') {
           
            const path = `m/44'/501'/${currentIndex}'/0'`; 
            const derivedSeed = derivePath(path, seed.toString('hex')).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            derivedPublicKey = keypair.publicKey.toBase58();
            derivedPrivateKey = Buffer.from(secret).toString('hex');

        } else if (blockchain === 'ethereum') {
           
            const derivationPath = `m/44'/60'/${currentIndex}'/0'`; 
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            derivedPrivateKey = child.privateKey;
            const ethWallet = new Wallet(derivedPrivateKey);
            derivedPublicKey = ethWallet.address;

        } else if (blockchain === 'bitcoin') {
            
            const path = `m/44'/0'/${currentIndex}'/0/0`; 
            const node = bip32.fromSeed(seed); 

            const child = node.derivePath(path);
            const privateKey = child.privateKey;

           
            const publicKeyBuffer = Buffer.from(child.publicKey);

           
            const { address } = bitcoin.payments.p2pkh({
                pubkey: publicKeyBuffer,
                network: bitcoin.networks.bitcoin,
            });

            
            const keyPair = ECPair.fromPrivateKey(privateKey, { compressed: true });
            derivedPrivateKey = keyPair.toWIF(); 

            derivedPublicKey = address || '';
        }

        
        setWallets([...wallets, { publicKey: derivedPublicKey, privateKey: derivedPrivateKey }]);
        setCurrentIndex(currentIndex + 1);

      
        localStorage.setItem('mnemonic', generatedMnemonic);
        localStorage.setItem(`${blockchain}_wallets`, JSON.stringify(wallets));
    };

    return (
        <div>
            <div className="flex flex-col min-h-screen bg-[#1c1c1e] text-[#e0e0e0] font-sans">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                   
                    {wallets.map((wallet, index) => (
                        <CardUI key={index} mnemonic={mnemonic} publicKey={wallet.publicKey} privateKey={wallet.privateKey} />
                    ))}

                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">Create a {blockchain} Wallet</h1>
                        <Button onClick={generateWallet} className="btn btn-primary">
                            Generate Wallet
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default CreateWallet;