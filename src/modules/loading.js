const START_LOADING = 'loading/START_LOADING';
const END_LOADING = 'loading/END_LOADING';

export const startLoading = requestType => ({ type: START_LOADING, payload: requestType });
export const endLoading = requestType => ({ type: END_LOADING, payload: requestType });

const initialState = {};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case END_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default loading;
