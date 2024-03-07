import { TRAININGS } from '@/lib/constants';
import { Training } from '@/model/training.model';

export interface ITrainingsRepository {
    getTrainings(): Training[];
}

export class TrainingsRepository implements ITrainingsRepository {
    private static instance: ITrainingsRepository;
    private trainings = TRAININGS;
    private constructor() {}

    getTrainings(): Training[] {
        return this.trainings;
    }

    public static getInstance(): ITrainingsRepository {
        if (!TrainingsRepository.instance) {
            TrainingsRepository.instance = new TrainingsRepository();
        }
        return TrainingsRepository.instance;
    }
}
