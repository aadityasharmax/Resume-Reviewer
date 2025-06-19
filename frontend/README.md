🧠 AI Resume Scanner UI
This is a modern React-based front-end interface for an AI-powered Resume Scanning System. It allows recruiters or hiring managers to upload a list of candidate resumes via CSV, provide a Job Description (JD), and automatically match candidates based on the job requirements.

The UI is interactive, responsive, and styled with Tailwind CSS, featuring animations and modern visuals.

📸 Live Demo
(Host your project and paste the link here — e.g. Vercel, Netlify, AWS)

🗂️ Project Features
📤 Upload CSV of candidate emails and resume links

📝 Upload Job Description as a text file

🔍 AI-matching interface simulation

📊 Visual progress tracking during scanning

📁 Download filtered and scored result as a CSV

🎨 Clean, modern UI with Aurora animated background

🖱️ Drag-and-drop file input support

⚡ Built with React + TailwindCSS

🧾 Table of Contents
📸 Live Demo

🗂️ Project Features

📁 File Structure

🚀 Getting Started

🛠️ Technologies Used

📦 Deployment

📌 Future Scope

📁 File Structure
csharp
Copy
Edit
resume-scanner-ui/
│
├── public/
│   └── assets/
│       └── new-bg.webp             # Background image
│
├── src/
│   ├── components/
│   │   ├── CSVUpload/
│   │   │   └── CSVUpload.jsx       # CSV file input
│   │   ├── JDFileUpload/
│   │   │   └── JDFileUpload.jsx    # JD upload component
│   │   ├── ProgressTracker/
│   │   │   └── ProgressTracker.jsx # Shows scanning progress
│   │   ├── DownloadButton/
│   │   │   └── DownloadButton.jsx  # Handles result.csv download
│   │   ├── Features/
│   │   │   └── Features.jsx        # Optional 3-step UI
│   │   └── ui/
│   │       └── aurora-background.jsx # Animated background
│   │
│   ├── App.jsx                     # Main application logic
│   ├── App.css                     # Additional styling
│   └── main.jsx                    # Entry point
│
├── tailwind.config.js             # Tailwind CSS config
├── index.html
├── package.json
└── README.md                      # You are here!
🚀 Getting Started
Follow these steps to run the project locally.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/resume-scanner-ui.git
cd resume-scanner-ui
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm run dev
The app will be available at: http://localhost:5173

🛠️ Technologies Used
React — UI development

Tailwind CSS — Utility-first styling

Framer Motion — Animation handling

Typewriter-effect — Typing animations

React Icons — File upload icons

Custom Aurora Background — Visual gradient effects

🧪 How to Use
Step 1: Upload a CSV file containing Email and Resume Link columns

Step 2: Upload a .txt file containing the job description

Step 3: Click on Start Scan to simulate evaluation

Step 4: View real-time progress and download final results as CSV

🌐 Deployment
You can deploy this frontend using any of the following platforms:

Vercel

Netlify

AWS S3 + CloudFront

Example (for Vercel):
bash
Copy
Edit
npm install -g vercel
vercel
📌 Future Scope
🔗 Integrate actual backend resume evaluation

💬 Add candidate feedback and detailed score breakdown

📈 Add analytics for hiring insights

🧠 Use OpenAI or other models for better JD matching

🙌 Contributions & Feedback
Feel free to fork the repo, raise issues, and submit pull requests.
