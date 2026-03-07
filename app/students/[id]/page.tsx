// src/app/students/[id]/page.tsx
import { students } from '@/lib/dummy-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function StudentProfile({ params }) {
  const student = students.find(s => s.id === parseInt(params.id));

  if (!student) {
    return <div>ছাত্র খুঁজে পাওয়া যায়নি</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{student.name} এর প্রোফাইল</h1>
      <Card>
        <CardHeader>
          <CardTitle>বিস্তারিত তথ্য</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>রোল:</strong> {student.roll}</p>
          <p><strong>জামাত:</strong> {student.jamat}</p>
          <p><strong>স্ট্যাটাস:</strong> <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>{student.status}</Badge></p>
          <p><strong>গার্ডিয়ান নাম:</strong> {student.guardianName}</p>
          <p><strong>গার্ডিয়ান ফোন:</strong> {student.guardianPhone}</p>
          <p><strong>ভর্তি তারিখ:</strong> {student.admissionDate}</p>
        </CardContent>
      </Card>
    </div>
  );
}
