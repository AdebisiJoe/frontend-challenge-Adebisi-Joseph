import { Action } from "@ngrx/store";
export enum ActionTypes {
  LoadHolidayDataBegin = "[Data] Load holidays begin",
  LoadHolidayDataSuccess = "[Data] Load holidays success",
  LoadHolidayDataFailure = "[Data] Load holidays failure"
}
export class LoadHolidayDataBegin implements Action {
  readonly type = ActionTypes.LoadHolidayDataBegin;
}
export class LoadHolidayDataSuccess implements Action {
  readonly type = ActionTypes.LoadHolidayDataSuccess;
  constructor(public payload: { data: any }) {}
}
export class LoadHolidayDataFailure implements Action {
  readonly type = ActionTypes.LoadHolidayDataFailure;
  constructor(public payload: { error: any }) {}
}
export type ActionsUnion = LoadHolidayDataBegin | LoadHolidayDataSuccess | LoadHolidayDataFailure;