import { ChangeEvent, useCallback } from 'react';

export const useFilesChangeHandler = (filesSelected?: (files: File[]) => void) => {
    return useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (filesSelected) {
                filesSelected(Array.from(e.target.files as FileList));
            }

            // If the value is not reset, ChangeEvent is not triggered when the same file is selected
            e.target.value = '';
        },
        [filesSelected]
    );
};
