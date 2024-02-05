import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the response data to improve type checking and IntelliSense
type ResponseData = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // Extract the `id` from the query string
    const { id } = req.query;

    // Your code for handling /nft/[id] requests
    res.status(200).json({ message: `Fetching NFT with ID: ${id}` });
}
