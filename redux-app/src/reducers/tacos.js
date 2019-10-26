import {
    FETCH_TACO_START,
    FETCH_TACO_SUCCESS,
    FETCH_TACO_ERROR,
    UPDATE_LOCATION,
    UPDATE_TYPE
  } from "../actions/tacos";
  
  const initialState = {
    // our "success" state
    venues: [],
    // want to make sure we account for all possible states,
    // including the loading and error states
    isLoading: false,
    error: null,
    location: '',
    type: ''
  };
  
  // our finite state machine written out in code--
  // all the possible states, and actions that can be taken
  // which result in a new state.
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_TACO_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_TACO_SUCCESS:
        return {
          ...state,
          venues: [...action.payload],
          isLoading: false
        };
      case FETCH_TACO_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
        case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
      case UPDATE_TYPE:
      return {
        ...state,
        type: action.payload
      };
      default:
        return state;
    }
  }
  