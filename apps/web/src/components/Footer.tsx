import { FaInstagram, FaTelegram, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";

const footerCols = [
    {
        title: "Categories",
        items: ["Programming & Tech", "Business", "Design", "Blockchain", "Digital Marketing"]
    },
    {
        title: "Community",
        items: ["Community Hub", "Forum", "Events", "Blogs"]
    },
    {
        title: "About",
        items: ["About KaamBack", "Careers", "Press and notes", "Privacy Policy", "Terms of Services"]
    },
    {
        title: "Support",
        items: ["Help and Support", "Company guide", "Freelancer guide"]
    }
]

const Footer = () => {
    return (
        <footer>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-28 pt-12 lg:pt-24">
                {footerCols.map((section, index) => (
                    <div className="flex flex-col mb-10 lg:mb-0" key={index}>
                        <h1 className="text-xl lg:text-2xl font-semibold font-ptSans mb-4 lg:mb-10">{section.title}</h1>
                        {section.items.map((item, idx) => (
                            <p className="text-md lg:text-lg my-1 font-medium" key={idx}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mx-6 lg:mx-24 mt-12 lg:mt-16 mb-12 flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-gray-700 text-center lg:text-left text-md lg:text-xl">© Copyright 2024 KAAMBACK. All Rights Reserved.</h2>
                <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-10 mt-6 lg:mt-0 items-center">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">FOLLOW US</h2>
                    <div className="flex flex-row gap-x-6">
                        <FaInstagram size={30} />
                        <FaRegEnvelope size={30} />
                        <FaLinkedinIn size={30} />
                        <FaTelegram size={30} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
