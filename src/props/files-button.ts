import { ComponentPropsWithRef } from 'react';
import { FileListHandler } from '../types/file-list-handler';

export type FilesButtonProps = ComponentPropsWithRef<'button'> & {
    readonly onFilesSelected: FileListHandler;
    readonly accept?: string;
    readonly multiple?: boolean;
};
