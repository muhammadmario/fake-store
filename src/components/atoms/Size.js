import React from "react";

function Size({ value }) {
  return (
    <div class="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 "
      >
        {value}
      </label>
    </div>
  );
}

export default Size;
