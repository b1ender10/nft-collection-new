import {
  SET_WALLET,
  SET_PUBKEY,
  SET_TOKEN_LIST,
  SET_PAIRS_LIST,
  SET_LIQUIDITY_LIST,
  SET_TRANSACTIONS_LIST,
  SET_SUBSCRIBE_DATA, SHOW_STACKING_CONFIRM_POPUP, HIDE_STACKING_CONFIRM_POPUP
} from './types';

export function openStackingConfirmPopup(payload) {
  return { type: SHOW_STACKING_CONFIRM_POPUP, payload };
};

export function hideStackingConfirmPopup(payload) {
  return { type: HIDE_STACKING_CONFIRM_POPUP, payload };
};


export function setWallet(payload) {
  localStorage.setItem('wallet', JSON.stringify(payload));
  return { type: SET_WALLET, payload };
};

export function setPubKey(payload) {
  localStorage.setItem('pubKey', JSON.stringify(payload));
  return { type: SET_PUBKEY, payload };
};

export function setTokenList(payload) {
  // localStorage.setItem('tokenList', JSON.stringify(payload));
  return { type: SET_TOKEN_LIST, payload };
};

export function setLiquidityList(payload) {
  // localStorage.setItem('liquidityList', JSON.stringify(payload));
  return { type: SET_LIQUIDITY_LIST, payload };
};

export function setPairsList(payload) {
  return { type: SET_PAIRS_LIST, payload };
};

export function setTransactionsList(payload) {
  localStorage.setItem('transactionsList', JSON.stringify(payload));
  return { type: SET_TRANSACTIONS_LIST, payload };
};

export function setSubscribeData(payload) {
  return { type: SET_SUBSCRIBE_DATA, payload };
};
