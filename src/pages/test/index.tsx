
import { Button, Popover } from "flowbite-react";

function Component() {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400 pt-3" >
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
      </div>
      <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
    </div>
  );

  return (
    <div className="flex gap-2">
      <Popover content={content} placement="bottom" trigger="hover">
        <Button className="bg-blue-500">Popover hover</Button>
      </Popover>
      
    </div>
  );
}

export  default Component;
