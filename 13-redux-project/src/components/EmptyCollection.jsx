const EmptyCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-gray-700">
        Empty Collection
      </h2>

      <p className="mt-2 text-gray-500">
        No items found in your collection.
      </p>
    </div>
  );
};

export default EmptyCollection;