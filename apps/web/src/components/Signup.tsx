import { useNavigate } from 'react-router-dom';
import Google from "../assets/google.png";
import Gmail from "../assets/mail.png";
import Github from "../assets/github.png"; 

const style = {
    main: `fixed inset-0 flex items-center justify-center z-20 px-4`,
    box: `bg-[#BFE0FF] text-white p-14 rounded-xl z-30 w-full max-w-xl`,
    icon: `mr-2 w-7 h-7`,
    button: `flex items-center w-full border border-black text-black py-2 mb-2 rounded-lg px-3`,
    text: `ml-auto mr-auto`,
    hr: `flex-grow border-black`,
    button2: `flex items-center justify-between flex-grow border border-black text-black py-2 rounded-lg px-4`,
    checkout: `flex justify-center items-center w-full text-gray-900 text-xs mb-2`
}

const continueWith = [
    {
        text: 'Email',
        logo: Gmail,
        alt: "Gmail icon"
    },
]

const companies = [
    {
        text: "Google",
        logo: Google,
        alt: "Google icon",
    },
    {
        text: "Github",
        logo: Github,
        alt: "Github icon"
    }
]

const Signup = () => {
    const navigate = useNavigate();

    const onClose = () => {
        navigate('/');
    };

    return (
        <div className={style.main}>
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className={style.box}>
                <h2 className="text-center text-2xl font-bold text-black mb-4">Create Your Kaamback Account</h2>
                <div className='w-[90%] mx-auto'>
                    {continueWith.map((item, index) => (
                        <button key={index} className={style.button}>
                            <img src={item.logo} alt={item.alt} className={style.icon} />
                            <span className={style.text} >Continue with {item.text}</span>
                        </button>
                    ))}
                    <div className="flex items-center my-4">
                        <hr className={style.hr} />
                        <span className="px-4 text-[#1F82E8]">OR</span>
                        <hr className={style.hr} />
                    </div>
                    <div className="flex space-x-4 mb-4">
                        {companies.map((item, index) => (
                            <button key={index} className={style.button2}>
                                <img src={item.logo} alt={item.alt} className="mr-2 w-7 h-7" />
                                <span className='ml-auto mr-auto' >{item.text}</span>
                            </button>
                        ))}
                    </div>
                    <div className="mx-auto w-[70%] text-center">
                        <span className={style.checkout}>
                            <input type="checkbox" className="mr-2" />
                            I have read and agree to the following documents:
                        </span>
                        <a href="" className="text-[10px] text-[#1F82E8] underline">General terms & privacy policy</a>
                        <br />
                        <span className="text-xs text-black">
                            Are you an existing user? <a href="" className="text-[#1F82E8] underline">Sign in</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
