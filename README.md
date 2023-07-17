This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Full Stack Project README

This repository contains a full stack project with various features and technologies. It utilizes the following components:

- Environment Variable Handling with `env.t3.gg`
- Server Actions with `zact`
- Type Safety with `zod`
- Authentication using `clerk.dev` or `auth.js`
- ORM (Object-Relational Mapping) using `Prisma` or `Drizzle`
- Database Options: `PostgreSQL` or `MySQL`
- Caching Layer with `Upstash Redis`

## Project Structure

The project follows a typical folder structure for a full stack application:

## Prerequisites

Before you start running the project, make sure you have the following software installed:

- Node.js (version 16.8)
- npm (version 8.19.4)

# Inside the root directory

npm install

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/135Prithvi/discord-scape-api.git
   cd project
   ```
### Set up the environment variables:

1. Create a `.env` file in the root directory based on the provided `.env.example` file.
2. Fill in the necessary values, such as database credentials, authentication settings, etc.

### Get the connection string of the database:

### Access the application:

Open your browser and visit http://localhost:3000 to see the running application.

### Additional Notes

- EnvVar Handling with env.t3.gg:

  This project uses env.t3.gg to manage environment variables. Refer to the documentation to understand how to configure and access environment variables in your project.

- Server Actions with zact:

  The zact library is used for server-side actions. You can refer to the zact documentation to learn more about how to define and use actions in your project.

- Type Safety with zod:

  zod is employed to ensure type safety in the application. You can check the zod documentation to understand how to define and validate data schemas using zod.

- Authentication with clerk.dev or auth.js:

  This project supports authentication using either clerk.dev or auth.js. You can choose the one that suits your requirements and follow the respective documentation to set up and configure authentication.

- ORM Selection: Prisma or Drizzle:

  The project offers support for two popular ORM options: Prisma and Drizzle. Choose the one you prefer and follow the documentation to integrate and use the ORM in your project.

- Database Selection: PostgreSQL or MySQL:

  The project supports two database options: PostgreSQL and MySQL. Select the one you want to use, update the necessary configurations in the `.env` file, and follow the corresponding instructions for running the database.

- Caching Layer with Upstash Redis:

  Upstash Redis is integrated as the caching layer for the application. You can refer to the Upstash documentation to understand how to configure and utilize Redis caching in your project.

### Conclusion

Congratulations! You now have a full-stack project set up with various features and technologies. Feel free to explore and customize it further based on your specific requirements. Happy coding!


