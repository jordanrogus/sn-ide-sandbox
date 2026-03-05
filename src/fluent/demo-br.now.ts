import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

//creates a business rule that pops up state change message whenever a todo record is updated
BusinessRule({
    $id: Now.ID['br1'],
    action: ['update'],
    table: 'x_648117_ide_san_0_todo',
    script: Now.include('./demo-br.ts'),
    name: 'Log State Change',
    order: 100,
    when: 'after',
    active: true,
})