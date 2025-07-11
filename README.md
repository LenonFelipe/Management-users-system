# 🛡️ User Management API (Node.js + JWT + Sequelize)

A simple and secure RESTful API for managing users. This project supports user registration and login with encrypted passwords and JWT-based authentication. Built using **Node.js**, **Express**, **Sequelize**, and **MySQL**.

---

## 🚀 Features Implemented

- ✅ User registration (`POST /api/auth/register`)
- ✅ User login with JWT (`POST /api/auth/login`)
- ✅ Password hashing with Bcrypt
- ✅ Sequelize ORM integration with MySQL
- ✅ Environment-based configuration using `.env`
- ✅ Sync script to create database tables

---

## 🔧 Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL
- bcrypt
- jsonwebtoken (JWT)
- dotenv

---


---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
```

2. **Install dependencies:**

```bash
npm install
```
3. **Create and configure .env:**

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_secret_key
```
4. **Create the database in MySQL:**

```sql
CREATE DATABASE yourdatabase;
```
5. **Run the sync script to create tables:**

```bash
node sync.js
```
6. **Start the server:**

```bash
node app.js
```

## 🔄 API Endpoints

🔹 POST /api/auth/register
Registers a new user.

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

🔹 POST /api/auth/login
Logs in a user and returns a JWT token.

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
Response:

```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```
## ✅ Status
🟢 MVP completed
You can register users, log in with valid credentials, and receive a secure JWT for session management.

## 👤 Author
Developed by Lenon Felipe
📧 Contact: lenonfelipe98@gmail.com


