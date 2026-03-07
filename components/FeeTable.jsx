// src/components/FeeTable.jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { feePayments, students } from "@/lib/dummy-data";

const FeeTable = () => {
  const paymentsWithNames = feePayments.map(payment => ({
    ...payment,
    studentName: students.find(s => s.id === payment.studentId)?.name || 'Unknown',
  }));

  return (
    <div className="overflow-x-auto">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ছাত্র নাম</TableHead>
          <TableHead>পরিমাণ</TableHead>
          <TableHead>তারিখ</TableHead>
          <TableHead>পদ্ধতি</TableHead>
          <TableHead>স্ট্যাটাস</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paymentsWithNames.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.studentName}</TableCell>
            <TableCell>৳{payment.amount}</TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell>{payment.method}</TableCell>
            <TableCell>
              <Badge variant={payment.status === 'Paid' ? 'default' : 'destructive'}>
                {payment.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </div>
  );
};

export default FeeTable;
