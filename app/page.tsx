import Link from "next/link";
import NextSteps from "@/components/NextSteps";
import { createClient } from "edgedb"

export default async function Home() {
  const client = createClient();

  const result = await client.query<number>("SELECT 1 + 1");

  return (
    <div className="relative isolate px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            EdgeDB Next.js Starter
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Welcome to the EdgeDB Next.js Starter. This starter is designed to
            help you get up and running with EdgeDB and Next.js quickly. It
            includes a basic EdgeDB schema and a UI to get you started. Below are some next steps to help you get up to speed.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {/* show an example query result with some explanation */}
            The result of the query <code className="
              inline-block
              px-2
              py-0.5
              text-sm
              font-medium
              text-white
              bg-gray-700
              rounded
              shadow-sm
              select-none
            ">SELECT 1 + 1</code> is: <code className="
            inline-block
            px-2
            py-0.5
            text-sm
            font-medium
            text-white
            bg-gray-700
            rounded
            shadow-sm
            select-none
          ">{result}</code>.<br />
            Modify the query in <code className="
              inline-block
              px-2
              py-0.5
              text-sm
              font-medium
              text-white
              bg-gray-700
              rounded
              shadow-sm
              select-none
            ">app/page.tsx</code> to see the result of a different query.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl pt-4 sm:pt-8 lg:pt-12">
        <NextSteps />
      </div>
    </div>
  );
}
