import React from 'react';

import { TrainingProvider } from './context/training.context';
import { TrainingTable } from './components/training-table';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <TrainingProvider>
                <TrainingTable />
            </TrainingProvider>
        </ErrorBoundary>
    );
};

export default App;
