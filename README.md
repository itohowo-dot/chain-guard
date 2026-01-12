
# ChainGuard

A blockchain-based security and reward system for gaming, using Chainlink VRF for provably fair random rewards.

A blockchain-based gaming reward system that uses Chainlink VRF for provably fair random rewards.

# ChainGuard

ChainGuard is a robust protocol designed to enhance the security, reliability, and governance of smart contracts and decentralized applications. It provides advanced circuit breaker mechanisms, emergency management tools, and analytics for on-chain operations.

## Table of Contents
- [ChainGuard](#chainguard)
- [ChainGuard](#chainguard)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Architecture](#architecture)
    - [Key Contracts](#key-contracts)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Smart Contracts](#smart-contracts)
    - [Frontend](#frontend)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contracts Overview](#contracts-overview)
    - [Core Contracts](#core-contracts)
    - [Security Infrastructure](#security-infrastructure)
    - [How It Works](#how-it-works)

## Overview
ChainGuard aims to safeguard blockchain applications by providing:
- Emergency circuit breaker management
- Automated pause and recovery mechanisms
- Reward analytics and tiered staking
- Upgradeable governance modules
- Comprehensive test coverage

## Features
- **Circuit Breaker:** Instantly pause contract operations during emergencies.
- **Emergency Management:** Tools for recovery and controlled resumption.
- **Reward Analytics:** Track and analyze on-chain rewards and staking.
- **Upgradeable Contracts:** Modular upgrade governance for smart contracts.
- **Comprehensive Testing:** Includes unit and integration tests for reliability.

## Architecture
The repository is structured as follows:
- `contract/`: Solidity smart contracts, tests, and configuration files.
- `frontend/`: Next.js frontend for interacting with the protocol.

### Key Contracts
- `CircuitBreaker.sol`: Core circuit breaker logic.
- `EmergencyCircuitBreakerManager.sol`: Emergency management.
- `RewardAnalytics.sol`: Reward tracking and analytics.
- `UpgradeGovernance.sol`: Upgradeable governance module.

## Getting Started

### Prerequisites
- Node.js >= 18.x
- Yarn or npm
- Foundry (for Solidity development)

### Installation
Clone the repository:
```bash
git clone https://github.com/benedict-drio/chain-guard.git
cd chain-guard
```

Install dependencies for contracts and frontend:
```bash
cd contract && yarn install
cd ../frontend && yarn install
```

## Usage

### Smart Contracts
- Compile: `cd contract && yarn build`
- Test: `yarn test`
- Deploy: Configure deployment scripts as needed.

### Frontend
- Start: `cd frontend && yarn dev`
- Access the app at `http://localhost:3000`

## Testing
- Contract tests: `contract/test/`
- Frontend tests: `frontend/src/components/__tests__/`, `frontend/src/hooks/__tests__/`, etc.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

Please ensure your code is well-documented and tested.

## License
This project is licensed under the MIT License.

## Contracts Overview

### Core Contracts
- **ChainGuardReward** - Main reward distribution contract using Chainlink VRF for random prize selection
- **ChainGuardGold** (ERC20) - In-game currency token with 10M initial supply
- **ChainGuardHero** (ERC721) - Unique hero NFTs with sequential minting
- **ChainGuardLoot** (ERC1155) - Multi-token loot items with metadata URI support

### Security Infrastructure
- **Timelock** - Time-delayed execution for critical administrative functions
- **EmergencyRecovery** - Multi-sig emergency recovery contract for critical situations
- **CircuitBreaker** - Automated circuit breaker for emergency operation controls
- All contracts include pause/unpause functionality and emergency withdrawal capabilities


### How It Works
1. Players pay a fee to open reward boxes through `ChainGuardReward.open()`
2. Chainlink VRF generates verifiable random numbers for fair prize selection
3. Rewards are distributed from a weighted prize pool containing ERC20, ERC721, or ERC1155 tokens
4. Contract supports refilling with additional tokens for ongoing gameplay
 