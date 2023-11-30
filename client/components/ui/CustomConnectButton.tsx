import React from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Define styled components
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
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

const WalletContainer = styled.div<{ isReady: boolean }>`
  opacity: ${(props) => (props.isReady ? 1 : 0)};
  pointer-events: ${(props) => (props.isReady ? "auto" : "none")};
  user-select: ${(props) => (props.isReady ? "auto" : "none")};
  display: flex;
  gap: 12px;
`;

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
                    <ChainIcon background={chain.iconBackground}>
                      {chain.iconUrl && (
                        <ChainImage
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                        />
                      )}
                    </ChainIcon>
                  )}
                  {chain.name}
                </StyledButton>
                <StyledButton onClick={openAccountModal} type="button">
                  {account.displayName}
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
