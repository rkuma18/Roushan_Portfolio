import { FaPython, FaBrain, FaAws, FaRProject, FaNetworkWired } from 'react-icons/fa';
import {
    SiPytorch,
    SiTensorflow,
    SiKeras,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiOpenai,
    SiHuggingface,
    SiLangchain,
    SiSpacy,
    SiDocker,
    SiGithub,
    SiJupyter,
    SiDvc,
    SiMlflow,
} from 'react-icons/si';
import { GiMaterialsScience } from 'react-icons/gi';
import { PiMicrosoftExcelLogoDuotone } from 'react-icons/pi';
import { AiOutlineStock } from 'react-icons/ai';
import { TbBinaryOff } from 'react-icons/tb';

export const journeyData = [
    // experience
    {
        id: 'exp-jd-wetherspoons',
        type: 'experience',
        company: 'JD Wetherspoons',
        logoUrl: '/assets/journey/experience/logo-1.svg',
        position: 'Operations Analyst - Business Analytics',
        duration: 'Apr 2023 - Feb 2025',
        description:
            'Built SQL-based demand forecasting contributing to record-breaking £55k weekly sales. Developed inventory optimization reducing waste by 45% through sales velocity analysis. Prototyped RAG-based knowledge base using LangChain and ChromaDB for internal documentation.',
    },

    {
        id: 'exp-tcs-data-analyst',
        type: 'experience',
        company: 'Tata Consultancy Services',
        logoUrl: '/assets/journey/experience/logo-4.svg',
        position: 'Data Analyst',
        duration: 'Mar 2019 - Jul 2021',
        description:
            'Conducted exploratory analysis for BMO banking products to drive strategic segmentation. Built real-time BI dashboards (Tableau) monitoring user engagement and product performance. Improved reporting accuracy by 20% through data mining and validation.',
    },
    {
        id: 'exp-tcs-backend-dev',
        type: 'experience',
        company: 'Tata Consultancy Services',
        logoUrl: '/assets/journey/experience/logo-4.svg',
        position: 'Backend Developer',
        duration: 'Jun 2017 - Mar 2019',
        description:
            'Engineered ETL pipelines processing 10M+ records/day from global servers to standardize data for ML training. Transformed complex JSON feeds into normalized tables accelerating analytics applications. Reduced data ingestion errors from 5% to 1% through query optimization.',
    },
    // education
    {
        id: 'edu-cardiff-university',
        type: 'education',
        company: 'Cardiff University',
        logoUrl: '/assets/journey/education/logo-1.svg',
        qualification: 'Master of Data Science and Analytics',
        duration: 'Sep 2021 - Jan 2023',
        description:
            'Gained practical experience in ML, data mining, and predictive analytics, using Python, R, and SQL to solve real-world business problems.',
    },
    {
        id: 'edu-srm-university',
        type: 'education',
        company: 'SRM University',
        logoUrl: '/assets/journey/education/logo-2.svg',
        qualification: 'Bachelor of Computer Science and Engineering',
        duration: 'June 2013 - May 2017',
        description:
            'Built a solid foundation in software development and computer systems through hands-on projects, focusing on data structures, algorithms, and databases.',
    },
    // Skills - Programming Languages
    {
        id: 'skill-python',
        type: 'skills',
        name: 'Python',
        icon: <FaPython />,
        duration: 'Learned in 2017',
        description:
            'My go-to language for data science tasks, automation, machine learning, and API development.',
    },
    {
        id: 'skill-r-programming',
        type: 'skills',
        name: 'R Programming',
        icon: <FaRProject />,
        duration: 'Learned in 2020',
        description:
            'I use R primarily for statistical modeling, data visualization, and quick experimentation in academic or research settings.',
    },
    {
        id: 'skill-sql',
        type: 'skills',
        name: 'SQL',
        icon: <SiMysql />,
        duration: 'Learned in 2014',
        description:
            'I work with SQL regularly to extract, manipulate, and analyze data from relational databases efficiently.',
    },
    // Frameworks & Libraries
    {
        id: 'skill-numpy',
        type: 'skills',
        name: 'Numpy',
        icon: <SiNumpy />,
        duration: 'Learned in 2017',
        description: 'I rely on NumPy for fast numerical computations and array operations.',
    },
    {
        id: 'skill-pandas',
        type: 'skills',
        name: 'Pandas',
        icon: <SiPandas />,
        duration: 'Learned in 2017',
        description:
            ' I use Pandas to clean, transform, and analyze structured data efficiently in Python.',
    },
    {
        id: 'skill-tensorflow',
        type: 'skills',
        name: 'Tensorflow',
        icon: <SiTensorflow />,
        duration: 'Learned in 2020',
        description:
            'I use TensorFlow for building and training scalable deep learning models in production.',
    },
    {
        id: 'skill-keras',
        type: 'skills',
        name: 'Keras',
        icon: <SiKeras />,
        duration: 'Learned in 2020',
        description:
            'I prefer Keras for its simplicity when prototyping neural networks or experimenting with model architectures.',
    },
    {
        id: 'skill-pytorch',
        type: 'skills',
        name: 'PyTorch',
        icon: <SiPytorch />,
        duration: 'Learned in 2022',
        description:
            'I enjoy using PyTorch for its flexibility and ease of debugging, especially in NLP and GenAI experiments.',
    },
    {
        id: 'skill-openai',
        type: 'skills',
        name: 'Openai',
        icon: <SiOpenai />,
        duration: 'Learned in 2024',
        description:
            'I leverage OpenAI API to build language-aware applications like chat assistants, summarizers, and intelligent search.',
    },
    {
        id: 'skill-huggingface',
        type: 'skills',
        name: 'Hugging Face Transformers',
        icon: <SiHuggingface />,
        duration: 'Learned in 2023',
        description:
            'My go-to library for working with state-of-the-art pre-trained transformer models like BERT, GPT, and more.',
    },
    {
        id: 'skill-langchain',
        type: 'skills',
        name: 'LangChain',
        icon: <SiLangchain />,
        duration: 'Learned in 2024',
        description:
            ' I have used LangChain to orchestrate LLM pipelines, integrate external tools, and develop retrieval augmented chat experiences.',
    },
    {
        id: 'skill-langgraph',
        type: 'skills',
        name: 'LangGraph',
        icon: <SiLangchain />,
        duration: 'Learned in 2024',
        description:
            ' I build RAG pipelines, intelligent agents, and end-to-end LLM apps using LangChain modular components for production-ready AI solutions.',
    },
    {
        id: 'skill-langsmith',
        type: 'skills',
        name: 'LangSmith',
        icon: <SiLangchain />,
        duration: 'Learned in 2024',
        description:
            'I use LangSmith for tracing, evaluating, and debugging LLM workflows to ensure reliability and observability in AI-driven applications.',
    },
    // Machine Learning & AI
    {
        id: 'skill-machine-learning',
        type: 'skills',
        name: 'Machine Learning',
        icon: <FaBrain />,
        duration: 'Learned in 2020',
        description: 'I apply ML techniques to build predictive models and uncover data patterns.',
    },
    {
        id: 'skill-neural-networks',
        type: 'skills',
        name: 'Neural Networks',
        icon: <FaNetworkWired />,
        duration: 'Learned in 2021',
        description:
            'I design and train neural networks for pattern recognition, classification, and regression tasks.',
    },
    {
        id: 'skill-spacy',
        type: 'skills',
        name: 'spaCy',
        icon: <SiSpacy />,
        duration: 'Learned in 2021',
        description:
            'I use NLTK and spaCy for tasks like tokenization, named entity recognition, and text preprocessing.',
    },
    {
        id: 'skill-generative-ai',
        type: 'skills',
        name: 'Generative AI',
        icon: <GiMaterialsScience />,
        duration: 'Learned in 2024',
        description:
            ' I have built generative AI apps that can write, summarize, and respond intelligently using foundation models.',
    },
    // Tools & Platforms
    {
        id: 'skill-excel',
        type: 'skills',
        name: 'Microsoft Excel',
        icon: <PiMicrosoftExcelLogoDuotone />,
        duration: 'Learned in 2014',
        description:
            'I use Excel for quick analysis, forecasting, and building structured models for business stakeholders.',
    },
    {
        id: 'skill-docker',
        type: 'skills',
        name: 'Docker',
        icon: <SiDocker />,
        duration: 'Learned in 2020',
        description:
            'I package applications and models into reproducible containers for easy deployment across environments.',
    },
    {
        id: 'skill-github',
        type: 'skills',
        name: 'Github',
        icon: <SiGithub />,
        duration: 'Learned in 2016',
        description:
            'I manage code versioning and collaborate efficiently using Git for all my projects.',
    },
    {
        id: 'skill-jupyter',
        type: 'skills',
        name: 'Jupyter Notebook',
        icon: <SiJupyter />,
        duration: 'Learned in 2019',
        description:
            'I use Jupyter for exploratory data analysis, visual storytelling, and reproducible workflows.',
    },
    {
        id: 'skill-dvc',
        type: 'skills',
        name: 'DvC',
        icon: <SiDvc />,
        duration: 'Learned in 2024',
        description:
            'I manage code versioning and collaborate efficiently using DvC for all my ML and DL project.',
    },
    {
        id: 'skill-mlflow',
        type: 'skills',
        name: 'Mlflow',
        icon: <SiMlflow />,
        duration: 'Learned in 2024',
        description:
            'I use MLflow to track experiments, manage model lifecycle, and streamline deployment workflows in my ML and AI projects.',
    },
    // Cloud Platforms
    {
        id: 'skill-aws',
        type: 'skills',
        name: 'AWS',
        icon: <FaAws />,
        duration: 'Learned in 2019',
        description:
            'I use AWS services like S3 and Lambda to store data, automate workflows, and deploy serverless applications.',
    },
    // Statistical & Analytical Skills
    {
        id: 'skill-forecasting',
        type: 'skills',
        name: 'Forecasting',
        icon: <AiOutlineStock />,
        duration: 'Learned in 2021',
        description:
            'I apply time series techniques to predict future metrics and guide business planning.',
    },
    {
        id: 'skill-regression-classification',
        type: 'skills',
        name: 'Regression & Classification',
        icon: <TbBinaryOff />,
        duration: 'Learned in 2020',
        description:
            'I design and evaluate models for both continuous and categorical outcome predictions.',
    },
];
