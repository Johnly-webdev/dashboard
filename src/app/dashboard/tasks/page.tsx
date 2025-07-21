import React from 'react';

const page = () => {
  const tasks = [
  {
    id: 1,
    title: "Finish project report",
    description: "Complete the final report for the project and submit it.",
    status: "In Progress",
    dueDate: "2025-02-18",
  },
  {
    id: 2,
    title: "Update website content",
    description: "Revise the homepage text to reflect recent changes.",
    status: "Pending",
    dueDate: "2025-02-20",
  },
  {
    id: 3,
    title: "Team meeting",
    description: "Weekly sync-up with the development team.",
    status: "Completed",
    dueDate: "2025-02-15",
  },
  {
    id: 4,
    title: "Design new logo",
    description: "Create a new logo for the marketing campaign.",
    status: "Pending",
    dueDate: "2025-02-25",
  },
  {
    id: 5,
    title: "Fix login bug",
    description: "Resolve user login issue on mobile devices.",
    status: "In Progress",
    dueDate: "2025-02-21",
  },
  {
    id: 6,
    title: "Backup database",
    description: "Ensure all data is backed up securely before update.",
    status: "Completed",
    dueDate: "2025-02-19",
  },
  {
    id: 7,
    title: "Plan client presentation",
    description: "Prepare slides and talking points for Monday's meeting.",
    status: "Pending",
    dueDate: "2025-02-23",
  },
  {
    id: 8,
    title: "Refactor codebase",
    description: "Improve structure and readability of code.",
    status: "In Progress",
    dueDate: "2025-03-01",
  },
  {
    id: 9,
    title: "Write unit tests",
    description: "Add tests for new authentication module.",
    status: "Pending",
    dueDate: "2025-02-27",
  },
  {
    id: 10,
    title: "Update resume",
    description: "Include recent projects and achievements.",
    status: "Completed",
    dueDate: "2025-02-16",
  },
  {
    id: 11,
    title: "Deploy new version",
    description: "Push v2.1.0 to production server.",
    status: "Pending",
    dueDate: "2025-03-04",
  },
  {
    id: 12,
    title: "Conduct user survey",
    description: "Collect feedback from early users.",
    status: "In Progress",
    dueDate: "2025-02-28",
  },
  {
    id: 13,
    title: "Organize files",
    description: "Clean up and categorize project folders.",
    status: "Completed",
    dueDate: "2025-02-17",
  },
  {
    id: 14,
    title: "Write blog post",
    description: "Draft post on project milestones.",
    status: "Pending",
    dueDate: "2025-02-26",
  },
  {
    id: 15,
    title: "Review pull requests",
    description: "Check and approve pending merge requests.",
    status: "In Progress",
    dueDate: "2025-02-22",
  },
  {
    id: 16,
    title: "Onboard new intern",
    description: "Introduce tools and workflows.",
    status: "Completed",
    dueDate: "2025-02-24",
  },
  {
    id: 17,
    title: "Set up CI/CD pipeline",
    description: "Automate build and deployment processes.",
    status: "Pending",
    dueDate: "2025-03-03",
  },
  {
    id: 18,
    title: "Create marketing plan",
    description: "Outline strategy for Q2 product promotion.",
    status: "In Progress",
    dueDate: "2025-03-02",
  },
  {
    id: 19,
    title: "Update documentation",
    description: "Revise API docs to reflect recent changes.",
    status: "Pending",
    dueDate: "2025-03-05",
  },
  {
    id: 20,
    title: "Update dependencies",
    description: "Update all outdated project dependencies.",
    status: "In Progress",
    dueDate: "2025-03-06",
  },
];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Tasks</h1>
        <div className="grid gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`border-l-4 p-5 rounded-md shadow-sm bg-white transition duration-200 hover:shadow-md ${
                task.status === "Completed"
                  ? "border-green-500"
                  : task.status === "In Progress"
                  ? "border-yellow-500"
                  : "border-red-500"
              }`}
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                <span
                  className={`px-4 py-1 text-sm font-medium rounded-full ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>

                <div className="flex gap-2 ml-auto">
                  <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit
                  </button>

                  {task.status !== "Completed" && (
                    <button className="px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200 transition">
                      Mark as Complete
                    </button>
                  )}

                  <button className="px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
