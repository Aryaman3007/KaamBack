import { useState, useContext, FormEvent } from 'react';
import { AuthContext } from '../context/AuthContext';
import Google from "../assets/google.png";
import Github from "../assets/github.png";

const style = {
    main: `fixed inset-0 flex items-center justify-center z-20 px-4`,
    box: `bg-[#BFE0FF] text-white p-14 rounded-xl z-30 w-full max-w-xl`,
    icon: `mr-2 w-7 h-7`,
    button: `flex items-center justify-center w-full border border-black text-black py-2 mb-2 rounded-lg px-3`,
    text: `text-center flex-1`,
    hr: `flex-grow border-black`,
    button2: `flex items-center justify-center w-full border border-black text-black py-2 rounded-lg px-4`,
    checkout: `flex justify-center items-center w-full text-gray-900 text-xs mb-2`
}

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
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Signup must be used within an AuthProvider');
    }

    const { signup } = context;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await signup(email, password);
    };

    const googleSignup = () => {
        window.location.href = 'http://localhost:5000/v1/auth/google';
    };

    const githubSignup = () => {
        window.location.href = 'http://localhost:5000/v1/auth/github';
    };

    return (
        <div className={style.main}>
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => { }}></div>
            <div className={style.box}>
                <h2 className="text-center text-2xl font-bold text-black mb-4">Create Your Account</h2>
                <form onSubmit={handleSubmit} className='w-[90%] mx-auto'>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button type="submit" className={style.button}>
                        <span className={style.text}>Sign Up</span>
                    </button>
                    <div className="flex items-center my-4">
                        <hr className={style.hr} />
                        <span className="px-4 text-[#1F82E8]">OR</span>
                        <hr className={style.hr} />
                    </div>
                    <div className="flex space-x-4 mb-4">
                        {companies.map((item, index) => (
                            <button key={index} className={style.button2} onClick={item.text === 'Google' ? googleSignup : githubSignup}>
                                <img src={item.logo} alt={item.alt} className="mr-2 w-7 h-7" />
                                <span className={style.text}>{item.text}</span>
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
                </form>
            </div>
        </div>
    );
};

export default Signup;
