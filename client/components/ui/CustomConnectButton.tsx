import React from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaWallet } from "react-icons/fa"; // Importing FaWallet as the wallet icon

// Define styled components
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid white;
  border-radius: 10px;
  padding: 8px 12px;
  color: white;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 8px;
    span {
      display: none;
    }
  }
`;

const ChainIcon = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  width: 12px;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  margin-right: 4px;
`;

const ChainImage = styled.img`
  width: 12px;
  height: 12px;
`;

// Higher-order function to filter out non-DOM props
const withFilteredProps = (Component) => {
  return ({ isReady, ...props }) => (
    <Component
      {...props}
      style={{
        opacity: isReady ? 1 : 0,
        pointerEvents: isReady ? "auto" : "none",
        userSelect: isReady ? "auto" : "none",
        display: "flex",
        gap: "12px",
        ...props.style,
      }}
    />
  );
};

const WalletContainer = styled(withFilteredProps("div"))``;

const CustomConnectButton: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <WalletContainer isReady={ready}>
            {!connected ? (
              <StyledButton onClick={openConnectModal} type="button">
                Connect Wallet
              </StyledButton>
            ) : chain.unsupported ? (
              <StyledButton onClick={openChainModal} type="button">
                Wrong network
              </StyledButton>
            ) : (
              <>
                <StyledButton onClick={openChainModal} type="button">
                  {chain.hasIcon && (
                    <ChainIcon
                      background={chain.iconBackground || "defaultBackground"}
                    >
                      {chain.iconUrl && (
                        <ChainImage
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                        />
                      )}
                    </ChainIcon>
                  )}
                  <span>{chain.name}</span>
                </StyledButton>

                <StyledButton onClick={openAccountModal} type="button">
                  <FaWallet /> {/* Using FaWallet as the wallet icon */}
                  <span>{account.displayName}</span>
                  {account.displayBalance ? ` (${account.displayBalance})` : ""}
                </StyledButton>
              </>
            )}
          </WalletContainer>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
