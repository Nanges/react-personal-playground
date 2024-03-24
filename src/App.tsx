import { FilesButton } from './components/files-button';
import { FilesDropzone } from './components/files-dropzone';

function App() {
    return (
        <>
            <FilesButton onFilesSelected={console.log}>Select template</FilesButton>
            <FilesDropzone onFilesSelected={console.log} onFilesDropped={console.log}>
                Drop template here or <em>select it</em>
            </FilesDropzone>
        </>
    );
}

export default App;
