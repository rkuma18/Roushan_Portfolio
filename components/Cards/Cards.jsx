"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaBrain, FaAws, FaLanguage, FaRProject, FaNetworkWired } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiKeras, SiMysql, SiNumpy, SiPandas, SiOpenai, SiHuggingface, SiLangchain, SiSpacy, SiDocker, SiGithub, SiJupyter, SiDvc, SiMlflow } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { TbBinaryOff } from "react-icons/tb";

const journey = [
    // experience
    {
        type: "experience",
        company: "JD Wetherspoons",
        logoUrl: "/assets/journey/experience/logo-1.svg",
        position: "Manager",
        duration: "Apr 2023 - Feb 2025",
        description:
            "I built predictive models to forecast demand and optimize inventory, boosting weekly sales by 6% and cutting stock shortages by 60%, while performance analysis improved operational efficiency by 22%."
    },
    {
        type: "experience",
        company: "Tesco",
        logoUrl: "/assets/journey/experience/logo-2.svg",
        position: "Associate",
        duration: "Nov 2022 - Jan 2023",
        description:
            "I worked part-time in a fast-paced fulfillment team, efficiently processing orders under tight deadlines to support smooth delivery and enhance the customer experience in a high-volume retail setting."
    },
    {
        type: "experience",
        company: "Amazon",
        logoUrl: "/assets/journey/experience/logo-3.svg",
        position: "Warehouse Associate",
        duration: "Nov 2020 - Jan 2021",
        description:
            "I worked part-time at Amazon's high-volume warehouse, processing orders under tight deadlines and supporting supply chain efficiency through accurate inventory and logistics coordination."
    },
    {
        type: "experience",
        company: "Tata Consultancy Services",
        logoUrl: "/assets/journey/experience/logo-4.svg",
        position: "Data Analyst",
        duration: "July 2019 - Jul 2021",
        description:
            "I built cloud-based ML solutions that cut billing errors by 15% and boosted customer engagement by 8%, using predictive analytics and recommendation systems to enhance efficiency and service adoption."
    },
    {
        type: "experience",
        company: "Tata Consultancy Services",
        logoUrl: "/assets/journey/experience/logo-4.svg",
        position: "Backend Developer",
        duration: "Jun 2017 - Jul 2019",
        description:
            "I optimized database architecture and code performance, achieving 25% faster processing, 18% less downtime, and a 7% drop in operational incidents through quality engineering practices."
    },
    // education
    {
        type: "education",
        company: "Cardiff University",
        logoUrl: "/assets/journey/education/logo-1.svg",
        qualification: "Master of Data Science and Analytics",
        duration: "Sep 2021 - Jan 2023",
        description:
            "Gained practical experience in ML, data mining, and predictive analytics, using Python, R, and SQL to solve real-world business problems."
    },
    {
        type: "education",
        company: "SRM University",
        logoUrl: "/assets/journey/education/logo-2.svg",
        qualification: "Bachelor of Computer Science and Engineering",
        duration: "June 2013 - May 2017",
        description:
            "Built a solid foundation in software development and computer systems through hands-on projects, focusing on data structures, algorithms, and databases."
    },
    // Skills
    //Programming Languages
    {
        type: "skills",
        name: "Python",
        icon: <FaPython />,
        duration: "Learned in 2017",
        description:
            "My go-to language for data science tasks, automation, machine learning, and API development."
    },
    {
        type: "skills",
        name: "R Programming",
        icon: <FaRProject />,
        duration: "Learned in 2020",
        description:
            "I use R primarily for statistical modeling, data visualization, and quick experimentation in academic or research settings."
    },
    {
        type: "skills",
        name: "SQL",
        icon: <SiMysql />,
        duration: "Learned in 2014",
        description:
            "I work with SQL regularly to extract, manipulate, and analyze data from relational databases efficiently."
    },
    //Frameworks & Libraries
    {
        type: "skills",
        name: "Numpy",
        icon: <SiNumpy />,
        duration: "Learned in 2017",
        description:
            "I rely on NumPy for fast numerical computations and array operations."
    },
    {
        type: "skills",
        name: "Pandas",
        icon: <SiPandas />,
        duration: "Learned in 2017",
        description:
            " I use Pandas to clean, transform, and analyze structured data efficiently in Python."
    },
    {
        type: "skills",
        name: "Tensorflow",
        icon: <SiTensorflow />,
        duration: "Learned in 2020",
        description:
            "I use TensorFlow for building and training scalable deep learning models in production."
    },
    {
        type: "skills",
        name: "Keras",
        icon: <SiKeras />,
        duration: "Learned in 2020",
        description:
            "I prefer Keras for its simplicity when prototyping neural networks or experimenting with model architectures."
    },
    {
        type: "skills",
        name: "PyTorch",
        icon: <SiPytorch />,
        duration: "Learned in 2022",
        description:
            "I enjoy using PyTorch for its flexibility and ease of debugging, especially in NLP and GenAI experiments."
    },
    {
        type: "skills",
        name: "Openai",
        icon: <SiOpenai />,
        duration: "Learned in 2024",
        description:
            "I leverage OpenAI’s API to build language aware applications like chat assistants, summarizers, and intelligent search."
    },
    {
        type: "skills",
        name: "Hugging Face Transformers",
        icon: <SiHuggingface />,
        duration: "Learned in 2023",
        description:
            "My go-to library for working with state-of-the-art pre-trained transformer models like BERT, GPT, and more."
    },
    {
        type: "skills",
        name: "LangChain",
        icon: <SiLangchain />,
        duration: "Learned in 2024",
        description:
            " I’ve used LangChain to orchestrate LLM pipelines, integrate external tools, and develop retrieval augmented chat experiences."
    },
    {
        type: "skills",
        name: "LangGraph",
        icon: <SiLangchain />,
        duration: "Learned in 2024",
        description:
            " I build RAG pipelines, intelligent agents, and end-to-end LLM apps using LangChain’s modular components for production-ready AI solutions."
    },
    {
        type: "skills",
        name: "LangSmith",
        icon: <SiLangchain />,
        duration: "Learned in 2024",
        description:
            "I use LangSmith for tracing, evaluating, and debugging LLM workflows to ensure reliability and observability in AI-driven applications."
    },
    // Machine Learning & AI
    {
        type: "skills",
        name: "Machine Learning",
        icon: <FaBrain />,
        duration: "Learned in 2020",
        description:
            "I apply ML techniques to build predictive models and uncover data patterns."
    },
    {
        type: "skills",
        name: "Neural Networks",
        icon: <FaNetworkWired />,
        duration: "Learned in 2021",
        description:
            "I design and train neural networks for pattern recognition, classification, and regression tasks."
    },
    {
        type: "skills",
        name: "spaCy",
        icon: <SiSpacy />,
        duration: "Learned in 2021",
        description:
            "I use NLTK and spaCy for tasks like tokenization, named entity recognition, and text preprocessing."
    },
    {
        type: "skills",
        name: "Generative AI",
        icon: <GiMaterialsScience />,
        duration: "Learned in 2024",
        description:
            " I’ve built generative AI apps that can write, summarize, and respond intelligently using foundation models."
    },
    // Tools & Platforms
    {
        type: "skills",
        name: "Microsoft Excel",
        icon: <PiMicrosoftExcelLogoDuotone />,
        duration: "Learned in 2014",
        description:
            "I use Excel for quick analysis, forecasting, and building structured models for business stakeholders."
    },
    {
        type: "skills",
        name: "Docker",
        icon: <SiDocker />,
        duration: "Learned in 2020",
        description:
            "I package applications and models into reproducible containers for easy deployment across environments."
    },
    {
        type: "skills",
        name: "Github",
        icon: <SiGithub />,
        duration: "Learned in 2016",
        description:
            "I manage code versioning and collaborate efficiently using Git for all my projects."
    },
    {
        type: "skills",
        name: "Jupyter Notebook",
        icon: <SiJupyter />,
        duration: "Learned in 2019",
        description:
            "I use Jupyter for exploratory data analysis, visual storytelling, and reproducible workflows."
    },
    {
        type: "skills",
        name: "DvC",
        icon: <SiDvc />,
        duration: "Learned in 2024",
        description:
            "I manage code versioning and collaborate efficiently using DvC for all my ML and DL project."
    },
    {
        type: "skills",
        name: "Mlflow",
        icon: <SiMlflow />,
        duration: "Learned in 2024",
        description:
            "I use MLflow to track experiments, manage model lifecycle, and streamline deployment workflows in my ML and AI projects."
    },
    // Cloud Platforms
    {
        type: "skills",
        name: "AWS",
        icon: <FaAws />,
        duration: "Learned in 2019",
        description:
            "I use AWS services like S3 and Lambda to store data, automate workflows, and deploy serverless applications."
    },
    // Statistical & Analytical Skills
    {
        type: "skills",
        name: "Forecasting",
        icon: <AiOutlineStock />,
        duration: "Learned in 2021",
        description:
            "I apply time series techniques to predict future metrics and guide business planning."
    },
    {
        type: "skills",
        name: "Regression & Classification",
        icon: <TbBinaryOff />,
        duration: "Learned in 2020",
        description:
            "I design and evaluate models for both continuous and categorical outcome predictions."
    },

];

const Cards = () => {
    return (
        <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
            <TabsList className="max-w-max mb-[30px]">
                <TabsTrigger value="experience">
                    Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                    Education
                </TabsTrigger>
                <TabsTrigger value="skills">
                    My Skills
                </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey
                            .filter((item) => item.type === "experience")
                            .map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>

            <TabsContent value="education" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey
                            .filter((item) => item.type === "education")
                            .map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journey
                            .filter((item) => item.type === "skills")
                            .map((card, index) => {
                                return <Card key={index} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
        </Tabs>
    );
};

export default Cards;