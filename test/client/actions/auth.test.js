import * as actionTypes from '../../../src/client/actions/auth/actionTypes';
import { loadAuthUser } from '../../../src/client/actions/auth';

describe('Auth actions', () => {
  it('should create an action to load User', async () => {
    const dispatch = jest.fn();
    const authUser = {};
    const expectedAction = {
      type: actionTypes.LOAD_AUTH_USER_SUCCESS,
      authUser
    };

    await loadAuthUser(authUser)(dispatch);
    expect(dispatch).toBeCalledWith(expectedAction);
  });
});
