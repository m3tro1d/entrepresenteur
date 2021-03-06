import { createEditor, createNewPresentation } from '../../model/modelUtils';
import { Editor } from '../../model/types';
import Action, { ActionType } from '../actions/actions';
import {
  addImage,
  addPrimitive,
  addSlide,
  addText,
  moveElements,
  moveSlidesDown,
  moveSlidesToBeginning,
  moveSlidesToEnd,
  moveSlidesUp,
  nextSlide,
  openPresentation,
  previousSlide,
  removeElements,
  removeSlides,
  resizeElement,
  selectElement,
  selectSlide,
  setCurrentElement,
  setCurrentSlide,
  setFirstCurrentSlide,
  setLocale,
  setPresentationTitle,
  setPrimitiveFillColor,
  setPrimitiveStrokeColor,
  setPrimitiveStrokeStyle,
  setPrimitiveStrokeWidth,
  setSlideBackgroundColor,
  setSlideBackgroundImage,
  setTextColor,
  setTextFont,
  setTextSize,
  setTextValue,
  startDemonstration,
  stopDemonstration,
  toggleBoldText,
  toggleItalicText,
  unselectAll,
  unselectElement,
} from '../../model/actions';
import getInitialState from '../initialState';

function editorReducer(state = getInitialState(), action: Action): Editor {
  switch (action.type) {
  case ActionType.OPEN_PRESENTATION:
    return openPresentation(state, action.payload);
  case ActionType.NEW_PRESENTATION:
    return createEditor(createNewPresentation(), state.locale);
  case ActionType.CHANGE_PRESENTATION_TITLE:
    return setPresentationTitle(state, action.payload);
  case ActionType.SET_TEXT_VALUE:
    return setTextValue(state, action.payload);
  case ActionType.TOGGLE_BOLD_TEXT:
    return toggleBoldText(state, action.payload);
  case ActionType.TOGGLE_ITALIC_TEXT:
    return toggleItalicText(state, action.payload);
  case ActionType.SET_TEXT_FONT:
    return setTextFont(state, action.payload);
  case ActionType.SET_TEXT_SIZE:
    return setTextSize(state, action.payload);
  case ActionType.SET_TEXT_COLOR:
    return setTextColor(state, action.payload);
  case ActionType.SET_PRIMITIVE_FILL_COLOR:
    return setPrimitiveFillColor(state, action.payload);
  case ActionType.SET_PRIMITIVE_STROKE_COLOR:
    return setPrimitiveStrokeColor(state, action.payload);
  case ActionType.SET_PRIMITIVE_STROKE_STYLE:
    return setPrimitiveStrokeStyle(state, action.payload);
  case ActionType.SET_PRIMITIVE_STROKE_WIDTH:
    return setPrimitiveStrokeWidth(state, action.payload);
  case ActionType.SET_CURRENT_ELEMENT:
    return setCurrentElement(state, action.payload);
  case ActionType.SELECT_ELEMENT:
    return selectElement(state, action.payload);
  case ActionType.UNSELECT_ELEMENT:
    return unselectElement(state, action.payload);
  case ActionType.UNSELECT_ALL:
    return unselectAll(state);
  case ActionType.MOVE_ELEMENTS:
    return moveElements(state, action.payload);
  case ActionType.RESIZE_ELEMENT:
    return resizeElement(state, action.payload);
  case ActionType.REMOVE_ELEMENTS:
    return removeElements(state);
  case ActionType.ADD_SLIDE:
    return addSlide(state);
  case ActionType.REMOVE_SLIDES:
    return removeSlides(state);
  case ActionType.NEXT_SLIDE:
    return nextSlide(state);
  case ActionType.PREVIOUS_SLIDE:
    return previousSlide(state);
  case ActionType.SET_SLIDE_BACKGROUND_IMAGE:
    return setSlideBackgroundImage(state, action.payload);
  case ActionType.SET_SLIDE_BACKGROUND_COLOR:
    return setSlideBackgroundColor(state, action.payload);
  case ActionType.SET_CURRENT_SLIDE:
    return setCurrentSlide(state, action.payload);
  case ActionType.SELECT_SLIDE:
    return selectSlide(state, action.payload);
  case ActionType.SET_FIRST_CURRENT_SLIDE:
    return setFirstCurrentSlide(state);
  case ActionType.MOVE_SLIDES_UP:
    return moveSlidesUp(state);
  case ActionType.MOVE_SLIDES_DOWN:
    return moveSlidesDown(state);
  case ActionType.MOVE_SLIDES_TO_BEGINNING:
    return moveSlidesToBeginning(state);
  case ActionType.MOVE_SLIDES_TO_END:
    return moveSlidesToEnd(state);
  case ActionType.ADD_TEXT:
    return addText(state, action.payload);
  case ActionType.ADD_IMAGE:
    return addImage(state, action.payload);
  case ActionType.ADD_PRIMITIVE:
    return addPrimitive(state, action.payload);
  case ActionType.START_DEMONSTRATION:
    return startDemonstration(state);
  case ActionType.STOP_DEMONSTRATION:
    return stopDemonstration(state);
  case ActionType.SET_LOCALE:
    return setLocale(state, action.payload);
  default:
    return state;
  }
}

export default editorReducer;
