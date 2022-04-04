import * as fromData from "../actions/holiday.actions";

export interface HolidayDataState {
  items: string[];
  loading: boolean;
  error: any;
}

export const initialState: HolidayDataState = {
  items: [],
  loading: false,
  error: null
};

export function reducer(
  state = initialState,
  action: fromData.ActionsUnion
): HolidayDataState {
  switch (action.type) {
    case fromData.ActionTypes.LoadHolidayDataBegin: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromData.ActionTypes.LoadHolidayDataSuccess: {
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };
    }

    case fromData.ActionTypes.LoadHolidayDataFailure: {
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

export const getItems = (state: HolidayDataState) => state.items;