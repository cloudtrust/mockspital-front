import { Department } from './departements';

export interface Doctor {
    id;
    firstName;
    lastName;
    departments: Department[];
}
