import { useState } from "react";
import Input from "../../components/Input";
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        isEmailError: false,
        isPasswordError: false,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const { email, password } = formData;
    const { isEmailError, isPasswordError } = error;

    function validate() {
        setError({
            isEmailError: !email,
            isPasswordError: !password,
        });
        return email && password;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            // Lakukan aksi yang diperlukan setelah submit berhasil
        }
    }

    return (
        <div>
            <div
                className="h-[100vh] relative"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0.4) 60%),url("images/hero.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-black h-[100vh] lg:bg-transparent py-5">
                    <img src="/images/logo.png" alt="logo" className="h-5  ml-8 sm:h-10" />
                    <div className="mx-8 sm:max-w-xs sm:mx-auto">
                        <h2 className="text-white text-4xl font-bold mt-5 sm:mt-10">Masuk</h2>
                        <form action="" className="flex flex-col justify-between  mt-7 " onSubmit={handleSubmit}>
                            <Input id="email" type="email" label="Email" onChange={handleChange} />
                            {isEmailError && <h3 className='text-red-500'>Email atau nomor telepon tidak valid</h3>}
                            <Input id="password" type="password" label="Password" onChange={handleChange} />
                            {isPasswordError && <h3 className='text-red-500'>Password tidak valid</h3>}
                            <button className="my-5 w-full block mx-auto py-3 px-5 bg-red-600 rounded-md text-white">Masuk</button>
                        </form>
                        <div className="flex flex-row justify-between  text-slate-500 text-sm">
                            <div>
                                <input type="checkbox" name="remember" id="remember" className="" />
                                <label htmlFor="remember" className="ml-1">Ingat Saya</label>
                            </div>
                            <p>Perlu Bantuan ?</p>
                        </div>
                        <h1 className="text-slate-500 mt-2">Baru di Netflix?
                            <span className="font-bold text-lg text-white ml-3">Daftar Sekarang</span>
                            .</h1>
                        <p className="text-slate-500 text-xs text-justify">Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.
                            <span className="text-blue-600 ml-1">Pelajari selengkapnya.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
