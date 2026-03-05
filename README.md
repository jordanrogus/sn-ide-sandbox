# IDE Sandbox

A ServiceNow application demonstrating the capabilities of the ServiceNow IDE and Now SDK Fluent API.

## Overview

This application showcases the development of ServiceNow metadata using the Now SDK Fluent DSL (Domain-Specific Language). It includes examples of tables, business rules, and client scripts that work together to create a simple To-Do management system.

## Features

- **To-Do Table**: A custom table for managing tasks with deadline, state, and comment fields
- **State Change Tracking**: Business rule that logs state changes with user-friendly messages
- **Client-Side Notifications**: Welcome messages when forms are loaded
- **Modern Development**: Built using ServiceNow Fluent API and TypeScript

## Application Details

- **Application Name**: IDE Sandbox
- **Scope**: `x_648117_ide_san_0`
- **ServiceNow SDK Version**: 4.3.0
- **Fluent API Version**: 4.3.0

## Project Structure

```
src/
├── fluent/                 # Fluent API metadata definitions
│   ├── demo-table.now.ts   # To-Do table definition
│   ├── demo-br.now.ts      # Business rule definition
│   ├── demo-br.ts          # Business rule script
│   ├── demo-cs.now.ts      # Client script definition
│   └── client/
│       └── demo-cs.js      # Client-side script
└── server/
    └── demo-br-module.ts   # Server-side modules
```

## Components

### 1. To-Do Table (`x_648117_ide_san_0_todo`)
A custom table with the following fields:
- **Task**: Text field for task description (max 120 characters)
- **State**: Choice field with options:
  - Ready
  - In Progress
  - Completed
- **Deadline**: Date field for task due date
- **Comment**: Text field for additional notes (max 120 characters)

### 2. Business Rule - Log State Change
- **Trigger**: After update on the To-Do table
- **Function**: Displays an info message showing state transitions
- **Example**: "State updated from 'Ready' to 'In Progress'"

### 3. Client Script - Demo Client Script
- **Trigger**: On form load for the To-Do table
- **Function**: Displays a welcome message to users

## Prerequisites

- ServiceNow instance with developer access
- Node.js (compatible version with ServiceNow SDK)
- ServiceNow CLI tools installed
- ServiceNow IDE or compatible development environment

## Installation

1. Clone this repository:
   ```bash
   git clone [repository-url]
   cd ide-sandbox
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your ServiceNow instance connection (if not already configured)

4. Build the application:
   ```bash
   npm run build
   ```

5. Deploy to your ServiceNow instance:
   ```bash
   npm run deploy
   ```

## Available Scripts

- `npm run build` - Builds the ServiceNow application
- `npm run deploy` - Installs the application to your ServiceNow instance
- `npm run transform` - Transforms the application metadata
- `npm run types` - Updates TypeScript type definitions

## Development

This application is built using the ServiceNow Fluent DSL, which allows you to define ServiceNow metadata in TypeScript. Key files:

- Files with `.now.ts` extension contain Fluent API metadata definitions
- Regular `.ts` and `.js` files contain the actual script logic
- Use `Now.include()` to reference external script files from Fluent definitions

### Key Patterns

```typescript
// Table definition
export const tableName = Table({
    name: 'x_648117_ide_san_0_table_name',
    schema: {
        field1: StringColumn({ label: 'Field 1' }),
        field2: DateColumn({ label: 'Field 2' })
    }
})

// Business Rule definition
BusinessRule({
    $id: Now.ID['unique_id'],
    table: 'table_name',
    script: Now.include('./script-file.js'),
    // ... other properties
})
```

## Dependencies

### Development Dependencies
- `@servicenow/sdk`: ServiceNow SDK for Fluent API
- `@servicenow/glide`: ServiceNow Glide API types
- `eslint`: Code linting

### Runtime Dependencies
- `lodash`: Utility library for JavaScript
- `validator`: String validation library

## Testing

To test the application:

1. Deploy the application to your ServiceNow instance
2. Navigate to the To-Do table in your instance
3. Create new records and test state transitions
4. Verify that info messages appear when states change
5. Verify that welcome messages appear when forms load

## Contributing

When contributing to this project:

1. Follow ServiceNow development best practices
2. Use the Fluent API for metadata definitions
3. Maintain TypeScript typing where applicable
4. Test changes in a development instance before submitting

## License

UNLICENSED - This is a demonstration/sandbox application.

## Learn More

- [ServiceNow Developer Documentation](https://developer.servicenow.com/)
- [ServiceNow SDK Documentation](https://developer.servicenow.com/dev.do#!/reference/api/vancouver/sdk/index)
- [ServiceNow Fluent API Guide](https://developer.servicenow.com/dev.do#!/learn/learning-plans/vancouver/new_to_servicenow/app_store_learnv2_buildmyfirstapp_vancouver_fluent_api_introduction)

---

*This application was created to demonstrate ServiceNow IDE capabilities and modern ServiceNow development practices using the Now SDK Fluent API.*