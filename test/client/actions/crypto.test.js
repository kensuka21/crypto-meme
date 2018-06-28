import * as actionTypes from '../../../src/client/actions/crypto/actionTypes';
import { changeCrypto, loadCryptoPriceSuccess } from '../../../src/client/actions/crypto';

describe('Crypto actions', () => {
  it('should create an action to change crypto', async () => {
    const dispatch = jest.fn();
    const crypto = {};
    const expectedAction = {
      type: actionTypes.CHANGE_CRYPTO_SUCCESS,
      crypto
    };

    await changeCrypto(crypto)(dispatch);
    expect(dispatch).toBeCalledWith(expectedAction);
  });

  it('should create an action to when calling loadCryptoPriceSuccess', async () => {
    const cryptoPrice = 150;
    const expectedAction = {
      type: actionTypes.LOAD_CRYPTO_PRICE_SUCCESS,
      cryptoPrice
    };

    const action = loadCryptoPriceSuccess(cryptoPrice);

    expect(expectedAction).toEqual(action);
  });
});
