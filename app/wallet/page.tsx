import CreateWallet from '@/components/component/CreateWallet';

const page = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const blockchain = searchParams.blockchain || 'solana'; // Default to Solana if no query param is provided

    return <CreateWallet blockchain={blockchain} />;
};

export default page;
