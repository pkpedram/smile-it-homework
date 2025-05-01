## Smile IT Homework

create a simple authentication system using Next.js, Drizzle ORM, and BetterAuth.

## Description

The project includes these stacks:

- Next.js 15+ with App Router
- TypeScript
- Drizzle ORM for database operations
- BetterAuth for authentication
- Database: Neon (PostgreSQL)

## Setting up the project

- Install the dependecies with the following command:
  `yarn`

**Note: do not use npm!**

- Create a postgresql neon database in https://console.neon.tech/

- create a `.env` file and setup the environment variables ( You can find what you should include in the `envsample` file)

- apply changes and schemas to the database via the command below:

`npx drizzle-kit push`

- run the poject via the command below:

`yarn dev`
