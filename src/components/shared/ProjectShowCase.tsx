import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MoveUpRight } from "lucide-react";
import React from "react";
interface ProjectInfo {
    projectName: string;
    projectTechDtls: string;
    projectLiveLink: string;
    projectImage: string;
}

interface PrjectInfoProps {
    projectInfo: ProjectInfo[];
}

const ProjectShowCase: React.FC<PrjectInfoProps> = ({ projectInfo }) => {    
    return (
        <div className="xl:w-[90%] w-full center">
            <Carousel className="w-full h-[300px] center rounded-xl p-4">
                <CarouselContent className="-ml-2">
                    {projectInfo.map((project, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                        >
                            <div className="xl:w-[350px] lg:w-[330px] relative h-auto bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500">
                                {/* Project Image */}
                                <div className="relative w-full h-[230px] overflow-hidden">
                                    <img
                                        src={project.projectImage}
                                        alt="Website Project"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="w-full h-full p-4 center flex-col items-start justify-end absolute top-0 left-0 bg-[linear-gradient(360deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0)_100%)] z-[100] transition-all duration-300">
                                    <div>
                                        <h2 className="text-xl text-gray-100">{project.projectName}</h2>
                                        <span className="text-xs text-gray-300">{project.projectTechDtls}</span>
                                    </div>
                                    <div className="absolute right-4">
                                        <a
                                            href={project.projectLiveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 center bg-background rounded-full flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition"
                                        >
                                            <MoveUpRight strokeWidth={2} size={16} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="cursor-pointer left-2" />
                <CarouselNext className="cursor-pointer right-2" />
            </Carousel>
        </div>
    )
}

export default React.memo(ProjectShowCase)
