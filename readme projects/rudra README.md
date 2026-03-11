# Rudra Travel Service Website

Professional corporate transport website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop.
- **Modern UI:** Corporate aesthetics with smooth animations using Framer Motion.
- **Pages:** Home, About, Services, Safety, Fleet, Clients, Contact.
- **Integration:** Google Maps embed and WhatsApp integration for direct inquiries.
- **SEO:** Meta tag management using `react-helmet-async`.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd rudratravelservice
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## Configuration

### Contact Form

The contact form is configured to redirect inquiries directly to WhatsApp.

1.  Open `src/pages/Contact.jsx`.
2.  Update the `phoneNumber` variable with your business WhatsApp number.
    ```javascript
    const phoneNumber = "919994340262";
    ```

## Deployment

This project is ready for deployment on Vercel, Netlify, or any static hosting service.

**Build Command:** `npm run build`
**Output Directory:** `dist`

## License

This project is proprietary to Rudra Travel Service.
