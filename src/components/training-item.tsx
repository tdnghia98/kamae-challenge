import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Training } from '@/model/training.model';
import { TableRow, TableCell } from '@/components/ui/table';
import { TrainingContext } from '@/context/training.context';

interface Props {
    training: Training;
}

const TrainingItem: React.FC<Props> = ({ training }) => {
    const { handleStart } = useContext(TrainingContext);

    return (
        <TableRow data-testid="training-item">
            <TableCell data-testid="training-item-title">
                {training.title}
            </TableCell>
            <TableCell data-testid="training-item-category">
                {training.category}
            </TableCell>
            <TableCell data-testid="training-item-status">
                {training.status}
            </TableCell>
            <TableCell data-testid="training-item-button-cell">
                {training.status === 'À commencer' && (
                    <Button
                        data-testid="training-item-button"
                        onClick={() => handleStart(training.title)}
                    >
                        Go !
                    </Button>
                )}
            </TableCell>
        </TableRow>
    );
};

export default TrainingItem;
