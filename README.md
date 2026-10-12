# DevTinder 💻❤️

### Connect. Collaborate. Grow.

DevTinder is a developer networking platform that helps developers discover other developers, send connection requests, and build meaningful professional connections.

Built with the MERN stack, DevTinder provides a simple way to connect with people in the developer community.

---

## ✨ Features

- **Authentication** — Sign up and log in securely.
- **Developer Discovery** — Explore developer profiles.
- **Connection Requests** — Send requests to other developers.
- **Request Management** — Accept or reject incoming connection requests.
- **Connections** — View your accepted connections.
- **Profile Management** — Update your personal information, photo, and bio.
- **Profile Preview** — Preview your profile while editing.
- **Responsive UI** — A clean interface designed for different screen sizes.
- **Protected Routes** — Restrict access to authenticated features.

---

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- DaisyUI

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Authentication middleware

**Tools**
- Git & GitHub
- Postman
- npm

---

## 📸 Application Pages

| Page | Description |
|---|---|
| Login / Signup | Create an account or log in |
| Feed | Discover other developers |
| Edit Profile | Update your profile information |
| Connections | View connected developers |
| Requests | Manage received connection requests |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB or a MongoDB Atlas connection
- Git

### 1. Clone the repository

```bash
git clone https://github.com/nitinpurohit412/devTinder.git
cd devTinder
```

### 2. Install dependencies

Install the frontend and backend dependencies in their respective project directories.

**Frontend:**

```bash
cd frontend
npm install
```

**Backend:**

Open another terminal and navigate to the backend directory:

```bash
cd backend
npm install
```

> Adjust `frontend` and `backend` to match your actual folder names.

### 3. Configure environment variables

Create a `.env` file in the backend directory and configure the variables required by your server.

Example:

```env
PORT=7777
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

These are example variable names. Match them to the names used in your actual backend code.

### 4. Start the application

Start the backend:

```bash
npm run dev
```

Start the frontend from its directory:

```bash
npm run dev
```

Open the local URL shown in your frontend terminal, usually:

```text
http://localhost:5173
```

---

## 🔌 API Overview

The following endpoints reflect the routes used by the application. Authentication requirements and response formats depend on the backend implementation.

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/signup` | Register a user |
| `POST` | `/login` | Authenticate a user |
| `POST` | `/logout` | Log out a user |
| `PATCH` | `/profile/edit` | Update profile details |
| `GET` | `/user/connections` | Retrieve connections |
| `GET` | `/user/requests/received` | Retrieve received requests |
| `POST` | `/request/send/:status/:toUserId` | Send a connection request |
| `POST` | `/request/review/:status/:requestId` | Review a connection request |

---

## 🔐 Security Notes

- Keep secrets and database credentials in environment variables.
- Never commit your `.env` file.
- Configure CORS and cookie settings appropriately for your deployment.
- Validate incoming data and protect authenticated routes on the backend.

---

## 📁 Project Structure

A typical project structure may look like this:

devTinder/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── app.js
│   ├── .env
│   └── package.json
│
└── README.md


---

## 🎯 Project Goals

DevTinder was built as a full-stack learning project to practice:

- Building reusable React components
- Managing application state with Redux Toolkit
- Creating REST APIs with Express.js
- Working with MongoDB and Mongoose
- Implementing authentication and protected routes
- Connecting frontend and backend using Axios
- Designing a responsive user interface

---

## 🔮 Future Improvements

- Real-time chat between connected developers
- Search and filtering by skills
- Developer skill tags and interests
- Notifications for connection requests
- Pagination and improved discovery
- Automated tests and deployment improvements

---

## 👨‍💻 Author

**Nitin Purohit**

- GitHub: [@nitinpurohit412](https://github.com/nitinpurohit412)

---

If you find this project interesting, feel free to explore the code and share feedback.

**DevTinder — Meet developers. Build connections. Grow together.**