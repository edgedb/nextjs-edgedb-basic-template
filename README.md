# 🎉 Next.js + EdgeDB template

This starter is designed to help you get up and running with EdgeDB and Next.js quickly. It includes a basic EdgeDB schema and a UI to get you started. Below you can find the steps to set up the project and start building your app as well as some ideas for extending it further.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fedgedb%2Fnextjs-edgedb-basic-template&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22edgedb%22%2C%22productSlug%22%3A%22edgedb%22%7D%5D)

This template includes:

- [Next.js](https://nextjs.org) for React framework
- [EdgeDB](https://edgedb.com) for database
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS framework
- [ESLint](https://eslint.org) for linting

## 🧐 What's inside?

```sh
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── src/
├── public/
├── dbschema
│   ├── default.esdl
├── edgedb.toml
├── eslint.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

Directory structure:

- `app/` - Next.js pages and components
- `public/` - static assets
- `components/` - React components
- `src/` - utility functions
- `dbschema/` - EdgeDB schema and migrations
- `edgedb.toml` - EdgeDB configuration
- `edgedb.ts` - EdgeDB client
- `eslint.config.js` - ESLint configuration
- `next-env.d.ts` - Next.js types
- `next.config.js` - Next.js configuration
- `package.json` - npm dependencies
- `pnpm-lock.yaml` - pnpm lockfile
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🚀 Quick start

To get started with this template, you need to:

### 1. Clone the repository & install dependencies

```sh
git clone https://github.com/edgedb/nextjs-edgedb-basic-template.git
cd nextjs-edgedb-basic-template

pnpm i
```

You can also click the "Use this template" button to create a new repository based on this template.

### 2. Install EdgeDB CLI (optional)

You can just use `npx edgedb`, it would do the right thing
to automatically install and run EdgeDB CLI for you.

This README will use `npx edgedb <command>` style, but if you have
the CLI installed you can use it directly, like this: `edgedb <command>`.

<details><summary>However, you can install the CLI manually</summary>

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

For more installation options, see the [EdgeDB installation guide](https://docs.edgedb.com/cli).

</details>

### 3. Initialize EdgeDB project

To run this project, you need to initialize a new EdgeDB project. Run the following command:

```sh
npx edgedb project init
```

### 4. Generate types

This template includes a script to generate TypeScript types from the EdgeDB schema. Run the following command:

```sh
pnpm generate:all
```

### 5. Start the development server

```sh
pnpm dev
```

Follow the instructions in the terminal to open the app in your browser.

### 6. Open the EdgeDB UI

To view the database in the EdgeDB UI run:

```sh
npx edgedb ui
```

## ✨ Next steps

### Extend the EdgeDB schema

Open the `dbschema/default.esdl` file and add your own types and
fields. You can start by adding a `Post` type with a
`title` and `content` field. For example:

```sql
type Post {
  # Add your new fields here:
  required title: str;
  required content: str;
}
```

### Edit the EdgeDB query

Open the `app/page.tsx` file and update the query
to include your new type.

```ts
const postsQuery = e.select(e.Post, (_post) => ({
  id: true,
  title: true,
  content: true,
  // Add your other fields here
}))
```

## 👩‍🏫 Learn More

Explore a list of resources to help you get started with EdgeDB and Next.js:

- [Generative UI with Vercel AI SDK and EdgeDB](https://www.edgedb.com/blog/generative-ui-with-vercel-ai-sdk-and-edgedb)
- [Stop building auth, start building apps with EdgeDB and Next.js](https://www.edgedb.com/blog/stop-building-auth-start-building-apps-with-edgedb-and-next-js)
- [Building a simple blog application with EdgeDB and Next.js](https://docs.edgedb.com/guides/tutorials/nextjs_app_router)
- [Integrating EdgeDB with tRPC](https://docs.edgedb.com/guides/tutorials/trpc)
- [The ultimate TypeScript query builder](https://www.edgedb.com/blog/designing-the-ultimate-typescript-query-builder)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out the [EdgeDB documentation](https://edgedb.com/docs) to learn more about EdgeDB and EdgeDB Auth.

## ☁️ Deployment

Follow the deployment instructions in the [EdgeDB documentation](https://docs.edgedb.com/guides/tutorials/nextjs_app_router#deploying-to-vercel) to deploy your Next.js app to EdgeDB Cloud and Vercel.

Or 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fedgedb%2Fnextjs-edgedb-basic-template&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22edgedb%22%2C%22productSlug%22%3A%22edgedb%22%7D%5D)