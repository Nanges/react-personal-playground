import { DragEvent, useCallback } from 'react';
import { FilesButtonProps } from '../props/files-button';

const CSS_MODIFIER = 'is-dragging-over';
const onDragOver = (e: DragEvent) => {
    (e.target as HTMLElement).classList.add(CSS_MODIFIER);
    e.preventDefault();
};

const onDragLeave = (e: DragEvent) => {
    (e.target as HTMLElement).classList.remove(CSS_MODIFIER);
};

export const useDragDropHandlers = ({ accept, multiple, onFilesSelected }: FilesButtonProps) => {
    const onDrop = useCallback(
        (e: DragEvent) => {
            (e.target as HTMLElement).classList.remove(CSS_MODIFIER);
            e.preventDefault();

            if (onFilesSelected) {
                const formats = accept?.split(',').map((f) => f.trim()) || [];
                const files = Array.from(e.dataTransfer?.files as FileList).filter((file: File) =>
                    formats.length ? formats.find((f) => file.name.includes(f)) != null : true
                );

                if (files.length > 0) onFilesSelected(multiple ? files : files.slice(0, 1));
            }
        },
        [onFilesSelected, accept, multiple]
    );

    return { onDragOver, onDrop, onDragLeave };
};
