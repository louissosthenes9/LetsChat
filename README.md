# LetChat Documentation
![ChatApp Screenshot](https://github.com/louissosthenes9/LetsChat/blob/master/frontend/public/appbanner.png)

Welcome to ChatApp, a real-time chat application built with modern technologies including Socket.io, JWT, React, Node.js, and DaisyUI. This documentation will guide you through the setup, features, and usage of the ChatApp.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Client-Side Usage](#client-side-usage)
- [License](#license)

## Features
- **Real-Time Messaging:** Instant messaging using Socket.io.
- **JWT Authentication:** Secure user authentication with JSON Web Tokens.
- **User Online Status:** Display online users in real-time.
- **Notifications:** In-built notifications for new messages.
- **Responsive UI:** Built with React and styled with DaisyUI.

## Technologies Used
- **Backend:**
  - Node.js
  - Express.js
  - Socket.io
  - MongoDB
  - Mongoose
  - JSON Web Token (JWT)
- **Frontend:**
  - React
  - DaisyUI
  - Zustand (state management)
- **Others:**
  - Webpack
  - Babel

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed
- MongoDB installed and running

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chatapp.git
   cd chatapp
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../fronted
   npm install
   ```

## Configuration
1. **Backend Configuration:**
   - Create a `.env` file in the `server` directory and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

2. **Frontend Configuration:**
   - Update the API base URL in the frontend configuration file if necessary.

## Running the Application
1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints
### Authentication
- **POST /api/auth/register:** Register a new user.
- **POST /api/auth/login:** Login a user and receive a JWT.

### Messages
- **POST /api/messages/:id:** Send a message to a specific user.
- **GET /api/messages/:id:** Retrieve messages for a conversation as an array.

### Users
- **GET /api/users/online:** Get a list of online users.

## Client-Side Usage
### Hooks
- **useListenMessage:** Custom hook to listen for incoming messages.
- **useGetMessages:** Custom hook to fetch messages for a conversation.

### Components
- **Messages:** Displays the list of messages in a conversation.
- **Message:** Individual message component.
- **MessageSkeleton:** Loading skeleton for messages.

### Context
- **AuthContext:** Provides authentication state and methods.
- **SocketContext:** Manages the socket server accross the users.

### Styles
- **DaisyUI:** Used for responsive and modern UI components.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance. Enjoy using ChatApp!
