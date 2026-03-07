// src/components/AttendanceTable.jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { attendanceRecords, students } from "@/lib/dummy-data";

const AttendanceTable = () => {
  const recordsWithNames = attendanceRecords.map(record => ({
    ...record,
    studentName: students.find(s => s.id === record.studentId)?.name || 'Unknown',
  }));

  return (
    <div className="overflow-x-auto">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>তারিখ</TableHead>
          <TableHead>ছাত্র নাম</TableHead>
          <TableHead>স্ট্যাটাস</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recordsWithNames.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.studentName}</TableCell>
            <TableCell>
              <Badge variant={record.status === 'Present' ? 'default' : record.status === 'Late' ? 'secondary' : 'destructive'}>
                {record.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </div>
  );
};

export default AttendanceTable;
