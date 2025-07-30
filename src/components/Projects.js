import React from 'react';

// 1. IMPORT YOUR IMAGES
// NOTE: Add your banking system screenshot to 'src/assets/projects/'
// I have added a placeholder import for it below.
import docuqueryImage from '../assets/projects/docuquery.png';
import sdgsImage from '../assets/projects/sdgs.png';
import ytImage from '../assets/projects/yt.png';
import bankingGif from '../assets/projects/demo.gif'; // Add this import

const projectData = [
     {
        id: 1,
        imageSrc: sdgsImage,
        imageAlt: "SDG Classification System",
        title: "SDG Classification System",
       details: [
    "Developed a multi-label machine learning classification system to categorize startups based on UN Sustainable Development Goals (SDGs).",
    "Scraped 500+ Indian startup websites and 5,514 startup descriptions using Python to curate a structured dataset for SDG classification.",
    "Engineered a hybrid NLP pipeline combining TF-IDF, LinearSVC, and DistilBERT, improving Jaccard score by 7% and achieving 92% classification accuracy.",
    "Visualized SDG trends and co-occurrence patterns to identify investment-ready impact startups.",
    "Implemented cascading classification architecture to handle overlapping SDG categories efficiently."
],
        repoLink: "https://github.com/ndeekshith/AboutPageCrawler"
    },
      {
        id: 2,
        imageSrc: docuqueryImage,
        imageAlt: "DocuQuery Project",
        title: "DocuQuery: AI-Powered Document Q&A",
        details: [
            "Developed an AI-powered web application for intelligent document analysis and question-answering.",
            "Enabled users to upload PDFs and receive precise answers based on document content using LangChain.",
            "Utilized Python (Flask) for backend development, integrating FAISS for efficient vector similarity search.",
            "Integrated OpenAI's Large Language Models (LLMs) for generating accurate and concise answers.",
            "Built a user-friendly frontend with React.js for intuitive PDF uploads and chat interactions."
        ],
        repoLink: "https://github.com/ndeekshith/DocuQuery"
    },
    {
        id: 3,
        imageSrc: bankingGif, // Update this line to use the GIF
        imageAlt: "Bank Management System Project",
        title: "Bank Management System",
        details: [
            "Full-stack core banking system with role-based access (Admin, Manager, Customer).",
            "Built with a Flask RESTful API backend and a dynamic SPA-style frontend using vanilla JavaScript.",
            "Features secure transactions including deposits, withdrawals, and inter-account transfers.",
            "Utilizes SQLite for persistent data storage, complete with an initialization schema."
        ],
        repoLink: "https://github.com/ndeekshith/Banking-System"
    },
  
   
    {
        id: 4,
        imageSrc: ytImage,
        imageAlt: "YouTube Video Summarizer",
        title: "YouTube Video Summarizer",
        details: [
            "Built a web app that extracts, transcribes, and summarizes YouTube video content using AI.",
            "Implemented Google Speech Recognition for accurate speech-to-text conversion.",
            "Integrated the Phi-2 language model for efficient summarization.",
            "Utilized yt-dlp and FFmpeg for YouTube audio extraction and processing."
        ],
        repoLink: "https://github.com/ndeekshith/Youtube_video_Summarizer"
    },
    {
        id: 5,
        imageSrc: null, // No image for this project
        imageAlt: "Weather Prediction System",
        title: "Weather Prediction System",
        details: [
    "Built multiple ML models (Logistic Regression, KNN, Decision Tree, SVM) for weather prediction.",
    "Performed advanced data preprocessing, including handling missing values, outlier detection, and normalization.",
    "Engineered domain-specific features such as humidity index, temperature gradients, and pressure variations to improve model performance.",
    "Evaluated models using metrics like F1-score, log loss and cross-validation for robust performance assessment.",
    "Visualized weather trends, correlations, and prediction outputs using Matplotlib and Seaborn to enhance interpretability."
    
]
,
        repoLink: "https://github.com/ndeekshith/weather_pred_models"
    },
      {
        id: 6,
        imageSrc: null, // No image for this project
        imageAlt: "Spotify Listening Analysis",
        title: "Spotify Data Analysis & BERT Recommendations",
        details: [
            "Developed a comprehensive analysis system for Spotify listening history using Python and pandas",
            "Implemented BERT-based recommendation system for similar track suggestions using PyTorch",
            "Created interactive visualizations of listening patterns and user behavior insights",
            "Built engagement prediction model with three-level classification (Low, Medium, High)",
            "Utilized HuggingFace Transformers for generating track embeddings and similarity matching"
        ],
        repoLink: "https://github.com/ndeekshith/SongRecommondation",
        demoLink: null
    }
];

function Projects() {
    return (
        <section id="projects" className="container">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
                {/* 3. MAP OVER THE DATA TO AUTOMATICALLY CREATE EACH CARD */}
                {projectData.map(project => (
                    <div key={project.id} className="project-card">
                        {/* This line will only render the image if it exists */}
                        {project.imageSrc && (
                            <img src={project.imageSrc} alt={project.imageAlt} className="project-image" />
                        )}
                        <h3 className="project-title">{project.title}</h3>
                        <ul className="project-details">
                            {project.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                            {/* Container for project links */}
                            <li className="project-links">
                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Live Demo
                                    </a>
                                )}
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;