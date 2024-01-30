import { ComponentProps } from 'react';
import { useDragDropHandlers } from '../hooks/use-drag-drop-handlers';
import { FilesButton } from './files-button';

export const FilesDropzone = (props: ComponentProps<typeof FilesButton>) => {
    const { ...remaining } = props;
    const handlers = useDragDropHandlers(props);
    return <FilesButton {...handlers} {...remaining} />;
};
