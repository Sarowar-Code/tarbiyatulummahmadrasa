// src/app/students/add/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
const schema = z.object({
  name: z.string().min(1, "নাম প্রয়োজন"),
  roll: z.string().min(1, "রোল প্রয়োজন"),
  jamat: z.string().min(1, "জামাত প্রয়োজন"),
  status: z.string(),
  guardianName: z.string().min(1, "গার্ডিয়ান নাম প্রয়োজন"),
  guardianPhone: z.string().min(1, "গার্ডিয়ান ফোন প্রয়োজন"),
  admissionDate: z.string().min(1, "ভর্তি তারিখ প্রয়োজন"),
});

export default function AddStudent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // In real app, send to backend
    alert("ছাত্র যোগ করা হয়েছে!");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">নতুন ছাত্র যোগ করুন</h1>
      <Card>
        <CardHeader>
          <CardTitle>ছাত্র তথ্য</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label>নাম</label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label>রোল</label>
              <Input {...register("roll")} />
              {errors.roll && (
                <p className="text-red-500">{errors.roll.message}</p>
              )}
            </div>
            <div>
              <label>জামাত</label>
              <Input {...register("jamat")} />
              {errors.jamat && (
                <p className="text-red-500">{errors.jamat.message}</p>
              )}
            </div>
            <div>
              <label>স্ট্যাটাস</label>
              <Input {...register("status")} defaultValue="Active" />
            </div>
            <div>
              <label>গার্ডিয়ান নাম</label>
              <Input {...register("guardianName")} />
              {errors.guardianName && (
                <p className="text-red-500">{errors.guardianName.message}</p>
              )}
            </div>
            <div>
              <label>গার্ডিয়ান ফোন</label>
              <Input {...register("guardianPhone")} />
              {errors.guardianPhone && (
                <p className="text-red-500">{errors.guardianPhone.message}</p>
              )}
            </div>
            <div>
              <label>ভর্তি তারিখ</label>
              <Input type="date" {...register("admissionDate")} />
              {errors.admissionDate && (
                <p className="text-red-500">{errors.admissionDate.message}</p>
              )}
            </div>
            <Button type="submit">যোগ করুন</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
