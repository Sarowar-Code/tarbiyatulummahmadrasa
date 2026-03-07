// src/app/library/page.tsx
import BookList from '@/components/BookList';

export default function Library() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">লাইব্রেরি ব্যবস্থাপনা</h1>
      <BookList />
    </div>
  );
}
