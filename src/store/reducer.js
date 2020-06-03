const initialState = {
  leads: null,
  callers: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LEADS':
      return {
        ...state,
        leads: action.payload,
      };
    case 'UPDATE_LEAD':
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead.id === action.payload.id ? action.payload : lead
        ),
      };
    case 'SET_CALLERS':
      return {
        ...state,
        callers: action.payload,
      };
    default:
      return state;
  }
}
