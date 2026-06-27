import BaseCard from "@/components/dashboard/BaseCard";

export default function FieldsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* 1. Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <BaseCard>Total Fields: 24</BaseCard>
        {/* Baaki 3 cards yahan daalo */}
      </div>

      {/* 2. Controls */}
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search fields..." className="border p-2 rounded" />
        <button className="bg-green-800 text-white p-2 rounded">+ Add Field</button>
      </div>

      {/* 3. Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Field Name</th>
              <th className="p-4">Crop</th>
              <th className="p-4">Health</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Yahan tumhara data map hoga */}
          </tbody>
        </table>
      </div>
    </div>
  );
}