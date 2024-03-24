import { DragEvent, useCallback } from 'react';
import { FileListHandler } from '../types/file-list-handler';

export const useDragDropHandlers = (filesSelected: FileListHandler, draggingOverCss: string = 'is-dragging-over') => {
    const onDragOver = useCallback(
        (e: DragEvent) => {
            (e.target as HTMLElement).classList.add(draggingOverCss);
            e.preventDefault();
        },
        [draggingOverCss]
    );

    const onDragLeave = useCallback(
        (e: DragEvent) => {
            (e.target as HTMLElement).classList.remove(draggingOverCss);
        },
        [draggingOverCss]
    );

    const onDrop = useCallback(
        (e: DragEvent) => {
            (e.target as HTMLElement).classList.remove(draggingOverCss);
            e.preventDefault();

            if (e.dataTransfer?.files) filesSelected(e.dataTransfer.files);
        },
        [filesSelected]
    );

    return { onDragOver, onDrop, onDragLeave };
};
