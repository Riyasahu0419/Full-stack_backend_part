# Full-stack_backend_part
# Mini Full-Stack Application Documentation

## Frontend (React)

### 1. Setup Instructions

#### Prerequisites:
- Node.js (v16 or later)
- npm or yarn

#### Installation Steps:
```bash
# Clone the frontend repository
git clone https://github.com/your-repo/frontend.git
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

### 2. Code Structure
```
frontend/
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── ProductList.js
│   │   ├── CreateProduct.js
│   │   ├── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Dashboard.js
│   ├── context/
│   │   ├── AuthContext.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
```

- **`context/AuthContext.js`**: Manages authentication state.
- **`services/api.js`**: Handles API requests.
- **`components/`**: UI components.
- **`pages/`**: Different pages.

### 3. Usage Instructions
#### Register & Login:
- Navigate to `/signup`, enter user details, and register.
- Navigate to `/login`, enter credentials, and authenticate.

#### CRUD Operations:
- View products on `/dashboard`.
- Add new products using the form.
- Edit or delete products if authenticated.

### 4. API Endpoints Used in Frontend
- `POST /api/auth/signup` → Register
- `POST /api/auth/login` → Authenticate user
- `GET /api/products` → Fetch products
- `POST /api/products` → Add product
- `PUT /api/products/:id` → Update product
- `DELETE /api/products/:id` → Remove product

### 5. Authentication Handling
- JWT tokens are stored in `localStorage`.
- Protected routes are managed using `AuthContext`.
- The `Authorization` header is sent with each request.

### 6. Deployment Instructions
#### Deploy on Vercel:
```bash
npm run build
vercel --prod
```

#### Deploy on Netlify:
```bash
npm run build
netlify deploy --prod
```

---

## Backend (Node.js, Express, MongoDB)

### 1. Setup Instructions
#### Prerequisites:
- Node.js (v16 or later)
- MongoDB Atlas or local MongoDB instance

#### Installation Steps:
```bash
# Clone the backend repository
git clone https://github.com/your-repo/backend.git
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

### 2. Environment Variables
Create a `.env` file:
```
PORT=8080
MONGO_URI="mongodb+srv://RiyaSahu:Riya%40123@cluster0.ohieplv.mongodb.net/Mini_Full-Stack_App"
JWT_SECRET=Masai
```

### 3. API Documentation
#### Authentication Endpoints:
- `POST /api/auth/signup`
  - Request: `{ name, email, password }`
  - Response: `{ message: 'User registered successfully' }`
- `POST /api/auth/login`
  - Request: `{ email, password }`
  - Response: `{ token: 'jwt_token' }`

#### Product Endpoints:
- `GET /api/products`
  - Response: `[ { id, name, price, userId } ]`
- `POST /api/products`
  - Requires Authentication
  - Request: `{ name, price }`
  - Response: `{ message: 'Product added' }`
- `PUT /api/products/:id`
  - Requires Authentication
  - Request: `{ name, price }`
  - Response: `{ message: 'Product updated' }`
- `DELETE /api/products/:id`
  - Requires Authentication
  - Response: `{ message: 'Product deleted' }`

### 4. Authentication & Authorization
- Uses JWT for authentication.
- Middleware protects private routes.

### 5. Deployment Instructions
#### Deploy on Render:
```bash
git push origin main
```
#### Deploy on render:
```bash
render
```

---

## Bonus Features (Optional)
- **Role-based access control** (admin vs. user).
- **Token refresh mechanism** for longer sessions.
- **Pagination & search** for product listings.


