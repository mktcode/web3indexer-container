import { Web3Indexer } from '@mktcodelib/web3indexer';
import { endpoint }  from './endpoint.js';
import { listener }  from './listener.js';

const indexer = new Web3Indexer({ provider: process.env.PROVIDER_URL, debug: true });

const CONTRACT_ADDRESS = "0x8cdf190266efe40A456314142A10C6EeAd9Dc900";
const CONTRACT_ABI = [ "event Unlock(address indexed user, uint256 amount)" ];

const contract = indexer.contract(CONTRACT_ADDRESS, CONTRACT_ABI)
contract.store("Unlock", listener);

indexer.api.get('/unlocked', endpoint);

indexer.replay();