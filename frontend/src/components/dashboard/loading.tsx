export default function Loading() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      {/* Chart Skeleton */}
      <div className="h-[350px] w-full bg-gray-200 rounded-xl"></div>
      {/* Grid Skeleton */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}