import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedText from '../AnimatedText';
import WorkItem from './WorkItems';
import { projectsData } from '@/data/projectsData';

const INITIAL_VISIBLE_ITEMS = 6;
const ITEMS_PER_LOAD = 2;

const Work = () => {
    // extract unique categories from the data
    const uniqueCategories = Array.from(new Set(projectsData.map((item) => item.category)));

    // create tab data with 'all' category and unique categories from data
    const tabData = [{ category: 'all' }, ...uniqueCategories.map((category) => ({ category }))];

    // state to manage the currently selected tab
    const [tabValue, setTabValue] = useState('all');
    // number of items to show initially
    const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);

    // reset visible items when tab changes
    useEffect(() => {
        setVisibleItems(INITIAL_VISIBLE_ITEMS);
    }, [tabValue]);

    // filter work items based on the selected tab (memoized for performance)
    const filterWork = useMemo(() => {
        return tabValue === 'all' ? projectsData : projectsData.filter((item) => item.category === tabValue);
    }, [tabValue]);

    // handle loading more items
    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + ITEMS_PER_LOAD);
    };

    return (
        <section className="pt-24 min-h-[1000px] pb-24 bg-[#EFF6FF]" id="work">
            <div className="w-full px-4 xl:px-32">
                <Tabs
                    defaultValue="all"
                    className="w-full flex flex-col"
                    value={tabValue}
                    onValueChange={setTabValue}
                >
                    <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
                        <AnimatedText text="My Latest Work" textStyles="h2 mb-[30px] xl:mb-0" />
                        {/* render tab triggers */}
                        <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                            {tabData.map((item) => {
                                return (
                                    <TabsTrigger
                                        value={item.category}
                                        key={item.category}
                                        className="capitalize w-[120px]"
                                    >
                                        {item.category}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>
                    {/* render content for the selected tab */}
                    <TabsContent value={tabValue} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                            <AnimatePresence>
                                {filterWork.slice(0, visibleItems).map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <WorkItem {...item} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        {/* load more button */}
                        {visibleItems < filterWork.length && (
                            <div className="flex justify-center mt-12">
                                <button onClick={loadMoreItems} className="btn btn-accent">
                                    Load more
                                </button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Work;
