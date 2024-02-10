type NFT = {
    category_id: number;
    description: string;
    img_link: string;
    minted: boolean;
    name: string;
    network: string;
    nft_id: string | null;
    owner_id: string;
    wallet_id: string | null;
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
