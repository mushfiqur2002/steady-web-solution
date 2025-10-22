
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin } from "lucide-react";



interface TeamsCards {
    name: string;
    path: string;
    socialLinks: {
        facebook?: string;
        linkedin?: string;
        github?: string;
    };
    imageUrl: string;
}

interface TeamsCardsProps {
    members: TeamsCards[]
}


const TeamsCards: React.FC<TeamsCardsProps> = ({ members }) => {
    return (
        <div className="w-full center gap-12 flex-wrap">
            {members.map((member) => {
                return (
                    <div className="group w-[300px] h-[250px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-lg p-3 transition-all duration-500 cursor-pointer grid grid-cols-[2fr_1fr] grid-rows-[auto_auto] gap-3">
                        {/* Image Section */}
                        <div className="col-[1/2] row-[1/2] bg-gray-200 rounded-xl overflow-hidden">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="col-[2/3] row-[1/2] flex flex-col justify-center items-center gap-4 bg-gray-50/70 rounded-xl backdrop-blur-sm shadow-sm">
                            {member.socialLinks.facebook && (
                                <Link to={member.socialLinks.facebook}>
                                    <Facebook strokeWidth={1} className="hover:text-primary transition-transform hover:scale-110 duration-300" />
                                </Link>
                            )}
                            {member.socialLinks.linkedin && (
                                <Link to={member.socialLinks.linkedin}>
                                    <Linkedin strokeWidth={1} className="hover:text-primary transition-transform hover:scale-110 duration-300" />
                                </Link>
                            )}
                            {member.socialLinks.github && (
                                <Link to={member.socialLinks.github}>
                                    <Github strokeWidth={1} className="hover:text-primary transition-transform hover:scale-110 duration-300" />
                                </Link>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="col-span-2 row-[2/3] bg-gray-100/80 rounded-xl p-3 flex flex-col items-start justify-center">
                            <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
                            <p className="text-sm font-medium text-gray-600">{member.path}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(TeamsCards)
