export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Roushan Kumar",
        "url": "https://itsrkumar.com",
        "image": "https://itsrkumar.com/og-image.png",
        "jobTitle": "Gen AI Engineer",
        "description": "Gen AI Engineer with 6+ years of experience specializing in LLM systems, RAG applications, and AI/ML solutions",
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "Cardiff University",
                "description": "MSc Data Science & Analytics"
            },
            {
                "@type": "EducationalOrganization",
                "name": "SRM University",
                "description": "B.Tech Computer Science"
            }
        ],
        "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Large Language Models",
            "RAG Systems",
            "Python",
            "LangChain",
            "GPT-4",
            "Data Science",
            "PyTorch",
            "Natural Language Processing"
        ],
        "sameAs": [
            "https://linkedin.com/in/rk0718",
            "https://github.com/rkuma18"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
        },
        "email": "roushankumarmail07@gmail.com",
        "telephone": "+91-8986510661"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
