-- Insert Users
INSERT INTO Users (email, name) VALUES
('elar@saks.com', 'Elar Saks');

-- Insert Categories
INSERT INTO Category (name) VALUES
('Animals'),
('Art'),
('Photography'),
('Sports'),
('Technology'),
('Travel');

-- Insert Wallets
INSERT INTO Wallet (wallet_id, user_id) VALUES
('0x123456789abcdef123456789abcdef123456789a', 'elar@saks.com'),
('0xabcdef123456789abcdef123456789abcdef123456', 'elar@saks.com');

-- Insert NFTs
INSERT INTO NFT (wallet_id, owner_id, category_id, name, description, img_link, network, minted) VALUES
(NULL, 'elar@saks.com', 1, 'Beach', 'A serene beach scene.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/beach.webp', 'Ethereum', FALSE),
(NULL, 'elar@saks.com', 2, 'Diving', 'An adventurous diving moment.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/diving.webp', 'Ethereum', FALSE),
(NULL, 'elar@saks.com', 3, 'Meditation', 'A peaceful meditation session.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/meditation.webp', 'Ethereum', FALSE),
('0xabcdef123456789abcdef123456789abcdef123456', 'elar@saks.com', 4, 'Muay Thai', 'Intense Muay Thai action.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/muay_thai.webp', 'Ethereum', TRUE),
(NULL, 'elar@saks.com', 5, 'Pantheon', 'The majestic Pantheon.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/pantheon.webp', 'Ethereum', FALSE),
('0x123456789abcdef123456789abcdef123456789a', 'elar@saks.com', 5, 'Party', 'A lively party scene.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/party.webp', 'Ethereum', TRUE),
(NULL, 'elar@saks.com', 4, 'Rome', 'Historic Rome in its glory.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/rome.webp', 'Ethereum', FALSE),
(NULL, 'elar@saks.com', 5, 'Tech Lab', 'Futuristic tech lab.', 'https://gorilla-labs-nfts.s3.eu-north-1.amazonaws.com/tech_lab.webp', 'Ethereum', FALSE);
