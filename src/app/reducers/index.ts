import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from "@ngrx/store";
  import { environment } from "../../environments/environment";
  
  import * as countryData from "./country.reducer";
  import * as fromData from "./holiday.reducer";
  
  export interface AppState {
    countries: countryData.CountryDataState;
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    countries: countryData.reducer
  };
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? []
    : [];
  
  export const getDataState = (state: AppState) => state.countries;
  export const getAllItems = createSelector(
    getDataState,
    countryData.getItems
  );