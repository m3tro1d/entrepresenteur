import React from 'react';
import { ElementType, Slide } from '../../../../model/types';
import { UUID } from '../../../../model/uuid';
import styles from './Overlay.module.css';
import EditableText from './elements/EditableText';
import EditableImage from './elements/EditableImage';
import EditablePrimitive from './elements/EditablePrimitive';

type OverlayProps = {
  slide: Slide;
  selectedSlideIDs: UUID[];
};

function Overlay({ slide, selectedSlideIDs }: OverlayProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 800 600"
      className={styles.overlay}
    >
      {slide.elements.map(element => {
        const isSelected = selectedSlideIDs.includes(element.id);

        switch (element.type) {
        case ElementType.TEXT:
          return <EditableText key={element.id} element={element} isSelected={isSelected} />;
        case ElementType.IMAGE:
          return <EditableImage key={element.id} element={element} isSelected={isSelected} />;
        case ElementType.PRIMITIVE:
          return <EditablePrimitive key={element.id} element={element} isSelected={isSelected} />;
        }
      })}
    </svg>
  );
}

export default Overlay;