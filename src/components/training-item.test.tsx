import TrainingItem from '@/components/training-item';
import { Training, TrainingStatus } from '@/model/training.model';
import { render } from '@testing-library/react';

describe('TrainingItem', () => {
    it('should render the correct data of training', () => {
        const training: Training = {
            title: 'Introduction Cybersécurité',
            category: 'Cybersécurité',
            status: 'Victoire',
        };

        const { getByTestId } = renderComponent(training);

        expect(getByTestId('training-item-title')).toHaveTextContent(
            'Introduction Cybersécurité'
        );
        expect(getByTestId('training-item-category')).toHaveTextContent(
            'Cybersécurité'
        );
        expect(getByTestId('training-item-status')).toHaveTextContent(
            'Victoire'
        );
    });

    it.each<[TrainingStatus]>([['Victoire'], ['Défaite']])(
        'should not render the go button if training status is not "À commencer"',
        (trainingStatus: TrainingStatus) => {
            const training: Training = {
                title: 'Introduction Cybersécurité',
                category: 'Cybersécurité',
                status: trainingStatus,
            };

            const { queryByTestId } = renderComponent(training);

            expect(
                queryByTestId('training-item-button-cell')
            ).toBeInTheDocument();
            expect(
                queryByTestId('training-item-button')
            ).not.toBeInTheDocument();
        }
    );

    it('should render the correct state of go button', () => {
        const training: Training = {
            title: 'Introduction Cybersécurité',
            category: 'Cybersécurité',
            status: 'À commencer',
        };

        const { getByTestId } = renderComponent(training);
        expect(getByTestId('training-item-button-cell')).toBeInTheDocument();
        expect(getByTestId('training-item-button')).toBeEnabled();
    });

    it('should update the training status when the button is clicked', () => {
        const training: Training = {
            title: 'Introduction Cybersécurité',
            category: 'Cybersécurité',
            status: 'Victoire',
        };

        const { queryByTestId } = renderComponent(training);
        expect(queryByTestId('training-item-button-cell')).toBeInTheDocument();
        expect(queryByTestId('training-item-button')).not.toBeInTheDocument();
    });

    function renderComponent(training: Training) {
        return render(
            <table>
                <tbody>
                    <TrainingItem training={training} />
                </tbody>
            </table>
        );
    }
});
