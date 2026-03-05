import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { infoUpdate } from '../server/demo-br-module'

//creates a business rule that pops up state change message whenever a todo record is updated
BusinessRule({
    $id: Now.ID['br2'],
    action: ['update'],
    table: 'x_648117_ide_san_0_todo',
    script: infoUpdate,
    name: 'Log State Change - Import',
    order: 100,
    when: 'before',
    active: true,
})