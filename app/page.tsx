import React from 'react'
import HeroImage from "@/components/heroImage";
import Stats from "@/components/stats";
import TitleCard from "@/components/titleCard";
import Modal from "@/components/UI/modal";
import MainButton from "@/components/UI/button";


const HomePage = () => {
    return (
        <div className="flex flex-col mt-5">
            <div className="flex gap-6 justify-center">
                <TitleCard/>
                <HeroImage/>
            </div>
            <Stats/>
            <Modal ac={'login'}>
                <h2 className={'text-5xl font-medium'}>Log In</h2>
                <p className={'mt-5'}>Welcome back! Please enter your credentials to access your account and continue your search for an
                    teacher.</p>
                <form className={'flex flex-col gap-5 mt-10'}>
                    <input className={'modal-input'} type="text" placeholder={'User'}/>
                    <input className={'modal-input'} type="password" placeholder={'Password'}/>
                    <MainButton color={'primary'} size={'lg'} type={'submit'} className={'mt-10'}>Log In</MainButton>
                </form>
            </Modal>
            <Modal ac={'register'}>
                <h2 className={'text-5xl font-medium'}>Registration</h2>
                <p className={'mt-5'}>
                    Thank you for your interest in our platform! In order to register, we need some information. Please
                    provide us with the following information
                </p>
                <form className={'flex flex-col gap-5 mt-10'}>
                    <input className={'modal-input'} type="text" placeholder={'Name'}/>
                    <input className={'modal-input'} type="text" placeholder={'Email'}/>
                    <input className={'modal-input'} type="password" placeholder={'Password'}/>
                    <MainButton color={'primary'} size={'lg'} type={'submit'} className={'mt-10'}>Sign Up</MainButton>
                </form>
            </Modal>
        </div>

    );
}
export default HomePage
