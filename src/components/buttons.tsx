import { ComponentPropsWithoutRef } from 'react';
import { withFilesSelection } from '../hocs/with-files-selection';

export const BaseButton = (props: ComponentPropsWithoutRef<'button'>) => {
    let { type, ...remaining } = props;
    type = type ?? 'button';

    return <button type={type} {...remaining} />;
};

export const FilesButton = withFilesSelection(BaseButton);
