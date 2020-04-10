import { Jobs } from '../jobs';

export interface Project {
    id: number ;
    projectName: string ;
    projectDescription: string ;
    datePosted: any ;
    job: Jobs;
}
