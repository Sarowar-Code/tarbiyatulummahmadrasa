// src/app/fees/page.tsx
import FeeTable from '@/components/FeeTable';

export default function Fees() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ফি ব্যবস্থাপনা</h1>
      <FeeTable />
    </div>
  );
}
