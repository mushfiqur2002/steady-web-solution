import { projectInfo } from "@/components/jsondata"
import ProjectShowCase from "@/components/shared/ProjectShowCase"

function Project() {
    return (
        <div className="w-full h-screen center flex-col gap-4 pt-24 text-text">
            <h2 className="text-4xl font-bold">Our Creations</h2>
            <ProjectShowCase projectInfo={projectInfo} />
            <ProjectShowCase projectInfo={projectInfo} />

        </div>
    )
}

export default Project
