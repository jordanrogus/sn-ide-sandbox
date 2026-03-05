import '@servicenow/sdk/global'
import { DateColumn, StringColumn, Table } from '@servicenow/sdk/core'

//creates todo table, with three columns (deadline, status and task)
export const x_648117_ide_san_0_todo = Table({
    name: 'x_648117_ide_san_0_todo',
    label: [
        { 
           label: 'To Do', 
           language: 'en'
        }
     ],
    schema: {
        deadline: DateColumn({ label: 'Deadline' }),
        state: StringColumn({
            label: 'State',
            choices: {
                ready: { label: 'Ready' },
                completed: { label: 'Completed' },
                inProgress: { label: 'In Progress' },
            },
            dropdown: 'dropdown_with_none',
        }),
        task: StringColumn({ label: 'Task', maxLength: 120 }),
        comment: StringColumn({ label: 'Comment', maxLength: 120 }),
    },
})