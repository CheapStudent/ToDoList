import React from 'react';

const TaskCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 w-[314px] h-[177px] flex flex-col justify-between">
      {/* Priority and Title */}
      <div className="flex items-center justify-between">
        {/* Priority */}
        <span className="text-sm font-semibold text-blue-500">LOW</span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">Brainstorming</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Brainstorming brings team members' diverse experience into play.
      </p>

      {/* Comments and Files */}
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        {/* Comments */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123A7.962 7.962 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9z"
              clipRule="evenodd"
            />
          </svg>
          <span>12 comments</span>
        </div>

        {/* Files */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <span>0 files</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;