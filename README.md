# Harmony Assignment

This repo contains two contracts `NumberStorer.sol` and `Ballot.sol` which implement the functionality described [here](https://harmonyone.notion.site/Background-Assignment-a0d3855f9b9d4728a58b481c30ecfd3f).

There is also a test for `Ballot.sol` that tests the revert functionality described in the above document.

## Requirements

node.js v16+

Hardhat: `npm i -g hardhat`

ganache-cli: `npm i -g ganache-cli`

## Instructions

To build:
```bash
npx hardhat compile
```

To run unit tests:
```bash
ganache-cli
npx hardhat test
# Compiled 1 Solidity file successfully


#   Ballot
#     ✔ Should deploy and vote (751ms)
#     ✔ Should revert after voting period ends (102ms)


#   2 passing (856ms)
```
