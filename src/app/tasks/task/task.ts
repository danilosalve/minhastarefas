export interface Task{
    id: number;
    title: string;
    user: string;
    category: string;
    description: string;
    completed: boolean;
    deadline: Date;
    dateCompleted: Date;
}