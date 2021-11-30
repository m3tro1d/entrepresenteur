import { Dispatch } from 'react';
import Action, { ActionType } from './actions';
import { UUID } from '../../model/uuid';

export function changePresentationTitle(title: string): Action {
  return {
    type: ActionType.CHANGE_PRESENTATION_TITLE,
    payload: title,
  };
}

export function setTextValue(payload: any): Action {
  return {
    type: ActionType.SET_TEXT_VALUE,
    payload: payload,
  };
}

export function selectElement(elementID: UUID) {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.SELECT_ELEMENT,
      payload: elementID,
    });
  };
}

export function unselectElement(elementID: UUID) {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.UNSELECT_ELEMENT,
      payload: elementID,
    });
  };
}

export function moveElement(payload: any) {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.MOVE_ELEMENT,
      payload: payload,
    });
  };
}

export function removeElements() {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.REMOVE_ELEMENTS,
    });
  };
}

export function setCurrentSlide(slideID: UUID) {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.SET_CURRENT_SLIDE,
      payload: slideID,
    });
  };
}
