import { Training } from '@/model/training.model';
import { sortTrainings, startTraining } from '@/service/training.service';

describe('TrainingService', () => {
    it('should sort trainings based on status then category then title', () => {
        const introductionCybersecurite: Training = {
            title: 'Introduction Cybersécurité',
            category: 'Cybersécurité',
            status: 'Victoire',
        };

        const protegerWifiPersonnel: Training = {
            title: 'Protéger son WiFi personnel',
            category: 'À la maison',
            status: 'À commencer',
        };

        const reconnaisDonneesPersonnelles: Training = {
            title: 'Je reconnais des données personnelles',
            category: 'RGPD',
            status: 'À commencer',
        };

        const reconnaitreMailPhishing: Training = {
            title: 'Reconnaître un mail de phishing',
            category: 'Cybersécurité',
            status: 'Défaite',
        };

        const bienUtiliserSmartphone: Training = {
            title: 'Bien utiliser son smartphone',
            category: 'À la maison',
            status: 'À commencer',
        };

        const choisirMotDePasseInvincible: Training = {
            title: 'Choisir un mot de passe invincible',
            category: 'Cybersécurité',
            status: 'À commencer',
        };

        const limiterEmpreinteNumerique: Training = {
            title: 'Limiter mon empreinte numérique',
            category: 'À la maison',
            status: 'À commencer',
        };

        const pourquoiRGPDImportant: Training = {
            title: 'Pourquoi le RGPD est important',
            category: 'RGPD',
            status: 'À commencer',
        };

        const introductionRGPD: Training = {
            title: 'Introduction RGPD',
            category: 'RGPD',
            status: 'Défaite',
        };

        const unsortedTrainings = [
            introductionCybersecurite,
            protegerWifiPersonnel,
            reconnaisDonneesPersonnelles,
            reconnaitreMailPhishing,
            bienUtiliserSmartphone,
            choisirMotDePasseInvincible,
            limiterEmpreinteNumerique,
            pourquoiRGPDImportant,
            introductionRGPD,
        ];

        const expectedSortedTrainings = [
            bienUtiliserSmartphone,
            limiterEmpreinteNumerique,
            protegerWifiPersonnel,
            choisirMotDePasseInvincible,
            reconnaisDonneesPersonnelles,
            pourquoiRGPDImportant,
            reconnaitreMailPhishing,
            introductionRGPD,
            introductionCybersecurite,
        ];

        expect(sortTrainings(unsortedTrainings)).toEqual(
            expectedSortedTrainings
        );
    });

    it('should not begin a training that does not exist', () => {
        expect(() => {
            startTraining(
                [
                    {
                        title: 'Protéger son WiFi personnel',
                        category: 'À la maison',
                        status: 'À commencer',
                    },
                ],
                'My Training'
            );
        }).toThrow();
    });

    it('should not begin a training that has already started', () => {
        expect(() => {
            startTraining(
                [
                    {
                        title: 'Protéger son WiFi personnel',
                        category: 'À la maison',
                        status: 'Défaite',
                    },
                ],
                'Protéger son WiFi personnel'
            );
        }).toThrow();
    });

    it('should begin a training that has not started', () => {
        const training = startTraining(
            [
                {
                    title: 'Protéger son WiFi personnel',
                    category: 'À la maison',
                    status: 'À commencer',
                },
            ],
            'Protéger son WiFi personnel'
        );
        expect(training.title).toBe('Protéger son WiFi personnel');
        expect(training.category).toBe('À la maison');
        expect(training.status).not.toBe('À commencer');
    });
});
