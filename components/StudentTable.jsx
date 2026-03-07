// src/components/StudentTable.jsx
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { students } from "@/lib/dummy-data";

const StudentTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>রোল</TableHead>
          <TableHead>নাম</TableHead>
          <TableHead>জামাত</TableHead>
          <TableHead>স্ট্যাটাস</TableHead>
          <TableHead>গার্ডিয়ান ফোন</TableHead>
          <TableHead>অ্যাকশন</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.roll}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.jamat}</TableCell>
            <TableCell>
              <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                {student.status}
              </Badge>
            </TableCell>
            <TableCell>{student.guardianPhone}</TableCell>
            <TableCell>
              <Link href={`/students/${student.id}`}>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
