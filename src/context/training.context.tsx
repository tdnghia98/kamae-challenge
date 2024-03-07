import { TrainingsRepository } from '@/data/training.repository';
import { Training } from '@/model/training.model';
import { sortTrainings, startTraining } from '@/service/training.service';
import {
    FC,
    PropsWithChildren,
    createContext,
    useEffect,
    useState,
} from 'react';

export type TrainingContextType = {
    trainings: Training[];
    handleStart: (title: string) => void;
};

export const TrainingContext = createContext({} as TrainingContextType);

export const TrainingProvider: FC<PropsWithChildren> = ({ children }) => {
    const [trainings, setTrainings] = useState<Training[]>([]);
    const handleStart = (title: string) => {
        const newTraining = startTraining(trainings, title);
        setTrainings([...trainings, newTraining]);
    };

    useEffect(() => {
        const repository = TrainingsRepository.getInstance();
        setTrainings(sortTrainings(repository.getTrainings()));
    }, []);

    return (
        <TrainingContext.Provider value={{ trainings, handleStart }}>
            {children}
        </TrainingContext.Provider>
    );
};
