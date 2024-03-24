import { ComponentProps } from 'react';
import { useDragDropHandlers } from '../hooks/use-drag-drop-handlers';
import { FileListHandler } from '../types/file-list-handler';
import { FilesButton } from './files-button';

export const FilesDropzone = (props: ComponentProps<typeof FilesButton> & { onFilesDropped: FileListHandler }) => {
    const { onFilesDropped, ...remaining } = props;
    const handlers = useDragDropHandlers(onFilesDropped);
    return <FilesButton {...handlers} {...remaining} />;
};
