import { TrainingTable } from '@/components/training-table';
import { TrainingContext } from '@/context/training.context';
import { Training } from '@/model/training.model';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TrainingTable', () => {
    it('renders correct message when there is no training', () => {
        const trainings: Training[] = [];

        const { getByText } = renderComponent(trainings);

        expect(getByText("Pas d'entraînement disponible")).toBeInTheDocument();
    });

    it('does not render table when there is no training', () => {
        const trainings: Training[] = [];

        const { queryByTestId } = renderComponent(trainings);

        expect(queryByTestId('training-table')).not.toBeInTheDocument();
    });

    it('should render one training', () => {
        const trainings: Training[] = [
            {
                title: 'Introduction Cybersécurité',
                category: 'Cybersécurité',
                status: 'Victoire',
            },
        ];

        const { queryAllByTestId } = renderComponent(trainings);

        expect(queryAllByTestId('training-item')).toHaveLength(1);
    });

    it('should render multiple trainings', () => {
        const trainings: Training[] = [
            {
                title: 'Introduction Cybersécurité',
                category: 'Cybersécurité',
                status: 'Victoire',
            },
            {
                title: 'Protéger son WiFi personnel',
                category: 'À la maison',
                status: 'À commencer',
            },
            {
                title: 'Reconnaître un mail de phishing',
                category: 'Cybersécurité',
                status: 'Défaite',
            },
        ];

        const { queryAllByTestId } = renderComponent(trainings);

        expect(queryAllByTestId('training-item')).toHaveLength(3);
    });

    function renderComponent(
        trainings: Training[],
        handleStart: (title: string) => void = jest.fn()
    ) {
        return render(
            <TrainingContext.Provider value={{ trainings, handleStart }}>
                <TrainingTable />
            </TrainingContext.Provider>
        );
    }
});
