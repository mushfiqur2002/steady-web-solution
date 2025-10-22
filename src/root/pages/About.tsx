import { teamMembers } from '@/components/jsondata'
import AboutInfo from '@/components/shared/AboutInfo'
import TeamsCards from '@/components/shared/TeamsCards'

function About() {
    return (
        <div className='center flex-col h-screen gap-4'>
            <AboutInfo />
            <TeamsCards members={teamMembers} />
        </div>
    )
}

export default About
