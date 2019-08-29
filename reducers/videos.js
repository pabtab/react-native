const initialState = {

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SUGGESTION_LIST':
      return { ...state, ...payload };

    case 'SET_CATEGORY_LIST':
      return { ...state, ...payload };

    default:
      return state;
  }
};
