// src/app/student-portal/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { students, attendanceRecords } from '@/lib/dummy-data';

const student = students[0]; // Assume first student

const attendanceSummary = {
  total: attendanceRecords.filter(r => r.studentId === student.id).length,
  present: attendanceRecords.filter(r => r.studentId === student.id && r.status === 'Present').length,
  absent: attendanceRecords.filter(r => r.studentId === student.id && r.status === 'Absent').length,
};

export default function StudentPortal() {
  const [sabaq, setSabaq] = useState({ ajker: '', amukhta: '', peche: '' });

  const handleSubmit = () => {
    console.log(sabaq);
    alert('সাবাক সাবমিট করা হয়েছে!');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ছাত্র পোর্টাল</h1>

      <Card>
        <CardHeader>
          <CardTitle>ব্যক্তিগত তথ্য</CardTitle>
        </CardHeader>
        <CardContent>
          <p>নাম: {student.name}</p>
          <p>রোল: {student.roll}</p>
          <p>জামাত: {student.jamat}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>উপস্থিতি সারাংশ</CardTitle>
        </CardHeader>
        <CardContent>
          <p>মোট দিন: {attendanceSummary.total}</p>
          <p>উপস্থিত: {attendanceSummary.present}</p>
          <p>অনুপস্থিত: {attendanceSummary.absent}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>পরীক্ষা ফলাফল</CardTitle>
        </CardHeader>
        <CardContent>
          <p>ফলাফল: A+ (ডেমো)</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>সাবাক ডায়েরি</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>আজকের সাবাক</label>
            <Input value={sabaq.ajker} onChange={(e) => setSabaq({ ...sabaq, ajker: e.target.value })} />
          </div>
          <div>
            <label>আমুখতা</label>
            <Input value={sabaq.amukhta} onChange={(e) => setSabaq({ ...sabaq, amukhta: e.target.value })} />
          </div>
          <div>
            <label>পেচে</label>
            <Input value={sabaq.peche} onChange={(e) => setSabaq({ ...sabaq, peche: e.target.value })} />
          </div>
          <Button onClick={handleSubmit}>সাবমিট করুন</Button>
        </CardContent>
      </Card>
    </div>
  );
}
