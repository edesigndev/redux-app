import { Action, createReducer, on } from '@ngrx/store';
import {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
  reset,
} from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => initialState)
);

// export function contadorReducer(state: number, action: Action) {
export function contadorReducer(state = initialState, action: Action) {
  return _contadorReducer(state, action);
}
