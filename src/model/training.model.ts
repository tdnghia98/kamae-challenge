export type Training = {
    title: string;
    category: string;
    status: TrainingStatus;
};

export type TrainingStatus = 'À commencer' | 'Défaite' | 'Victoire';
