// src/components/BookList.jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { books } from "@/lib/dummy-data";

const BookList = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>শিরোনাম</TableHead>
          <TableHead>ক্যাটাগরি</TableHead>
          <TableHead>লেখক</TableHead>
          <TableHead>উপলব্ধ</TableHead>
          <TableHead>অ্যাকশন</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.category}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>
              <Badge variant={book.available ? 'default' : 'destructive'}>
                {book.available ? 'উপলব্ধ' : 'অনুপলব্ধ'}
              </Badge>
            </TableCell>
            <TableCell>
              {book.available ? (
                <Button variant="outline" size="sm">ধার করুন</Button>
              ) : (
                <Button variant="outline" size="sm">ফেরত দিন</Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </div>
  );
};

export default BookList;
