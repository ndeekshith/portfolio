import React from 'react';
import docuqueryImage from '../assets/projects/docuquery.png';
import sdgsImage from '../assets/projects/sdgs.png';
import ytImage from '../assets/projects/yt.png';
import bankingGif from '../assets/projects/demo.gif'; // Add this import
import dashboradImage from '../assets/projects/dashboard.png';
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
  imageAlt: "DocuQuery - Advanced Document Q&A System",
  title: "DocuQuery: Privacy-First AI Document Intelligence",
  details: [
    "Built a production-ready RAG (Retrieval Augmented Generation) system enabling intelligent document Q&A with complete privacy—all processing runs locally without cloud dependencies.",
    "Architected hybrid search combining FAISS semantic search with BM25 keyword matching, enhanced by cross-encoder reranking for 20-30% improved precision over standard retrieval.",
    "Implemented multi-format document ingestion (PDF, DOCX, CSV, HTML, RTF) with intelligent chunking and async processing using LangChain, reducing batch processing time by 60%.",
    "Integrated local LLM inference via Ollama (Phi-3, Llama3, Mistral) with streaming responses, enabling real-time answer generation grounded in retrieved context to minimize hallucinations.",
    "Engineered scalable vector storage using FAISS with IVF indexing support for 100K+ documents, achieving sub-second query response times with 384-dim sentence-transformer embeddings.",
    "Developed modern Streamlit UI with dark/light themes, real-time statistics dashboard, and document management—deployed via Docker Compose with SQLite metadata persistence."
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
        imageSrc: null, 
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
    },
     {
    id: 7,
    imageSrc: null, 
    imageAlt: "AI-Powered DevOps Auto-Remediator",
    title: "AI-Powered DevOps Auto-Remediator",
    details: [
        "Developed an event-driven remediation agent that ingests infrastructure alerts, triages with Google Gemini LLM, and executes automated fixes via LangGraph orchestration.",
        "Implemented a state-based architecture with a shared TypedDict to manage alert classification, remediation actions, rollback steps, and confidence scoring.",
        "Integrated Slack and PagerDuty for real-time incident notifications, escalation, and human-in-the-loop workflows.",
        "Designed a MongoDB-backed playbook store with automatic fallback to in-memory defaults, ensuring high availability and resilience.",
        "Added pluggable remediation tools (service restarts, pod scaling, log cleanup) with rollback support for safe operations.",
        "Built a Dockerized deployment pipeline supporting local demos, alert file ingestion, and secure environment variable management."
        
    ],
    repoLink: "https://github.com/ndeekshith/AI-Powered-DevOps-Auto-Remediator"
}
,
    {
        id: 8,
        imageSrc: dashboradImage,
        imageAlt: "Super Stores Sales Dashboard",
        title: "Super Stores Sales Dashboard",
        details: [
            "Designed an interactive sales dashboard to analyze KPIs including Sales, Quantity, and Profit across multiple regions.",
            "Implemented dynamic filters (Region, Segment, Payment Mode) for drill-down analysis and actionable insights.",
            "Visualized YoY sales and profit trends, identifying seasonal spikes and region-wise performance variations.",
            "Built interactive charts (donut, line, bar) to track category- and subcategory-level contributions, aiding business strategy."
        ],
        repoLink: "https://github.com/ndeekshith/Sales-Analysis", 
        demoLink: "https://app.powerbi.com/groups/4805ccb2-c417-4f5c-bedd-6713d8f64ca9/reports/e37b9819-fa59-4aca-ba30-dfeffdaa105b/3180d249b1aaca65eed1?experience=power-bi" 
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