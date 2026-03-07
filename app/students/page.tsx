// src/app/students/page.tsx
import Link from 'next/link';
import StudentTable from '@/components/StudentTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Students() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ছাত্র তালিকা</h1>
        <Link href="/students/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            নতুন ছাত্র যোগ করুন
          </Button>
        </Link>
      </div>
      <StudentTable />
    </div>
  );
}
