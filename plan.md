# Tarbiyatul Ummah Madrasa Management System

## Next.js UI Architecture Plan

---

# Project Goal

Build a **modern UI demo of a Madrasa Management System** using **Next.js**.

Purpose:

- Showcase **beautiful modern UI**
- Demonstrate **main madrasa management features**
- Present a **working demo to client**
- Use **dummy data only**

⚠️ This project **does NOT include real backend or database**.
It is **only a frontend demo for client approval**.

---

# Technology Stack

## Core

- Next.js (App Router)
- React
- Node.js LTS

---

## UI & Frontend

- Tailwind CSS
- ShadCN UI
- Lucide React (icons)
- Recharts (charts)
- React Hook Form (forms)
- Zod (form validation)

---

# Project Initialization

Create project:

```bash
npx create-next-app@latest madrasa-ui-demo
```

Recommended options:

- App Router → Yes
- Tailwind → Yes
- TypeScript → Optional
- ESLint → Yes
- src directory → Yes
- Import alias (@) → Yes

---

# Install Required Libraries

```bash
npm install lucide-react recharts react-hook-form zod
```

Install ShadCN:

```bash
npx shadcn-ui@latest init
```

Add essential components:

```bash
npx shadcn-ui add button card table input badge dialog dropdown-menu
```

---

# Project Folder Structure

```
src
│
├── app
│   ├── layout.jsx
│   ├── page.jsx
│
│   ├── dashboard/page.jsx
│
│   ├── students
│   │   ├── page.jsx
│   │   ├── add/page.jsx
│   │   └── [id]/page.jsx
│
│   ├── attendance/page.jsx
│
│   ├── fees/page.jsx
│
│   ├── library/page.jsx
│
│   └── student-portal/page.jsx
│
├── components
│   ├── ui
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── StatCard.jsx
│   ├── StudentTable.jsx
│   └── AttendanceTable.jsx
│
├── lib
│   ├── dummy-data.js
│   ├── utils.js
│   └── constants.js
│
├── hooks
│   └── useStudents.js
│
└── styles
    └── globals.css
```

---

# Routing Structure

| URL             | Page              |
| --------------- | ----------------- |
| /dashboard      | Dashboard         |
| /students       | Student list      |
| /students/[id]  | Student profile   |
| /attendance     | Attendance system |
| /fees           | Fee management    |
| /library        | Library system    |
| /student-portal | Student dashboard |

---

# Layout System

Global layout contains:

- Sidebar navigation
- Top navbar
- Main content area

File:

```
app/layout.jsx
```

Structure:

```
Sidebar | Navbar
        | Page Content
```

---

# Component Architecture

## UI Components

Reusable ShadCN components.

Examples:

- Button
- Card
- Table
- Input
- Badge
- Dialog

Location:

```
components/ui
```

---

## Feature Components

Application-specific components.

Examples:

- StudentTable
- AttendanceTable
- FeeTable
- BookList
- StatCard

---

# Dummy Data System

Since this is a **UI demo**, all data will come from static files.

File:

```
lib/dummy-data.js
```

Example data:

- students
- attendanceRecords
- feePayments
- books
- dashboardStats

---

# Core Modules

## Dashboard

Shows overview:

- Total students
- Total teachers
- Today's attendance
- Monthly fees collection
- Recent admissions

Charts using:

```
Recharts
```

Examples:

- Monthly collection chart
- Attendance chart

---

# Student Management UI

Features:

- Student directory
- Search students
- Student profile page
- Admission form UI
- Guardian information

Fields:

- Name
- Roll
- Jamat
- Status
- Guardian Name
- Guardian Phone
- Admission Date

---

# Attendance Management UI

Features:

- Daily attendance marking
- Present / Absent / Late
- Attendance table
- Monthly attendance report UI

---

# Fee Management UI

Features:

- Monthly fee records
- Payment history UI
- Pending fee indicator
- Payment modal form

Payment methods (UI only):

- Cash
- Bank Transfer
- Mobile Banking

---

# Library Management UI

Features:

- Book catalog
- Book categories
- Borrow / Return interface
- Due date indicators

Categories:

- Hadith
- Tafsir
- Fiqh
- Seerat
- History
- Arabic Grammar

---

# Student Portal UI

Student dashboard showing:

- Personal information
- Attendance summary
- Exam results UI
- Sabaq diary

Fields:

- Ajker Sabaq
- Amukhta
- Peche

---

# UI Design System

Theme colors:

- Deep Green → Primary
- Emerald → Accent
- Gold → Highlights
- Sand → Background

Font:

```
Hind Siliguri
```

Language:

```
Bangla
```

---

# Development Phases

### Phase 1

Layout and navigation.

### Phase 2

Dashboard UI.

### Phase 3

Student management UI.

### Phase 4

Attendance UI.

### Phase 5

Fees UI.

### Phase 6

Library UI.

### Phase 7

Student portal UI.

---

# Deployment

Deploy demo on:

```
Vercel
```

Benefits:

- Fast deployment
- Free hosting
- Easy client sharing

---

# Future Development (After Client Approval)

If the client approves the demo, the next phase will include:

- Database integration
- Backend APIs
- Authentication
- Role-based access
- Full Madrasa ERP system

---

# Architecture Overview

```
Next.js (App Router)
        │
        ├── Tailwind CSS
        ├── ShadCN Components
        ├── Feature Components
        └── Dummy Data (UI Demo)
```

---
