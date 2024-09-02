/* eslint-disable @next/next/no-img-element */
import {
  CircleStackIcon,
  ListBulletIcon,
  PencilSquareIcon,
  CloudIcon,
  PlayCircleIcon
} from "@heroicons/react/20/solid";

const learningResources = [
  {
    title: "Generative UI with Vercel AI SDK and EdgeDB",
    url: "https://www.edgedb.com/blog/generative-ui-with-vercel-ai-sdk-and-edgedb",

  },
  {
    title: "Stop building auth, start building apps with EdgeDB and Next.js",
    url: "https://www.edgedb.com/blog/stop-building-auth-start-building-apps-with-edgedb-and-next-js",
  },
  {
    title: "Building a simple blog application with EdgeDB and Next.js",
    url: "https://docs.edgedb.com/guides/tutorials/nextjs_app_router",
  },
  {
    title: "Integrating EdgeDB with tRPC",
    url: "https://docs.edgedb.com/guides/tutorials/trpc",
  },
  {
    title: "The ultimate TypeScript query builder",
    url: "https://www.edgedb.com/blog/designing-the-ultimate-typescript-query-builder",
  },
];

const timeline = [
  {
    id: 0,
    content: "Extend the EdgeDB schema",
    description: (
      <div>
        Open the <code>schema.esdl</code> file and add your own types and
        fields. You can start by adding a <code>Post</code> type with a{" "}
        <code>title</code> and <code>content</code> field. For example:
        <pre className="mt-2">
          {`type Post {
  # Add your new fields here:
  required title: str;
  required content: str;
}`}
        </pre>
      </div>
    ),
    icon: CircleStackIcon,
  },
  {
    id: 2,
    content: "Create and run a migration",
    description: (
      <div>
        Run the following commands to create a new migration file and apply it:
        <pre className="mt-2">
          {`\
$ edgedb migration create
$ edgedb migration apply
`}
        </pre>
      </div>
    ),
    icon: PencilSquareIcon,
  },
  {
    id: 2,
    content: "Generate TypeScript types",
    description: (
      <div>
        Run the following command to generate TypeScript types for your schema:
        <pre className="mt-2">
          {`\
$ pnpm generate:all
`}
        </pre>
      </div>
    ),
    icon: PlayCircleIcon,
  },
  {
    id: 3,
    content: "Edit the EdgeDB query",
    description: (
      <div>
        Open the <code>app/page.tsx</code> file and update the query
        to include your new type. For example:
        <pre className="mt-2">
          {`\
const postsQuery = e.select(e.Post, (_post) => ({
  id: true,
  title: true,
  content: true,
  // Add your other fields here
}))`}
        </pre>
      </div>
    ),
    icon: ListBulletIcon,
  },
  {
    id: 3,
    content: "Deploy your app",
    description: (
      <div>
        Once you&apos;re happy with your changes, you can deploy your app to the
        EdgeDB Cloud and Vercel. Follow the deployment instructions in the{" "}
        <a
          className="
          text-primary
          hover:underline
          focus:ring-2
          focus:ring-offset-2
          focus:ring-primary
          focus:ring-offset-white
          focus:outline-none
          focus:ring-opacity-60
        "
          href='"https://docs.edgedb.com/guides/tutorials/nextjs_app_router#deploying-to-vercel"'
        >
          EdgeDB documentation
        </a>
        .
      </div>
    ),
    icon: CloudIcon,
  },
];

export default function NextSteps() {
  return (
    <div className="">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-center text-2xl mb-6 mt-10 font-bold tracking-tight text-gray-900 sm:text-3xl">
            Learning Resources
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-gray-500">
            Explore a list of resources to help you get started with EdgeDB and Next.js.
          </p>
        </div>
        <div className="space-y-10">
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
            {learningResources.map((resource) => (
              <div key={resource.title} className="p-6 flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold">
                  <a

                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-4"
                  >
                    {resource.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-center text-2xl mb-6 mt-10 font-bold tracking-tight text-gray-900 sm:text-3xl">
        Next Steps
      </h2>
      <div className="flow-root" suppressHydrationWarning>
        <ul role="list" className="-mb-8">
          {timeline.map((step, eventIdx) => (
            <li key={step.id}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <span className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white">
                    <step.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex flex-col min-w-0 flex-1 pt-2">
                    <p className="text-sm text-gray-700 font-semibold">
                      {step.content}
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
