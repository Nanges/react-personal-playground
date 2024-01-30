import { withFilesSelection } from '../hocs/with-files-selection';
import { BaseButton } from './base-button';

export const FilesButton = withFilesSelection(BaseButton);
