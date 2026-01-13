import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowLeft, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectData: Record<string, {
  title: string;
  summary: string[];
  skills: string[];
  githubLink: string;
}> = {
  "codecontext": {
    title: "CodeContext: Automated Multi-Source LLM Ingestion",
    summary: [
      "Developed a system to aggregate and preprocess source code from multiple files into an optimized context window for LLMs, enabling accurate project-wide reasoning and code analysis.",
      "Engineered custom chunking and token-prioritization algorithms to handle large-scale codebases, resulting in a 40% reduction in token costs while maintaining 95% accuracy in information retrieval.",
      "Integrated metadata tagging and symbol-based ranking to surface relevant code snippets, improving response relevance by 2x compared to standard \"stuffed\" context prompts.",
      "Designed an automated pipeline for project ingestion that reduced the time required for developers to provide manual context to AI assistants by over 70%."
    ],
    skills: ["Python (Programming Language)", "Retrieval-Augmented Generation (RAG)", "Tokenization", "Knowledge Graphs"],
    githubLink: "https://github.com/shailtp/CodeContext-Automated_Multi-Source-LLM-Ingestion"
  },
  "course-buddy": {
    title: "Course Buddy - RAG system for SF State's CS course selection process",
    summary: [
      "Architected and launched a scalable Retrieval Augmented Generation (RAG) chatbot for SFSU course recommendations using a LLAMA 7B model, achieving a 92% student satisfaction rating during pilot testing.",
      "Engineered the RAG pipeline using LangChain and OpenAI embeddings to scrape and index professor reviews in Pinecone (VectorDB), enabling contextual course ranking.",
      "Developed a production monitoring framework using RAG-specific metrics like Faithfulness and Contextual Precision to actively detect hallucination and relevance drift, ensuring high reliability.",
      "Optimized the vector search layer by implementing caching, which cut end-to-end query latency by 35% (reducing it from 1.5s to 0.97s)."
    ],
    skills: ["LangChain", "Vector Databases", "Amazon ECS", "Python (Programming Language)", "React.js", "Retrieval-Augmented Generation (RAG)"],
    githubLink: "https://github.com/shailtp/course-buddy"
  },
  "e1-gene-cluster": {
    title: "E1 Gene Cluster - Random Forest Classifier Model & Streamlit Website",
    summary: [
      "Developed a Random Forest Classifier to predict the presence of the E1 cluster using Genomic Value expressions, analyzing 871 samples and 609 features and achieving 97% accuracy during testing. Applied 5-fold cross validation and used the Gini index for feature ranking, identifying key genes consistent with biological literature.",
      "Deployed the trained model to a live Streamlit web application, making it accessible for non technical users to perform on demand predictions. Integrated deployment monitoring to track system health and quality by displaying prediction latency (via st.metric)."
    ],
    skills: ["Streamlit", "Python (Programming Language)", "Random Forest Classifier", "Scikit-Learn", "Feature Engineering"],
    githubLink: "https://github.com/shailtp/E1-gene-prediction-using-Random-Forest-ML-model"
  },
  "openmp-molecular-dynamics": {
    title: "OpenMP Parallel Computing Simulation of Molecular Dynamics",
    summary: [
      "Parallelized molecular dynamics simulation using OpenMP directives, achieving 3.2x speedup on 8-core systems while maintaining numerical accuracy with energy conservation errors < 10^-11.",
      "Optimized O(N²) force computation loops through multi-threading, reducing execution time from 12.46s to 3.91s for 1000-particle simulations.",
      "Implemented parallel reduction operations for thread-safe energy accumulation, enabling scalable performance across different particle counts (500-1000+) with 40% speedup in computation time."
    ],
    skills: ["C (Programming Language)", "Multithreading", "OpenMP", "Parallel Computing"],
    githubLink: "https://github.com/shailtp/OpenMP-Parallel-Computing-Simulation-of-Molecular-Dynamics"
  },
  "edubridge": {
    title: "Edubridge: A learning management system",
    summary: [
      "Lead the Backend development of a comprehensive Learning video streaming application, Edu Bridge, utilizing the MERN stack. This project mirrors Canvas' functionality, offering video uploading, sharing, and real-time streaming capabilities.",
      "Orchestrated project workflow and task management using JIRA (team of 7 people). Built a modern and responsive web design using HTML/CSS and React.js. Backend API endpoints and features using Node mailer and multer. Used Directus for Content Management.",
      "Implemented MySQL database for efficient data storage, coupled with Express and Node.js for scalable backend services. Deployed using AWS EC2. Crafted an interactive front-end experience with React, optimized for performance and cross-browser compatibility."
    ],
    skills: ["Node.js", "Express.js", "Amazon EC2", "React.js", "Amazon Web Services (AWS)", "MySQL"],
    githubLink: "https://github.com/nh0397/EduBridge"
  },
  "sfo-traffic-visualization": {
    title: "SFO Passenger Traffic Visualization System",
    summary: [
      "Developed and maintained a real-time data visualization platform to analyze passenger traffic and airline traffic at San Francisco International Airport (SFO), leveraging a dataset of 35.3k rows.",
      "Implemented interactive visualizations using D3.js on a Next.js web application, providing insights into peak travel periods, airline performance, and passenger behavior, which led to a 30% improvement in operational decision-making speed.",
      "Integrated PostgreSQL for efficient data storage and retrieval, with backend services managed using Prisma and Node.js, reducing database latency and ensuring seamless and scalable data handling."
    ],
    skills: ["PostgreSQL", "Node.js", "D3.js", "Next.js", "Data Visualization"],
    githubLink: "https://github.com/shailtp/airtraffic-sfo-visualisation"
  },
  "no-escape": {
    title: "No-Escape: Action maze chase game",
    summary: [
      "Led the development of an innovative action maze chase Human-Computer Interaction (HCI) application using Python (Pygame).",
      "This project featured the implementation of an AI-based opponent that dynamically follows the player using the A* algorithm to determine the optimal path for the red opponent based on the player's movements.",
      "Designed and implemented a user-friendly GUI to enhance user engagement and experience."
    ],
    skills: ["Graph Algorithms", "Pygame", "Python (Programming Language)", "Artificial Intelligence (AI)"],
    githubLink: "https://github.com/shailtp/no-escape"
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectData[projectId] : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleGoBack = () => {
    navigate("/");
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-foreground text-background rounded-full hover:shadow-lg transition-all"
          >
            Go back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 bg-secondary/50">
        <div className="container-custom min-w-[1024px]">
          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className={cn(
              "flex items-center gap-2 mb-8 px-4 py-2 rounded-full",
              "bg-card border border-border/40 hover:shadow-md transition-all",
              "text-sm font-medium"
            )}
          >
            <ArrowLeft size={16} />
            Go back
          </button>

          {/* Project Header */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                {project.title}
              </h1>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2",
                  "bg-foreground text-background rounded-full font-medium text-sm",
                  "hover:shadow-lg hover:translate-y-[-2px] transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                )}
              >
                <Github size={18} />
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-serif font-bold">Summary</h2>
            <ul className="space-y-4 list-disc list-inside text-muted-foreground">
              {project.summary.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-serif font-bold">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className={cn(
                    "px-4 py-2 text-sm bg-secondary rounded-full text-foreground/80",
                    "transition-all hover:bg-secondary/70"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
