import { AlertCircle } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-red-50 p-6 text-center">
      <AlertCircle className="h-12 w-12 text-red-500" />

      <h2 className="text-lg font-semibold text-red-600">
        Error
      </h2>

      <p className="text-sm text-red-500">
        Something went wrong!
      </p>
    </div>
  );
};

export default Error;