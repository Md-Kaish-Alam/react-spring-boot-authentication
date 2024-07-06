# React Spring Boot Authentication

This project demonstrates a complete authentication system using React for the front-end and Spring Boot for the back-end. It includes user registration, login, and protected routes that can only be accessed by authenticated users.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

The project is a full-stack application that integrates a React front-end with a Spring Boot back-end to provide user authentication and authorization functionalities. Users can sign up, log in, and access protected routes based on their authentication status.

## Features

- User Registration
- User Login
- Protected Routes
- Role-based Access Control
- Error Handling

## Technologies

### Front-end

- React
- Axios
- React Router
- Tailwind CSS

### Back-end

- Spring Boot
- Spring Security
- JWT (JSON Web Tokens)
- MongoDB
- Maven

## Setup

### Prerequisites

- Node.js (v12+)
- npm or yarn
- Java (JDK 11+)
- Maven
- MongoDB

### Front-end Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Md-Kaish-Alam/react-spring-boot-authentication.git
    cd react-spring-boot-authentication
    ```

2. Navigate to the `frontend` directory and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Start the front-end development server:

    ```bash
    npm start
    ```

### Back-end Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Update the database configuration with your data in `src/main/resources/application.properties`:

    ```properties
    spring.data.mongodb.uri=
    spring.security.cors.configurationSource.allowedOrigins=
    ```

3. Build and run the Spring Boot application:

    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

## Running the Application

After setting up both the front-end and back-end, you can access the application at `http://localhost:5173`.

### Front-end

- **Login**: `http://localhost:5173/login`
- **Sign Up**: `http://localhost:5173/signup`
- **Dashboard**: `http://localhost:5173/dashboard` (Protected Route)

### Back-end

- The back-end API will be running at `http://localhost:8081`.

## API Endpoints

### Authentication

- **POST** `/auth/signin`: Authenticate a user.
    - Request Body: `{ "email": "user@example.com", "password": "password" }`
    - Response: `{ "token": "jwt-token" }`

- **POST** `/auth/signup`: Register a new user.
    - Request Body: `{ "fullName": "John Doe", "email": "john@example.com", "password": "password", "role": "User", "mobileNumber": "1234567890" }`
    - Response: `201 Created`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or submitting pull requests.

![Screenshot 2024-07-05 041939](https://github.com/Md-Kaish-Alam/react-spring-boot-authentication/assets/82415398/3b90f4c5-eebb-484f-bb1a-79bae47533ef)
![Screenshot 2024-07-05 041915](https://github.com/Md-Kaish-Alam/react-spring-boot-authentication/assets/82415398/f327fb27-1f89-4c29-96ac-4f8ff56f0024)
![Screenshot 2024-07-05 042004](https://github.com/Md-Kaish-Alam/react-spring-boot-authentication/assets/82415398/2b0e6348-bd41-4347-ae5a-55b9c525e8d4)
![Screenshot 2024-07-07 014056](https://github.com/Md-Kaish-Alam/react-spring-boot-authentication/assets/82415398/98afc872-1885-4996-83b6-2b32f168baea)
