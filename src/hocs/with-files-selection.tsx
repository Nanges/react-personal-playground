import { ComponentPropsWithoutRef, useCallback, useRef } from 'react';
import { useFilesChangeHandler } from '../hooks/use-files-change-handler';
import { FilesButtonProps } from '../props/files-button';

export function withFilesSelection(ButtonLike: (props: ComponentPropsWithoutRef<'button'>) => JSX.Element) {
    return (props: FilesButtonProps) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const { accept, multiple, onFilesSelected, ...buttonProps } = props;

        const clickHandler = useCallback(() => inputRef.current?.click(), [inputRef]);
        const changeHandler = useFilesChangeHandler(onFilesSelected);

        return (
            <>
                <ButtonLike {...buttonProps} onClick={clickHandler} />
                <input
                    type="file"
                    ref={inputRef}
                    accept={accept}
                    multiple={multiple}
                    style={{ display: 'none' }}
                    onChange={changeHandler}
                />
            </>
        );
    };
}
