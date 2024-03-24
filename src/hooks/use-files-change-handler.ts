import { ChangeEvent, useCallback } from 'react';
import { FileListHandler } from '../types/file-list-handler';

export const useFilesChangeHandler = (filesSelected: FileListHandler) => {
    return useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                filesSelected(e.target.files);
            }

            // If the value is not reset, ChangeEvent is not triggered when the same file is selected
            e.target.value = '';
        },
        [filesSelected]
    );
};
