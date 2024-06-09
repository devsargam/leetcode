import db from "@lc/db/client";

export default async function AllProblemsPage() {
  const problems = await db.problem.findMany();

  return <div>{JSON.stringify(problems)}</div>;
}
