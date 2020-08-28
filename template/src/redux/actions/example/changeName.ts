import { CHANGE_NAME_SUCCESS } from 'redux/action-types/example/changeName';
import { Dispatch } from 'redux';

export default (name: string) => (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_NAME_SUCCESS,
    payload: name,
  });
};
