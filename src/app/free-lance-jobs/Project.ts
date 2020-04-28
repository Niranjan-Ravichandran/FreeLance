import { Jobs } from '../jobs';

export class Project {
    id: number ;
    projectName: string ;
    projectDescription: string ;
    skills: string[];
    datePosted: any ;
    job: Jobs;
    constructor() {
        this.skills = [] ;
    }
}
