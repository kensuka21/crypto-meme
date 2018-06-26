import * as actionTypes from '../../../src/client/actions/crypto/actionTypes';
import { changeCrypto } from '../../../src/client/actions/crypto';

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
});
