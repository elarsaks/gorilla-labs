import { Request, Response } from 'express';

import Postgres from '../services/Postgres';

class NFTController {
    public async getAllNFTs(req: Request, res: Response) {
        try {
            const { rows } = await Postgres.query('SELECT * FROM NFT');
            res.status(200).json(rows);
        } catch (error) {
            console.error('Error fetching NFTs: ', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new NFTController()