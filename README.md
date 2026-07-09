# Classic Energy Fitness Gym - Premium Website

A visually stunning, high-performance, and fully responsive website for **Classic Energy Fitness Gym** in Chikamagaluru. Built with React.js (Vite), Tailwind CSS, Framer Motion, and EmailJS.

## 🚀 Features
- **Premium Dark UI**: Neon green accents, glassmorphism, 3D hover effects, smooth scroll animations.
- **Components**: 
  - Hero (Parallax & Video/Image background)
  - About (Animated Counters & Image reveals)
  - Programs (Premium cards with hover transitions)
  - Plans (Membership details and pricing)
  - Trainers (Circular 3D flip cards)
  - BMI Calculator (Fully functional with conditional styling)
  - Testimonials (Swiper JS auto-carousel)
  - Gallery (Masonry style with lightbox)
  - Contact (EmailJS form, Google Maps, WhatsApp chat floating button)

## 🛠 Tech Stack
- React.js (Vite)
- Tailwind CSS v3
- Framer Motion (Advanced animations)
- React Intersection Observer (Scroll-triggered animations)
- Lucide React (Icons)
- Swiper.js (Testimonial slider)
- EmailJS (Contact form API)

---

## 💻 Installation Steps

1. **Install Dependencies**
   Navigate to the project root and install all required packages:
   ```bash
   npm install
   ```

2. **Run Local Development Server**
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## ✉️ EmailJS Setup Instructions

The contact form is integrated with **EmailJS**. To make it functional in production, you need to configure your own account:

1. **Sign Up**: Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2. **Add a Service**: Navigate to "Email Services" and add a new service (e.g., Gmail). Note down your `Service ID`.
3. **Create a Template**: Go to "Email Templates" and create a new template. Note down your `Template ID`.
   - Sample Template Content:
     ```
     New Inquiry from Classic Energy Fitness Website:
     Name: {{user_name}}
     Email: {{user_email}}
     Phone: {{user_phone}}
     Message: {{message}}
     ```
4. **Get Public Key**: Go to "Account" -> "API keys" and note down your `Public Key`.
5. **Update Code**: Open `src/components/Contact.jsx` and locate the `sendEmail` function. Replace the placeholder IDs with your actual IDs:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
   ```

---

## 🌍 Deployment Steps (Vercel)

This application is ready to be deployed on Vercel for production.

1. Create a GitHub repository and push your project code to it.
2. Sign in to [Vercel](https://vercel.com).
3. Click on **Add New... > Project**.
4. Import your GitHub repository.
5. Vercel will auto-detect the Vite framework. Keep the default build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Vercel will generate a live URL for your gym's website.

---

*Designed and engineered with passion for high performance. 🏋️‍♂️*
