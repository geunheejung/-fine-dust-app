import produce from 'immer';
import { createSelector } from 'reselector';

// Action Type
export enum ACTION_TYPE {
  FETCH_FINE_DUST_REQUEST = 'data/FETCH_FINE_DUST_REQUEST',
  FETCH_FINE_DUST_SUCCESS = 'data/FETCH_FINE_DUST_SUCCESS',
  FETCH_FINE_DUST_FAILURE = 'data/FETCH_FINE_DUST_FAILURE',
}
// Action Creatoer
// (type: ACTION_TYPE, payload?: {} | string) => ({ type: ACTION_TYPE, payload?: string | object | undefined }) 
// ACTION_TYPE에 속한 type들만 허용해야하며, 정해진 PO를 반환한다.
type TActionObject = {
  type: ACTION_TYPE,
  payload: object,  
}

// type과 payload를 받아서 request, failure, success 가 suffix에 붙는 메서드 리스트를 만든다.
// type과 payload는 제네릭으로 받는다.
export const fetchFineDustRequest = (payload: object): TActionObject => ({ type: ACTION_TYPE.FETCH_FINE_DUST_REQUEST, payload });
export const fetchFineDustSuccess = (payload: object): TActionObject => ({ type: ACTION_TYPE.FETCH_FINE_DUST_SUCCESS, payload });
export const fetchFineDustFailure = (payload: object): TActionObject => ({ type: ACTION_TYPE.FETCH_FINE_DUST_FAILURE, payload });
// Reducer
interface IState {
  fineDustList: object,
}
const initalState: IState = {
  fineDustList: {}
}

export default (state: IState = initalState, action: TActionObject): IState => {
  const { type, payload } = action;
  return produce(state, draft => {
    switch (type) {
      case ACTION_TYPE.FETCH_FINE_DUST_SUCCESS:        
        draft.fineDustList = payload;    
        break;
      default:
        return initalState;
    }
  });  
}

// Selector
