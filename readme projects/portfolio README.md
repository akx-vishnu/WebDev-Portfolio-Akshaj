# Portfolio Website

A reactive personal portfolio website built with React, Vite, and Tailwind CSS. It features Hero, About, Skills, Projects, and Services sections to showcase professional work. A key highlight is the contact form integrated with Google Sheets via Apps Script for seamless, real-time message collection, all wrapped in a fully responsive, modern design.

## Features

-   **Responsive Design:** Fully responsive layout that works on all devices (desktop, tablet, mobile).
-   **Modern UI:** Built with Tailwind CSS for a clean and modern aesthetic.
-   **Smooth Animations:** Utilizes Framer Motion for engaging entry and scroll animations.
-   **Contact Form:** Integrated with Google Sheets using Google Apps Script to store form submissions.
-   **Component-Based:** Modular architecture using React components.

## Tech Stack

-   **Frontend:** [React](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Form Backend:** Google Apps Script & Google Sheets

## Production Ready

This portfolio is fully optimized for production environments. It is built using Vite for fast and efficient asset bundling, ensuring high performance and a smooth user experience.

### Deployment

To deploy this project:

1.  Build the project for production:
    ```bash
    npm run build
    ```
2.  Deploy the `dist` folder to your preferred hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## Configuration

### Contact Form Setup

The contact form is configured to send data to a Google Sheet. For detailed setup instructions, please refer to [google_sheets_setup.md](google_sheets_setup.md).
