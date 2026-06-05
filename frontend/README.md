# 🎓 I Cloud EMS (Education Management System)

A full-stack Education Management System (EMS) built using the MERN Stack. This project helps educational institutions manage students, attendance, fees, results, placements, and academic information through a modern web-based dashboard.

## 🚀 Features

### 👨‍🎓 Student Module

* Add new students
* View student records
* Update student details
* Delete student records
* Search students by name

### 👨‍💼 Admin Dashboard

* View total students count
* Manage student information
* Monitor academic records

### 📚 Academic Features

* Attendance Management
* Results Management
* Timetable Module
* Placement Module
* Fee Status Tracking

### 🔐 Authentication

* User Registration
* User Login
* Secure authentication using backend APIs

### 🎨 Modern UI

* React-based responsive interface
* Tailwind CSS styling
* Dashboard with profile section
* Quick access modules
* Interactive cards and navigation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```bash
icloud-ems/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Shaurya-Chaturvedi/icloud-ems.git
```

### 2. Navigate to Project

```bash
cd icloud-ems
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_secret_key
```

### 6. Run Backend

```bash
cd backend
node server.js
```

### 7. Run Frontend

```bash
cd frontend
npm run dev
```

---
## 📸 Screenshots

### Login Page
![Login](screenshots/login.png)

### Register Page
![Register](screenshots/register.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Student Management
![Students](screenshots/students.png)

### Admin Dashboard
![Admin](screenshots/admin.png)

### Placement Module
![Placement](screenshots/placement.png)

---

## 🎯 Future Enhancements

* Role-based access control
* Faculty management system
* Attendance analytics
* Placement prediction
* Student profile management
* Notification system
* Cloud deployment

---

## 👨‍💻 Author

**Shaurya Chaturvedi**

B.Tech Computer Science Engineering
Galgotias University

GitHub: https://github.com/Shaurya-Chaturvedi

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
