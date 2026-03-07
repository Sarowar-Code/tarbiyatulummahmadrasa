// src/app/attendance/page.tsx
import AttendanceTable from '@/components/AttendanceTable';

export default function Attendance() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">উপস্থিতি ব্যবস্থাপনা</h1>
      <AttendanceTable />
    </div>
  );
}
