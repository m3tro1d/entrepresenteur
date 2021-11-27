import React from 'react';
import Ribbon from './components/ribbon/Ribbon';
import SlidePanel from './components/slidepanel/SlidePanel';
import Workspace from './components/workspace/Workspace';
import './App.css';
import useConfirmLeaving from './hooks/useConfirmLeaving';
import { isCurrentSlide } from './model/model_utils';
import { useSelector } from 'react-redux';
import { RootState } from './state/reducers';

function App(): JSX.Element {
  const editor = useSelector((state: RootState) => state.editor);

  const currentSlide = editor.presentation.slides.find(slide => isCurrentSlide(slide, editor.selectedSlideIDs));

  useConfirmLeaving();

  return (
    <div className="app">
      <Ribbon presentationTitle={editor.presentation.title} />
      <div className="app-main">
        <SlidePanel slides={editor.presentation.slides} selectedSlideIDs={editor.selectedSlideIDs} />
        <Workspace slide={currentSlide} selectedElementIDs={editor.selectedElementIDs} />
      </div>
    </div>
  );
}

export default App;
