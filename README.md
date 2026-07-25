# 🖤 NOIR Commerce

A premium fashion e-commerce application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Supabase**.

NOIR Commerce combines an editorial-inspired interface with a complete customer shopping workflow, including authentication, product browsing, wishlist management, cart functionality, checkout, and order history.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_NOIR-black?style=for-the-badge&logo=vercel)](https://noir-commerce-os.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/rooha-codes/noir-commerce-os)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Auth-3ECF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌐 Live Demo

Visit the deployed application:

**https://noir-commerce-os.vercel.app/**

---

## ✨ Features

- Premium editorial homepage
- Responsive mobile and desktop design
- Product catalog
- Product detail pages
- Product image gallery
- Collection browsing
- Journal and editorial pages
- About page
- Product search
- Category filtering and sorting
- Wishlist management
- Shopping cart and cart drawer
- Checkout flow
- Order confirmation
- Order history
- Order details
- Customer account dashboard
- Supabase authentication
- Login and signup
- Forgot and reset password flows
- Protected account routes
- Guest-only authentication routes
- SEO metadata
- Accessible keyboard navigation
- Lazy-loaded routes
- Image loading optimization
- Vercel SPA routing support
- Custom 404 page

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Zustand
- React Hook Form
- Zod
- Lucide React

### Authentication and Services

- Supabase Authentication
- Supabase JavaScript Client

### Development and Deployment

- ESLint
- TypeScript compiler
- Git
- GitHub
- Vercel

---

## 📂 Repository Structure

```text
noir-commerce-os/
│
├── app/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── app/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── data/
│   │   ├── features/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── types/
│   │   └── utils/
│   │
│   ├── .env.example
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.ts
│
├── prompts/
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rooha-codes/noir-commerce-os.git
```

### 2. Open the application directory

```bash
cd noir-commerce-os/app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Add your Supabase values:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### 5. Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

Run the development server:

```bash
npm run dev
```

Check the project with ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📱 Application Pages

- Home
- Shop
- Product Details
- Collections
- Journal
- About
- Wishlist
- Cart
- Checkout
- Order Success
- Order Details
- Login
- Signup
- Forgot Password
- Reset Password
- Account Dashboard
- Order History
- 404 Not Found

---

## ⚡ Performance and Accessibility

- Route-based code splitting
- Lazy-loaded pages
- Optimized image loading
- Async image decoding
- High-priority hero images
- Local fallback images
- Responsive layouts
- Keyboard-accessible product galleries
- Visible focus states
- Accessible button and link labels
- Production-ready Vite build

---

## 🔐 Authentication

Authentication is powered by Supabase and includes:

- Account signup
- Account login
- Logout
- Forgot password
- Reset password
- Protected account routes
- Guest-only authentication routes
- Auth loading states
- Friendly authentication error messages

---

## 🚢 Deployment

The project is deployed on Vercel.

Production URL:

**https://noir-commerce-os.vercel.app/**

The application uses `vercel.json` to support client-side React Router routes when pages are opened or refreshed directly.

---

## 📦 Future Improvements

- Real database-backed orders
- Stripe payment integration
- Admin dashboard
- Product and inventory management
- Database-backed wishlist
- Product reviews
- Discount coupons
- Transactional email notifications
- Customer order emails
- Analytics dashboard

---

## 👩‍💻 Author

**Rooha Hashmi**

- GitHub: https://github.com/rooha-codes
- LinkedIn: https://www.linkedin.com/in/rooha-hashmi-44715a419
- Live Project: https://noir-commerce-os.vercel.app/

---

## ⭐ Support

If you found this project useful, consider giving the repository a star on GitHub.