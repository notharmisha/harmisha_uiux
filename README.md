# Harmisha Patel | Product & UX/UI Portfolio

A modern, high-performance portfolio website built with a premium glassmorphism aesthetic. Featuring interactive case studies, smooth Framer Motion animations, and a responsive design.

## 🚀 Tech Stack

- **Core**: React 18 & TypeScript
- **Bundler**: Vite
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather & Simple Icons)
- **Styling**: Vanilla CSS with CSS Variables & Clamp for responsiveness

## 🛠️ Local Development

To get the project running on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist/` folder.

## ☁️ Deployment (Cloudflare Pages)

This project is optimized for **Cloudflare Pages**. To deploy:

1. Push your code to a GitHub/GitLab repository.
2. Connect the repository in the Cloudflare Dashboard.
3. Use the following build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### ⚠️ Important Note on Assets
The project currently imports images from the `/case_study` folder. **Ensure this folder is NOT ignored in your `.gitignore`** if you want the images to show up on your live site. 

Currently, your `.gitignore` contains `case_study/*`, which means your mockups and banners won't be pushed to the server. To fix this, remove that line from your `.gitignore`.

## 📂 Project Structure

- `src/App.tsx`: Main entry point and homepage logic.
- `src/CaseStudyPage.tsx`: Dynamic template for detailed project views.
- `src/styles.css`: Global design system and component styles.
- `case_study/`: Contains all assets and data for the portfolio projects.

---
Built with intention and pace.
