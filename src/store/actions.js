import leadService from '../services/leadService';

export function loadLeads() {
  return (dispatch) => {
    leadService
      .query()
      .then((leads) => dispatch({ type: 'SET_LEADS', payload: leads }));
  };
}

export function updateLead(lead) {
  return (dispatch) => {
    leadService
      .update(lead)
      .then((updatedLead) =>
        dispatch({ type: 'UPDATE_LEAD', payload: updatedLead })
      );
  };
}

export function loadCallers() {
  return (dispatch) => {
    leadService
      .queryCallers()
      .then((callers) => dispatch({ type: 'SET_CALLERS', payload: callers }));
  };
}
