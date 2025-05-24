# Debi Basic Auth App

A simple fullstack authentication app with a React Native (Expo Go) frontend and a Node.js (NestJS) backend.

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm
- Expo GO
- nestjs

---

## Backend

1. **Install dependencies:**
   ```sh
   cd api
   npm install
   ```

2. **Start the backend server:**
   ```sh
   nest start
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

---

## Frontend

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Start the Expo app:**
   ```sh
   npx expo start
   ```
   - Use the Expo Go app on your phone to scan the QR code, or run in a web browser.

---

## Notes

## Notes

- **If using a real device:**  
  Update all backend URLs in the frontend code from `localhost` to your computer's local IP (e.g., `http://192.168.1.100:5000`).
- **CORS:**  
  The backend is configured to allow requests from the Expo frontend.
- **User List Endpoint (Development Only):**  
  A `GET /users` endpoint is available to view all generated users. This is for development purposes only and should be removed or secured in production.
- **Username is case-sensitive**

---

## Future Work

- **HTTPS:**  
  Add HTTPS support for secure communication between frontend and backend.
- **Password Hashing:**  
  Store hashed passwords instead of plain text for better security.
- **Docker:**  
  Add Docker support for easy deployment and consistent environments.
- **Testing:**  
  Add unit and integration tests for both backend and frontend.

---