## Overview
This project is a backend system for managing inventory and sales in a small shop. It allows users to add items to the inventory, create bills for sales transactions, and automatically update the inventory when a bill is created. The system is built using Node.js, Express.js, and MongoDB.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

# Steps
  1. Install Dependencies**:
    ```
    npm install or npm i
    ```

  2. Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```
    MONGODB_URI=mongodb:your MongodbURL
    PORT=3000
    ```

 3. Run the Server**:
    Make sure MongoDB is running, then start the server:
    ```
    nodemon app.js
    ```
    The server will start on `http://localhost:5000`.
