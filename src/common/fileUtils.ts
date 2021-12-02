import { Presentation } from '../model/types';

function openFile(): Promise<File> {
  return new Promise(resolve => {
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target?.files) {
        resolve(target.files[0]);
      }
    });

    input.click();
  });
}

export function savePresentationJSON(presentation: Presentation, filename: string): void {
  const file = new Blob([JSON.stringify(presentation)], {
    type: 'text/plain',
  });
  const url = URL.createObjectURL(file);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename + '.json';

  link.click();
  URL.revokeObjectURL(url);
}

export function openPresentationJSON(): Promise<Presentation> {
  return new Promise((resolve, reject) => {
    openFile()
      .then(file => {
        const reader = new FileReader();

        reader.addEventListener('loadend', (event: ProgressEvent<FileReader>) => {
          if (event.target?.result) {
            try {
              const result = JSON.parse(event.target.result.toString());
              resolve(result);
            } catch (e) {
              reject('Invalid presentation format');
            }
          }
        });

        reader.readAsText(file, 'UTF-8');
      });
  });
}

export function openImageBase64(): Promise<HTMLImageElement> {
  return new Promise(resolve => {
    openFile()
      .then(file => {
        console.log(file);
        const reader = new FileReader();

        reader.addEventListener('loadend', (event: ProgressEvent<FileReader>) => {
          if (event.target?.result) {
            const image = new Image();

            image.addEventListener('load', () => {
              resolve(image);
            });

            image.src = event.target.result.toString();
          }
        });

        reader.readAsDataURL(file);
      });
  });
}
