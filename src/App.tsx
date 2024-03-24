import { Reducer, useReducer } from 'react';
import { FilesButton } from './components/files-button';
import { FilesDropzone } from './components/files-dropzone';

export interface ActionStrategy<T> {
    reduce(state?: T): Partial<T>;
}

export function strategyReducer<T>(state: T, action: ActionStrategy<T>): T {
    return { ...state, ...action.reduce(state) };
}

export function useStrategyReducer<T>(initialState: T) {
    return useReducer<Reducer<T, ActionStrategy<T>>>(strategyReducer, initialState);
}

type State = {
    showMostUsed: boolean;
    search: string;
};

class UpdateShowMostUsed implements ActionStrategy<State> {
    constructor(readonly showMostUsed: boolean = false) {}

    reduce() {
        return {
            showMostUsed: this.showMostUsed,
        };
    }
}

class UpdateSearch implements ActionStrategy<State> {
    constructor(readonly search: string) {}

    reduce() {
        return {
            search: this.search,
        };
    }
}

function App() {
    const [state, dispatch] = useStrategyReducer<State>({ showMostUsed: false, search: '' });

    return (
        <>
            <div>
                <FilesButton onFilesSelected={console.log}>Select template</FilesButton>
                <FilesDropzone onFilesSelected={console.log} onFilesDropped={console.log}>
                    Drop template here or <em>select it</em>
                </FilesDropzone>
                <button onClick={() => dispatch(new UpdateShowMostUsed())}>Show all</button>
                <button onClick={() => dispatch(new UpdateShowMostUsed(true))}>Show most used</button>
                <input type="checkbox" checked={state.showMostUsed} onChange={(e) => dispatch(new UpdateShowMostUsed(e.target.checked))} />
                <input type="search" name="" id="" onChange={(e) => dispatch(new UpdateSearch(e.target.value))} />
            </div>
            <pre>{JSON.stringify(state, null, 4)}</pre>
        </>
    );
}

export default App;
