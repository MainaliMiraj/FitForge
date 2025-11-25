"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-white shadow-sm border-b border-gray-200"
      data-testid="app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Task Flow
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              data-testid="nav-dashboard"
            >
              Dashboard
            </Link>
            <Link
              href="/add"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-testid="nav-add-task"
            >
              Add Task
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
