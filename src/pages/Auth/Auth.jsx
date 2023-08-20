import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Content from '../../components/content';
import QandA from '../../components/QandA';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';


const Homee = () => {

    return (
        <div className='bg-black'>
            <div
                className="h-[100vh] relative bg-gradient-to-b from-black to-gray-400"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0.4) 60%),url("images/hero.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <nav className="container pt-5 flex flex-row justify-between ">
                    <div>
                        <img src="/images/logo.png" alt="logo" className="h-6 ml-5" />
                    </div>
                    <div className="flex items-center mr-5">
                        <select
                            className="inline-block py-1 px-4 mx-1 text-base bg-gray-800 text-white rounded-md shadow-md border border-x-gray-300"
                        >
                            <option value="Bahasa Indonesia">
                                🌐
                            </option>
                            <option value="English"> 🌐</option>
                        </select>
                        <Link to={'/login'}>
                            <button className="inline-block py-2 px-4 mx-1 bg-red-600 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-red-700" >
                                Masuk
                            </button>
                        </Link>
                    </div>
                </nav >

                <div className="flex flex-col  items-center text-white mx-5 mt-10 ">
                    {/* {content section} */}
                    <div className='sm:mt-20'>
                        <h1 className="text-3xl font-bold text-center sm:text-4xl">
                            Film, acara TV tak terbatas, dan banyak lagi
                        </h1>
                        <p className='text-lg my-5 text-center sm:text-xl'>Tonton di mana pun. Batalkan Kapan pun</p>
                        <p className='text-lg my-5 text-center sm:text-xl'>Siap menonton? Masukan email untuk membuat atau memulai lagi keanggotaanmu</p>
                    </div>
                    <form action="" className='flex flex-col mt-5 
                    sm:flex-row items-center'>
                        <div className="w-full ">
                            <Input id={"email"} label={"Email"} type={"email"} />
                        </div>
                        <button
                            className="w-24 h-12 mx-auto my-2 bg-red-600 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-red-700 
                            sm:ml-2 sm:w-36" >
                            Masuk
                            <FontAwesomeIcon icon={faAngleRight} className='ml-1' />
                        </button>
                    </form>
                </div>
            </div >

            {/* {comtent section} */}
            <div>
                <Content title={"Nikmati di TV-mu"} img={"/images/content1.png"}>
                    Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                </Content>
                <Content title={"Download acara TV untuk menontonnya secara offline"} img={"/images/content2.jpg"} second={true}>
                    Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
                </Content>
                <Content title={"Tonton di mana pun"} img={"/images/content3.png"}>
                    Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.
                </Content>
                <Content title={"Buat profil untuk anak"} img={"/images/content4.png"} second={true}>
                    Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.
                </Content>
            </div>
            {/* {Q and A section} */}
            <QandA />
            <div className='mx-6'>
                <h2 className="text-white text-center text-xl my-5">Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</h2>
                <form action="" className='flex flex-col mt-5'>
                    <div className="flex flex-col md:w-1/2 mx-auto">

                        <Input id={"email"} label={"Email"} type={"email"} />
                    </div>
                    <button className="w-24 h-11 mx-auto mt-4 bg-red-600 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-red-700" >
                        Masuk
                        <FontAwesomeIcon icon={faAngleRight} className='ml-1' />
                    </button>
                </form>
                <Footer />
            </div>
        </div>
    );
};

export default Homee;




