type NFT = {
    nft_id: string;
    wallet_id: string | null;
    owner_id: string;
    category_id: number;
    name: string;
    description: string;
    img_link: string;
    network: string;
    minted: boolean;
};


type User = {
    email: string;
    name: string;
    image: string;
};

type Session = {
    expires: string,
    user: User
}
