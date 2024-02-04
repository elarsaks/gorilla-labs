import express, { Request, Response } from 'express';

import NFTController from '../controllers/NFTController'

// TODO: Routes
// import AuthController from './controllers/AuthController';
// import ProfileController from './controllers/ProfileController';
// import UploadController from './controllers/UploadController';
// import MintController from './controllers/MintController';
// import BuyController from './controllers/BuyController';
// import SellController from './controllers/SellController';


const router = express.Router();

// Placeholder handler functions
const handleAuth = (req: Request, res: Response) => res.send('Auth Route');
const handleTest = (req: Request, res: Response) => res.send('OK!')
const handleProfile = (req: Request, res: Response) => res.send('Profile Route');
const handleUpload = (req: Request, res: Response) => res.send('Upload Route');
const handleMint = (req: Request, res: Response) => res.send('Mint Route');
const handleBuy = (req: Request, res: Response) => res.send('Buy Route');
const handleSell = (req: Request, res: Response) => res.send('Sell Route');

// Route definitions
router.get('/auth', handleAuth);
router.get('/test', handleTest)
router.get('/nfts', NFTController.getAllNFTs);
router.get('/profile', handleProfile);
router.post('/upload', handleUpload);
router.post('/mint', handleMint);
router.post('/buy', handleBuy);
router.post('/sell', handleSell);

export default router;
