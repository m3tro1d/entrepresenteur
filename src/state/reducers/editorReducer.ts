import { createEditor, createNewPresentation } from '../../model/model_utils';
import { Editor } from '../../model/types';
import Action, { ActionType } from '../actions/actions';
import {
  moveElement,
  openPresentation,
  removeElements,
  selectElement,
  setCurrentSlide,
  setPresentationTitle,
  setTextValue,
  unselectElement,
} from '../../model/actions';

const initialState = createEditor(createNewPresentation());

function reducer(state: Editor = initialState, action: Action): Editor {
  switch (action.type) {
  case ActionType.OPEN_PRESENTATION:
    return openPresentation(state, action.payload);
  case ActionType.CHANGE_PRESENTATION_TITLE:
    return setPresentationTitle(state, action.payload);
  case ActionType.SET_TEXT_VALUE:
    return setTextValue(state, action.payload);
  case ActionType.SELECT_ELEMENT:
    return selectElement(state, action.payload);
  case ActionType.UNSELECT_ELEMENT:
    return unselectElement(state, action.payload);
  case ActionType.MOVE_ELEMENT:
    return moveElement(state, action.payload);
  case ActionType.REMOVE_ELEMENTS:
    return removeElements(state);
  case ActionType.SET_CURRENT_SLIDE:
    return setCurrentSlide(state, action.payload);
  default:
    return state;
  }
}

export default reducer;
