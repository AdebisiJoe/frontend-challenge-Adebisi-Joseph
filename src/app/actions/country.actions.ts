import { Action } from "@ngrx/store";
export enum ActionTypes {
  LoadCountryDataBegin = "[Data] Load countries begin",
  LoadCountryDataSuccess = "[Data] Load countries success",
  LoadCountryDataFailure = "[Data] Load countries failure"
}
export class LoadCountryDataBegin implements Action {
  readonly type = ActionTypes.LoadCountryDataBegin;
}
export class LoadCountryDataSuccess implements Action {
  readonly type = ActionTypes.LoadCountryDataSuccess;
  constructor(public payload: { data: any }) {}
}
export class LoadCountryDataFailure implements Action {
  readonly type = ActionTypes.LoadCountryDataFailure;
  constructor(public payload: { error: any }) {}
}
export type ActionsUnion = LoadCountryDataBegin | LoadCountryDataSuccess | LoadCountryDataFailure;