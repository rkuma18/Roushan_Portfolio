'use client';
import Card from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyData } from '@/data/journeyData';

const Cards = () => {
    return (
        <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
            <TabsList className="max-w-max mb-[30px]">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">My Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="w-full">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {journeyData
                            .filter((item) => item.type === 'experience')
                            .map((card) => {
                                return <Card key={card.id} {...card} />;
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
                        {journeyData
                            .filter((item) => item.type === 'education')
                            .map((card) => {
                                return <Card key={card.id} {...card} />;
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
                        {journeyData
                            .filter((item) => item.type === 'skills')
                            .map((card) => {
                                return <Card key={card.id} {...card} />;
                            })}
                    </motion.div>
                </AnimatePresence>
            </TabsContent>
        </Tabs>
    );
};

export default Cards;
