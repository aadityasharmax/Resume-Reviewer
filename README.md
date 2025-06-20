# 🧠 AI Resume Scanner UI

This is a modern React-based front-end interface for an AI-powered Resume Scanning System. It allows recruiters or hiring managers to upload a list of candidate resumes via CSV, provide a Job Description (JD), and automatically match candidates based on the job requirements.
The UI is interactive, responsive, and styled with Tailwind CSS, featuring animations and modern visuals.

# 🧾 Table of Contents
📸 Live Demo  
🗂️ Project Features  
📁 File Structure  
🚀 Getting Started  
🛠️ Technologies Used  
📦 Deployment  
📌 Future Scope



# 📸 Live Demo
https://resume-reviewer-one.vercel.app/


# 🗂️ Project Features

📤 Upload CSV of candidate emails and resume links  
📝 Upload Job Description as a text file  
🔍 AI-matching interface simulation  
📊 Visual progress tracking during scanning  
📁 Download filtered and scored result as a CSV  
🎨 Clean, modern UI with Aurora animated background  
🖱️ Drag-and-drop file input support  
⚡ Built with React + TailwindCSS



# File Structure

```bash
frontend/
│
├── public/
│   └── assets/
│       └── new-bg.webp             
│
├── src/
│   ├── components/
│   │   ├── CSVUpload/
│   │   │   └── CSVUpload.jsx       
│   │   ├── JDFileUpload/
│   │   │   └── JDFileUpload.jsx    
│   │   ├── ProgressTracker/
│   │   │   └── ProgressTracker.jsx 
│   │   ├── DownloadButton/
│   │   │   └── DownloadButton.jsx  
│   │   ├── Features/
│   │      └── Features.jsx        
│   │  
│   │       
│   │
│   ├── App.jsx                     
│   ├── App.css                   
│   └── main.jsx                 
│            
├── index.html
├── package.json
└── README.md
```                    

# Getting Started

1. Clone the Repository
   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   ```

2. Install Dependencies
   ```
   cd frontend
   npm install

   ```

3. Run the App
   ```
   npm run dev
   
   ```

# 🛠️ Technologies Used

React — UI development
Tailwind CSS — Utility-first styling
Framer Motion — Animation handling
Typewriter-effect — Typing animations
React Icons — File upload icons


# 🧪 How to Use

Step 1: Upload a CSV file containing Email and Resume Link columns
Step 2: Upload a .txt file containing the job description
Step 3: Click on Start Scan to simulate evaluation
Step 4: View real-time progress and download final results as CSV

# 🌐 Deployment

Vercel
https://resume-reviewer-one.vercel.app/


# Future Scope

 Integrate actual backend resume evaluation
 Add candidate feedback and detailed score breakdown
 Add analytics for hiring insights
 Use OpenAI or other models for better JD matching

 # 🙌 Contributions & Feedback
Feel free to fork the repo, raise issues, and submit pull requests.
