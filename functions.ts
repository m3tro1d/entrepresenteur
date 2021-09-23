import { Background, BackgroundType, Dimensions, Editor, ElementType, Position, Presentation, Slide, SlideElement, UUID } from "./model";
import { generateUUID, replaceCurrentSlideInSlides } from "./utils";

function createNewSlide(): Slide {
    return {
        id: generateUUID(),
        background: {
            type: BackgroundType.SOLID,
            color: '#FFFFFF',
        } as Background,
        elements: [],
    };
}

function createNewPresentation(): Presentation {
    return {
        title: 'New Presentation',
        slides: [createNewSlide()],
    };
}

function createEditor(presentation: Presentation): Editor {
    return {
        presentation: presentation,
        currentSlide: presentation.slides[0],
        selectedSlideIDs: [],
        selectedElements: [],
    };
}

function loadPresentation(file: string): Presentation {
    return JSON.parse(file);
}

function savePresentation(presentation: Presentation): string {
    return JSON.stringify(presentation);
}

function setPresentationTitle(presentation: Presentation, title: string): Presentation {
    return {
        ...presentation,
        title: title,
    };
}

function addSlide(editor: Editor, slide: Slide): Editor {
    const slides: Slide[] = editor.presentation.slides.slice();

    let currentSlideIndex: number = 0;
    for (let i = 0; i < slides.length; ++i) {
        if (slides[i].id === editor.currentSlide.id) {
            currentSlideIndex = i;
        }
    }

    slides.splice(currentSlideIndex, 0, slide);

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function removeSlides(editor: Editor): Editor {
    const slides: Slide[] = editor.presentation.slides.slice();
    const newSlides = slides.filter(slide => !editor.selectedSlideIDs.includes(slide.id));

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: newSlides,
        },
    };
}

function changeSlidesOrder(editor: Editor, slideIDs: UUID[]): Editor {
    const slideIDToSlideMap = new Map<UUID, Slide>();
    for (const slide of editor.presentation.slides) {
        slideIDToSlideMap.set(slide.id, slide);
    }

    const newSlides: Slide[] = [];
    for (const slideID of slideIDs) {
        newSlides.push(slideIDToSlideMap.get(slideID))
    }

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: newSlides,
        },
    };
}

function setCurrentSlide(editor: Editor, slideID: UUID): Editor {
    const slides: Slide[] = editor.presentation.slides.slice();
    let currentSlide: Slide;

    for (const slide of slides) {
        if (slide.id === slideID) {
            currentSlide = { ...slide };
        }
    }

    return {
        ...editor,
        currentSlide: currentSlide,
    };
}

function setSlideBackgroundColor(editor: Editor, color: string): Editor {
    const currentSlide: Slide = {
        ...editor.currentSlide,
        background: {
            type: BackgroundType.SOLID,
            color: color,
        } as Background,
    };

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function setSlideBackgroundImage(editor: Editor, src: string): Editor {
    const currentSlide: Slide = {
        ...editor.currentSlide,
        background: {
            type: BackgroundType.IMAGE,
            src: src,
        } as Background,
    };

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function removeElements(editor: Editor, elementIDs: UUID): Editor {
    const elements: SlideElement[] = editor.currentSlide.elements.slice();
    const newElements = elements.filter(element => !elementIDs.includes(element.id));

    const currentSlide = {
        ...editor.currentSlide,
        elements: newElements,
    }

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function addText(editor: Editor, position: Position, dimensions: Dimensions, value: string): Editor {
    const elements: SlideElement[] = editor.currentSlide.elements.slice();
    elements.push({
        id: generateUUID(),
        type: ElementType.TEXT,
        position: position,
        dimensions: dimensions,
        value: value,
        size: 10,
        font: 'Calibri',
        color: '#000000',
    } as SlideElement);

    const currentSlide = {
        ...editor.currentSlide,
        elements: elements,
    }

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function addImage(editor: Editor, position: Position, dimensions: Dimensions, src: string): Editor {
    const elements: SlideElement[] = editor.currentSlide.elements.slice();
    elements.push({
        id: generateUUID(),
        type: ElementType.IMAGE,
        position: position,
        dimensions: dimensions,
        src: src,
    } as SlideElement);

    const currentSlide = {
        ...editor.currentSlide,
        elements: elements,
    }

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function moveElement(editor: Editor, elementID: UUID, position: Position): Editor {
    const elements: SlideElement[] = editor.currentSlide.elements.slice();
    for (let i = 0; i < elements.length; ++i) {
        if (elements[i].id === elementID) {
            elements[i] = {
                ...elements[i],
                position: position,
            }
        }
    }

    const currentSlide = {
        ...editor.currentSlide,
        elements: elements,
    }

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}

function resizeElement(editor: Editor, elementID: UUID, dimensions: Dimensions): Editor {
    const elements: SlideElement[] = editor.currentSlide.elements.slice();
    for (let i = 0; i < elements.length; ++i) {
        if (elements[i].id === elementID) {
            elements[i] = {
                ...elements[i],
                dimensions: dimensions,
            }
        }
    }

    const currentSlide = {
        ...editor.currentSlide,
        elements: elements,
    }

    const slides = replaceCurrentSlideInSlides(editor.presentation.slides, currentSlide);

    return {
        ...editor,
        currentSlide: currentSlide,
        presentation: {
            ...editor.presentation,
            slides: slides,
        },
    };
}


/**
 * TODO
 * @param {Editor} editor
 * @returns {Editor}
 */
function undo(editor) { }

/**
 * TODO
 * @param {Editor} editor
 * @returns {Editor}
 */
function redo(editor) { }

/**
 * TODO
 * @param {Presentation} presentation
 * @returns {PDF}
 */
function exportPresentation(presentation) { }
