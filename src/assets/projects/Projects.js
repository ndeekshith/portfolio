// src/components/Projects.js
import React from 'react';

function Projects() {
    return (
        <section id="projects" className="container">
            <h2 className="section-heading"><span className="gradient-text">Projects</span></h2>
            <div className="projects-grid">

                {/* --- DocuQuery Project --- */}
                <div className="project-card">
                    <img src="/docuquery.png" alt="DocuQuery Project" className="project-image" />
                    <h3 className="project-title">DocuQuery: AI-Powered Document Q&A</h3>
                    <ul className="project-details">
                        <li>Developed an AI-powered web application for intelligent document analysis and question-answering.</li>
                        <li>Enabled users to upload PDFs and receive precise answers based on document content using LangChain.</li>
                        <li>Utilized Python (Flask) for backend development, integrating FAISS for efficient vector similarity search.</li>
                        <li>Integrated OpenAI's Large Language Models (LLMs) for generating accurate and concise answers.</li>
                        <li>Built a user-friendly frontend with React.js for intuitive PDF uploads and chat interactions.</li>
                        <li>
                            <a href="https://github.com/ndeekshith/DocuQuery" target="_blank" rel="noopener noreferrer">
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* --- SDG Classification System --- */}
                <div className="project-card">
                    <img src="/sdgs.png" alt="SDG Classification System" className="project-image" />
                    <h3 className="project-title">SDG Classification System</h3>
                    <ul className="project-details">
                        <li>Developed a multi-label machine learning classification system to categorize startups based on UN Sustainable Development Goals (SDGs).</li>
                        <li>Web scraped 5,514 startup descriptions using Python for dataset creation.</li>
                        <li>Engineered a cascading pipeline utilizing Linear SVC and DistilBERT, achieving a 92% classification accuracy.</li>
                        <li>
                            <a href="https://github.com/ndeekshith/AboutPageCrawler" target="_blank" rel="noopener noreferrer">
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* --- YouTube Video Summarizer --- */}
                <div className="project-card">
                    <img src="/yt.png" alt="YouTube Video Summarizer" className="project-image" />
                    <h3 className="project-title">YouTube Video Summarizer</h3>
                    <ul className="project-details">
                        <li>Built a web app that extracts, transcribes, and summarizes YouTube video content using AI.</li>
                        <li>Implemented Google Speech Recognition for accurate speech-to-text conversion.</li>
                        <li>Integrated the Phi-2 language model for efficient summarization.</li>
                        <li>Utilized yt-dlp and FFmpeg for YouTube audio extraction and processing.</li>
                        <li>
                            <a href="https://github.com/ndeekshith/Youtube_video_Summarizer" target="_blank" rel="noopener noreferrer">
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>

                {/* --- Weather Prediction System --- */}
                <div className="project-card">
                    <h3 className="project-title">Weather Prediction System</h3>
                    <ul className="project-details">
                        <li>Built multiple ML models (Logistic Regression, KNN, Decision Tree, SVM) for weather prediction.</li>
                        <li>Performed advanced data preprocessing and feature engineering.</li>
                        <li>Achieved high accuracy using metrics like F1-score and log loss.</li>
                        <li>
                            <a href="https://github.com/ndeekshith/weather_pred_models" target="_blank" rel="noopener noreferrer">
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Projects;