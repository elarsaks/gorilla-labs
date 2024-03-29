
/**
 * Fetches a list of NFTs from the API.
 * @returns A promise that resolves to an array of NFT objects.
 */
const fetchNFTs = async (): Promise<NFT[]> => {
    try {
        const response = await fetch('http://gorilla-labs-api:4000/nfts');
        if (!response.ok) {
            throw new Error(`Error fetching NFTs: ${response.statusText}`);
        }
        const nfts: NFT[] = await response.json();
        return nfts;
    } catch (error) {
        console.error('Failed to fetch NFTs:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export default fetchNFTs;