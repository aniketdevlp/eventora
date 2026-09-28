# Eventora - MERN Event Management & Booking Platform

Eventora is a full-stack event management and ticket booking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a robust role-based access control system, secure authentication with Two-Factor Authentication (2FA), and a comprehensive dashboard for event administrators.

## ✨ Features

### 👨‍💼 Admin Role
*   **Intuitive Dashboard:** A well-designed interface to monitor total revenue, paid clients, and pending requests.
*   **Event Management:** Seamlessly create new events, set seat limits, and delete outdated events.
*   **Booking Management:** Track user payments and manually confirm or reject booking requests for registered users.
*   **Seat Tracking:** Real-time monitoring of available versus booked seats for every event.

### 👤 User Role
*   **Secure Authentication:** Users must verify their accounts using a Two-Factor Authentication (2FA) OTP sent directly to their registered email.
*   **Brevo API Integration:** Reliable email delivery for OTPs using the Brevo API, bypassing standard SMTP restrictions.
*   **Event Registration:** Browse available events and book tickets.
*   **Double Verification:** To ensure maximum authenticity, a secondary verification code is sent to the user's email at the exact time of event booking.

## 🛠️ Tech Stack

### Frontend (Client)
*   **React** & **React DOM** - UI Library
*   **React Router DOM** - Routing and navigation
*   **Axios** - Promise-based HTTP client for API requests
*   **React Icons**) - Scalable vector icons

### Backend (Server)
*   **Express.js** - Fast, unopinionated web framework for Node.js
*   **Mongoose** - Elegant MongoDB object modeling 
*   **Bcryptjs** - Password hashing for secure data storage
*   **JSON Web Token** - Secure, stateless authorization (JWT)
*   **Cors** - Cross-Origin Resource Sharing
*   **Dotenv** - Environment variable management
