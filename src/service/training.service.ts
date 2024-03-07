import { Training } from '@/model/training.model';

export function sortTrainings(trainings: Training[]): Training[] {
    return trainings.sort((a, b) => {
        const statusOrder = {
            'À commencer': 0,
            Défaite: 1,
            Victoire: 2,
        };
        return (
            statusOrder[a.status] - statusOrder[b.status] ||
            a.category.localeCompare(b.category) ||
            a.title.localeCompare(b.title)
        );
    });
}

export function startTraining(
    trainings: Training[],
    title: string
): Training | never {
    const training = trainings.find(t => t.title === title);
    if (!training) throw new Error(`Training ${title} does not exist`);
    if (training && training.status !== 'À commencer')
        throw new Error(`Training ${title} has already started`);

    training.status = Math.random() < 0.5 ? 'Victoire' : 'Défaite';
    return training;
}
