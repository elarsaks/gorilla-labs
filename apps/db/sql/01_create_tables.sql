-- Add extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE Users (
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL
);

-- Category Table
CREATE TABLE Category (
    category_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL
);

-- Wallet Table
CREATE TABLE Wallet (
    wallet_id VARCHAR(42) PRIMARY KEY NOT NULL,
    user_id VARCHAR(124) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(email)
);

-- NFT Table
CREATE TABLE NFT (
    nft_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    wallet_id VARCHAR(42),
    owner_id VARCHAR(124) NOT NULL,
    category_id INT NOT NULL,
    name VARCHAR(64) NOT NULL,
    description TEXT NOT NULL,
    img_link TEXT NOT NULL,
    network VARCHAR(64) NOT NULL,
    minted BOOLEAN NOT NULL,
    FOREIGN KEY (wallet_id) REFERENCES Wallet(wallet_id),
    FOREIGN KEY (owner_id) REFERENCES Users(email),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);
