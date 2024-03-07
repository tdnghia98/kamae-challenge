import { FC, useContext } from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { TrainingContext } from '@/context/training.context';
import TrainingItem from '@/components/training-item';

export const TrainingTable: FC = () => {
    const { trainings } = useContext(TrainingContext);

    return (
        <div className="p-8">
            {trainings.length ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">
                        Liste des entraînements
                    </h1>
                    <Table data-testid="training-table">
                        <TableHeader data-testid="training-table-header">
                            <TableRow>
                                <TableHead>Titre</TableHead>
                                <TableHead>Catégorie</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody data-testid="training-table-body">
                            {trainings.map(training => (
                                <TrainingItem
                                    data-testid="training-item"
                                    key={training.title}
                                    training={training}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </>
            ) : (
                <h1 className="text-2xl font-bold mb-4">
                    Pas d'entraînement disponible
                </h1>
            )}
        </div>
    );
};
