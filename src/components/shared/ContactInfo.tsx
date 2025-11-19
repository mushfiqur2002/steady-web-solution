import { socialLinks } from "../jsondata"

function ContactInfo() {
    return (
        <div className="w-[90%] md:w-[80%] bg-white rounded-2xl shadow-xl p-8">

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text mb-2">Connect With Us</h2>
                <p className="text-gray-600">Follow us on social media</p>
            </div>

            <div className="w-full center flex-wrap gap-2">
                {
                    socialLinks.map(({ icon: Icon, link, linkName, background, iconColor }, i) => {
                        return (
                            <div className="w-[300px]" key={i}>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-x-2 group relative overflow-hidden border-3">
                                    <div className="absolute left-0 top-0 h-full w-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" style={{ backgroundColor: iconColor }}></div>
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: background, color: iconColor }}>
                                        <Icon strokeWidth={1} />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">{linkName}</span>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContactInfo
