import { Request, Response } from 'express';

import Postgres from '../services/Postgres';

// TODO: Global types
type NFT = {
    wallet_id: string | null;
    owner_id: string;
    category_id: number;
    name: string;
    description: string;
    img_link: string;
    network: string;
    minted: boolean;
};

class NFTController {
    public async getAllNFTs(req: Request, res: Response) {

        //*  Dummy data, until DB is up and running.
        const nfts: NFT[] = [
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 1,
                name: 'Beach',
                description: 'A serene beach scene.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/beach.webp',
                network: 'Ethereum',
                minted: false,
            },
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 2,
                name: 'Diving',
                description: 'An adventurous diving moment.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/diving.webp',
                network: 'Ethereum',
                minted: false,
            },
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 3,
                name: 'Meditation',
                description: 'A peaceful meditation session.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/meditation.webp',
                network: 'Ethereum',
                minted: false,
            },
            {
                wallet_id: '0xabcdef123456789abcdef123456789abcdef123456',
                owner_id: 'elar@saks.com',
                category_id: 4,
                name: 'Muay Thai',
                description: 'Intense Muay Thai action.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/muay_thai.webp',
                network: 'Ethereum',
                minted: true,
            },
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 5,
                name: 'Pantheon',
                description: 'The majestic Pantheon.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/pantheon.webp',
                network: 'Ethereum',
                minted: false,
            },
            {
                wallet_id: '0x123456789abcdef123456789abcdef123456789a',
                owner_id: 'elar@saks.com',
                category_id: 5,
                name: 'Party',
                description: 'A lively party scene.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/party.webp',
                network: 'Ethereum',
                minted: true,
            },
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 4,
                name: 'Rome',
                description: 'Historic Rome in its glory.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/rome.webp',
                network: 'Ethereum',
                minted: false,
            },
            {
                wallet_id: null,
                owner_id: 'elar@saks.com',
                category_id: 5,
                name: 'Tech Lab',
                description: 'Futuristic tech lab.',
                img_link: 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/tech_lab.webp',
                network: 'Ethereum',
                minted: false,
            },
        ];


        // TODO: remove debug:
        // try {
        //     const { rows } = await Postgres.query('SELECT * FROM NFT');
        //     res.status(200).json(rows);
        // } catch (error) {
        //     console.error('Error fetching NFTs: ', error);
        //     res.status(500).send('Internal Server Error');
        // }
    }
}

export default new NFTController()