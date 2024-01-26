import { Request, Response } from 'express';

import axios from 'axios';

class AuthController {
    private clientId: string;
    private clientSecret: string;
    private redirectUri: string;

    constructor() {
        // Initialize with your LinkedIn app credentials
        this.clientId = process.env.LINKEDIN_CLIENT_ID || '';
        this.clientSecret = process.env.LINKEDIN_CLIENT_SECRET || '';
        this.redirectUri = process.env.LINKEDIN_REDIRECT_URI || '';
    }

    public redirectToLinkedIn = (req: Request, res: Response) => {
        const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${encodeURIComponent(this.clientId)}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=r_liteprofile%20r_emailaddress`;
        res.redirect(linkedInAuthUrl);
    }

    public handleLinkedInCallback = async (req: Request, res: Response) => {
        const code = req.query.code as string;
        if (!code) {
            res.status(400).send('Code not found in LinkedIn callback');
            return;
        }

        try {
            const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: this.redirectUri,
                client_id: this.clientId,
                client_secret: this.clientSecret
            }).toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const accessToken = tokenResponse.data.access_token;

            // Fetch user information from LinkedIn using the access token, or pass the token to the front end

            res.send('Authentication successful');
        } catch (error) {
            res.status(500).send('Error during LinkedIn authentication');
        }
    }
}

export default AuthController;
