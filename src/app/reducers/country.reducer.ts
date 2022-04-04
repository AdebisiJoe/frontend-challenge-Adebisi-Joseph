import * as fromData from "../actions/country.actions";

export interface CountryDataState {
  items: string[];
  loading: boolean;
  error: any;
}

export const initialState: CountryDataState = {
  items: [],
  loading: false,
  error: null
};

export function reducer(
  state = initialState,
  action: fromData.ActionsUnion
): CountryDataState {
  switch (action.type) {
    case fromData.ActionTypes.LoadCountryDataBegin: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromData.ActionTypes.LoadCountryDataSuccess: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    }

    case fromData.ActionTypes.LoadCountryDataFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: CountryDataState) => state.items;