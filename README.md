# 🛡️ Authentication & Authorization System

A modern, full-stack authentication and authorization solution with **Node.js/Express/MongoDB** backend and **React/TypeScript/Tailwind** frontend. Designed for secure, scalable, and cross-subdomain session handling.

---

## 📁 Project Structure

```
authentication-and-authorization/
│
├── backend/   # Express.js, MongoDB, JWT, REST API
│
└── frontend/  # React, TypeScript, Tailwind CSS
```

---

## 🚀 Features

- **User Registration & Login** (JWT, cookies, secure password hashing)
- **Cross-Subdomain Authentication** (single sign-on across subdomains)
- **Role-based Authorization**
- **Password Validation & Reset**
- **Protected API Routes**
- **Responsive, Modern UI**
- **Environment-based Configuration**
- **API Documentation**

---

## ⚙️ Setup Instructions

### 1. Backend

#### Prerequisites
- Node.js (v18+)
- MongoDB

#### Installation

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

#### Environment Variables

Create a `.env` file in `/backend` (see `.env.example`):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES_IN=30m
JWT_REFRESH_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
CORS_URL=http://localhost:5173
```

#### API Endpoints

| Method | Endpoint              | Description                |
|--------|----------------------|----------------------------|
| POST   | `/api/v1/auth/login` | User login                 |
| POST   | `/api/v1/user/register` | User registration      |
| GET    | `/api/v1/user/my-profile` | Get current user      |
| POST   | `/api/v1/auth/logout` | Logout (clear cookie)      |
| ...    | ...                  | See code for more          |

---

### 2. Frontend

#### Prerequisites
- Node.js (v18+)

#### Installation

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

#### Environment Variables

Create a `.env` file in `/frontend` (see `.env.example`):

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

---

## 📝 API Documentation

After running the backend, you can use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the endpoints.

**Example: Login**

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "username": "youruser",
  "password": "yourpassword",
  "rememberMe": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

---

## 🌐 Cross-Subdomain Authentication

- Cookies are set with `domain=.yourdomain.com` (or `.localhost` for local dev).
- Auth is preserved across all subdomains (e.g., `shop1.localhost`, `shop2.localhost`).
- Backend uses HTTP-only cookies for security.

---

## 📂 Example `.env.example` Files

### `/backend/.env.example`
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES_IN=30m
JWT_REFRESH_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
CORS_URL=http://localhost:5173
```

### `/frontend/.env.example`
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

---

## 🖥️ Deployment

- Deploy **backend** and **frontend** separately (e.g., Vercel/Netlify for frontend, Render/Heroku for backend).
- Set environment variables in your deployment dashboard.
- Update `CORS_URL` and `VITE_API_BASE_URL` to your deployed URLs.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

👨‍💻 Author
Md Ashiqur Rahman
Mern Stack Developer
📧 web3.0.ashiq@gmail.com
🌐 Portfolio | 💼 LinkedIn

> **Made with ❤️ for secure, scalable authentication.**