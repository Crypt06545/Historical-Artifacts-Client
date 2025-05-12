# Historical Artifacts Tracker

## 🌟 Project Overview

The **Historical Artifacts Tracker** is a web application designed to manage, explore, and contribute information about historical artifacts. Users can browse artifacts, view detailed information, add their own entries, and like their favorite artifacts. The application provides a user-friendly interface and secure authentication system to ensure a seamless experience.

---

## 🚀 Live Site

[Live Link](https://egypt-history.netlify.app)

---

## 🎯 Key Features

- **Authentication System**:

  - Secure login and registration using email/password and social login (Google).
  - Password validation with strong security checks.
  - Conditional navigation links and protected routes for private features.

- **Artifact Management**:

  - Add, update, and delete artifacts (logged-in users).
  - Like/unlike artifacts with database synchronization.
  - View personal artifacts and liked artifacts separately.

- **Dynamic UI**:

  - Fully responsive design for mobile, tablet, and desktop.
  - Attractive banner/slider and featured artifacts section.
  - Search functionality for artifacts by name.

- **Extras**:
  - Dynamic page titles for each route.
  - Meaningful 404 page for invalid routes.
  - Toast/SweetAlert notifications for all CRUD operations.
  - Users can leave comments on individual artifact pages to share their insights or feedback.
  - Loading spinner for data-fetching states.
  - Smooth animations implemented using GSAP (GreenSock Animation Platform) for enhanced user interaction.

<!-- ---

## 🖼️ Screenshots
**(Include screenshots of key pages, such as the Home page, Add Artifact page, Artifact Details page, etc.)** -->

---

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase

---

## 📖 Installation & Usage

### Prerequisites

- Node.js
- MongoDB
- Firebase Account

### Client-Side Installation

1. Clone the repository:
   ```bash
   git clone <client-repo-url>
   ```
2. Navigate to the client directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure `.env.local` for Firebase:
   ```env
   VITE_API_KEY=<your-api-key>
   VITE_AUTH_DOMAIN=<your-auth-domain>
   VITE_PROJECT_ID=<your-project-id>
   VVITE_STORAGE_BUCKET=<your-stroage-bucket->
   VITE_MESSAGING_SENDER_ID=<your-messageId-key>
   VITE_APP_ID=<your-api-key>
   VITE_API_BASE_URL=<your-base-url>
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📜 License

This project is licensed under the MIT License.
