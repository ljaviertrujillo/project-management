import { PRIORITY, STATUS } from "./project.model"
import { SubtaskInterface } from "./subtask.model"

export interface TaskInterface {
    id?: string,
    projectId: string,
    title: string,
    startDate: string,
    dueDate: string,
    lastUpdated: string,
    status: STATUS,
    priority: PRIORITY,
    subtask: SubtaskInterface[],
    member: string,
}