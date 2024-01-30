import { ComponentPropsWithoutRef } from 'react';

export type FilesButtonProps = ComponentPropsWithoutRef<'button'> & {
    readonly onFilesSelected?: (files: File[]) => void;
    readonly accept?: string;
    readonly multiple?: boolean;
};
