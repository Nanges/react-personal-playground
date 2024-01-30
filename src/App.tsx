import { FilesButton } from './components/buttons';
import { FilesDropzone } from './components/files-dropzone';

function App() {
    return (
        <>
            <FilesButton onFilesSelected={console.log}>Select template</FilesButton>
            <FilesDropzone onFilesSelected={console.log}>
                Drop template here or <em>select it</em>
            </FilesDropzone>
        </>
    );
}

export default App;
