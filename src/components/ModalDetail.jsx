import { PaperClipIcon } from "@heroicons/react/solid";

export default function ModalDetail() {
  return (
    <div className="shadow overflow-hidden sm:rounded-lg">
      <div className="  px-4 py-5 sm:p-0">
        <dl className=" sm:divide-gray-200">
          <hr />
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Assignee</dt>
            <dd
              style={{ color: "#FFFFFF80" }}
              className="mt-1 text-sm  sm:mt-0 sm:col-span-2"
            >
              Margot Foster
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Due date</dt>
            <dd
              style={{ color: "#FFFFFF80" }}
              className="mt-1 text-sm  sm:mt-0 sm:col-span-2"
            >
              Backend Developer
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Priority</dt>
            <dd
              style={{ color: "#FFFFFF80" }}
              className="mt-1 text-sm  sm:mt-0 sm:col-span-2"
            >
              margotfoster@example.com
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Assignee</dt>
            <dd
              style={{ color: "#FFFFFF80" }}
              className="mt-1 text-sm  sm:mt-0 sm:col-span-2"
            >
              $120,000
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white">Description</dt>
            <dd
              style={{ color: "#FFFFFF80" }}
              className="mt-1 text-sm  sm:mt-0 sm:col-span-2"
            >
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <hr />
        </dl>
      </div>
      
    </div>
  );
}
