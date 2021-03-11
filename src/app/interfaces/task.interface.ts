export interface Task {
  id: number;
  name:string;
  description: string;
  datetime: number;
  isComplete: boolean;
}

/*export interface Task<T> {
  id: number;
  name:string;
  description: string;
  datetime: T;
  isComplete: boolean;
}
*/

/*const item: Task<string> = {
  id: 0,
  name: 'Test',
  description: 'werty',
  datetime: '2101',
  isComplete: true
}
*/

/*export interface AddTask extends Task {
  addTime: number;
}
*/
/*export interface AddTask {
  id: number;
  name:string;
  description: string;
  datetime: number;
  isComplete: boolean;
  addTime?: number;
}
*/

