import { TaskInterface } from "./task.model";
import { UserInterface } from "./user.model";

export enum ACTIVE{
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

export enum STATUS{
    INQUEUE = 'inqueue',
    INPROCESS = 'inprocess',
    DONE = 'done'
}

export enum PRIORITY{
    LOW ='low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export interface ProjectInterface {
    id?: string,
    title: string,
    description: string,
    startDate: string,
    dueDate: string,
    lastUpdate: string,
    priority: PRIORITY,
    active: ACTIVE,
    favorite: boolean,
    image: string,
    tasks: TaskInterface[],
    tags: string[],
    member: UserInterface[]
}