# Peepul Tree School Website

A modern, nature-themed website for Peepul Tree School built with React, Vite, and Tailwind CSS. Features include smooth animations, a dynamic gallery, testimonials, and a daily activity timeline. Integrated with Google Sheets for admissions inquiries and Google Maps for location, offering a seamless user experience for parents.

## Features

*   **Responsive Design:** Optimized for all devices using Tailwind CSS.
*   **Smooth Animations:** Powered by `framer-motion` for a polished feel.
*   **Components:**
    *   **Hero Section:** Dynamic typing effect and engaging visuals.
    *   **Programs:** Detailed breakdown of age-appropriate learning levels.
    *   **Gallery:** Lightbox gallery showcasing school life.
    *   **Testimonials:** Parent stories and reviews.
    *   **FAQ:** Accordion-style frequently asked questions.
    *   **Timeline:** Vertical "A Day at Peepul Tree" visualization.
    *   **Contact Form:** Redirects inquiries to WhatsApp with a pre-filled message.
    *   **Google Map:** Embedded location map.
*   **Performance:** Lazy loading for heavy assets and components.
*   **SEO:** Comprehensive optimization including JSON-LD structured data, dynamic meta tags, and automated sitemap generation.

## SEO Features

*   **Advanced Meta Tags:** Dynamic Title, Description, and Open Graph tags managed component-wise.
*   **Structured Data:** JSON-LD schema for School, LocalBusiness, FAQ, and Breadcrumbs.
*   **Sitemap & Robots:** Automatically generated on build.
*   **Performance:** Resource hints, lazy loading, and CLS optimization.

## Tech Stack

*   React
*   Vite
*   Tailwind CSS
*   Framer Motion
*   Lucide React (Icons)
*   React Helmet Async (SEO)

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/akx-vishnu/Peepul-Tree-School.git
    cd Peepul-Tree-School
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Configuration

*   **WhatsApp Integration:** Ensure the school phone number in `src/data/schoolData.js` is correct. Ideally, use a format like `+91 94007 42440`.
*   **Content:** Most content is centralized in `src/data/schoolData.js` for easy updates.

## License

MIT
