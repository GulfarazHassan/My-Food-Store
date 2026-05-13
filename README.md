# 🍔 Restaurant Food Delivery Backend API

A scalable and modular food delivery backend built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** following a clean layered architecture.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API
- bcryptjs
- Morgan Logger
- dotenv

---

# 📁 Project Architecture

```mermaid
flowchart TB

    %% =========================
    %% CLIENT LAYER
    %% =========================
    subgraph CLIENT["CLIENT APPLICATIONS"]
        C1["📱 Mobile App"]
        C2["💻 Web Application"]
        C3["🧪 API Testing (Postman)"]
    end

    %% =========================
    %% API GATEWAY
    %% =========================
    G["🌐 Express.js API Server"]

    %% =========================
    %% MIDDLEWARE LAYER
    %% =========================
    subgraph MIDDLEWARE["SECURITY & MIDDLEWARE LAYER"]
        M1["🔐 JWT Authentication"]
        M2["🛡️ Role-Based Authorization"]
        M3["📄 Request Validation"]
        M4["📊 Logger & Error Handler"]
        M5["🔄 CORS & JSON Parser"]
    end

    %% =========================
    %% ROUTING LAYER
    %% =========================
    subgraph ROUTES["API ROUTING LAYER"]
        R1["Auth Routes"]
        R2["User Routes"]
        R3["Restaurant Routes"]
        R4["Category Routes"]
        R5["Food Routes"]
        R6["Order Routes"]
    end

    %% =========================
    %% CONTROLLER LAYER
    %% =========================
    subgraph CONTROLLERS["BUSINESS LOGIC LAYER"]
        CT1["Authentication Controller"]
        CT2["User Management Controller"]
        CT3["Restaurant Management Controller"]
        CT4["Category Management Controller"]
        CT5["Food Management Controller"]
        CT6["Order & Payment Controller"]
    end

    %% =========================
    %% DATA ACCESS LAYER
    %% =========================
    subgraph MODELS["DATABASE MODEL LAYER"]
        MD1["User Model"]
        MD2["Restaurant Model"]
        MD3["Category Model"]
        MD4["Food Model"]
        MD5["Order Model"]
    end

    %% =========================
    %% DATABASE
    %% =========================
    DB[("🍃 MongoDB Database")]

    %% =========================
    %% CONFIGURATION
    %% =========================
    CFG["⚙️ Environment Configuration<br/>JWT_SECRET • MONGO_URI • PORT"]

    %% =========================
    %% FLOW
    %% =========================
    CLIENT --> G
    CFG --> G

    G --> MIDDLEWARE
    MIDDLEWARE --> ROUTES

    R1 --> CT1
    R2 --> CT2
    R3 --> CT3
    R4 --> CT4
    R5 --> CT5
    R6 --> CT6

    CT1 --> MD1
    CT2 --> MD1
    CT3 --> MD2
    CT4 --> MD3
    CT5 --> MD4
    CT6 --> MD5
    CT6 --> MD4
    CT6 --> MD1

    MD1 --> DB
    MD2 --> DB
    MD3 --> DB
    MD4 --> DB
    MD5 --> DB
```
