import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';
import NavItem from '../components/Navitem.jsx';

function Paiement() {

    const { cartStore } = useContext(GlobalContext);

    const clearStorage = () => {
        cartStore.clearLocalStorage();
    };


    return (
        <main className='bg-light-color'>
            <div>
                <div className='flex justify-center items-center mt-20'>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="#63579E" />
                        <circle cx="36" cy="36" r="34" transform="rotate(-180 36 36)" stroke="#121517" stroke-width="4" />
                    </svg>
                    <div className='p-[2px] w-[30%] bg-dark-color'></div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#121517" />
                    </svg>
                </div>
                <div className='flex mt-60 justify-center items-center'>
                    <div className='flex bg-dark-color text-white w-[680px] p-3 justify-center items-center gap-6 self-stretch'>
                        <p>RESTE À PAYER :</p>
                        <p className='text-2xl'>{cartStore.getGrossCartTotal()} $</p>
                    </div>
                </div>
                <div className='text-center flex flex-wrap justify-center items-center mt-[80px]'>
                    <div className='flex flex-wrap border-4 border-dark-color w-[300px] h-[480px] px-[16px] py-[24px] justify-center items-center mr-20'>
                        <svg className='basis-full' width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_129_2368)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M123.75 168.75C135.685 168.75 147.131 164.009 155.57 155.57C164.009 147.131 168.75 135.685 168.75 123.75C168.75 111.815 164.009 100.369 155.57 91.9302C147.131 83.4911 135.685 78.75 123.75 78.75C111.815 78.75 100.369 83.4911 91.9302 91.9302C83.4911 100.369 78.75 111.815 78.75 123.75C78.75 135.685 83.4911 147.131 91.9302 155.57C100.369 164.009 111.815 168.75 123.75 168.75ZM180 123.75C180 138.668 174.074 152.976 163.525 163.525C152.976 174.074 138.668 180 123.75 180C108.832 180 94.5242 174.074 83.9752 163.525C73.4263 152.976 67.5 138.668 67.5 123.75C67.5 108.832 73.4263 94.5242 83.9752 83.9752C94.5242 73.4263 108.832 67.5 123.75 67.5C138.668 67.5 152.976 73.4263 163.525 83.9752C174.074 94.5242 180 108.832 180 123.75Z" fill="#63579E" />
                                <path d="M106.177 134.37C106.706 141.075 112.005 146.295 121.511 146.925V151.875H125.73V146.891C135.574 146.205 141.322 140.94 141.322 133.313C141.322 126.36 136.935 122.782 129.06 120.938L125.73 120.15V106.65C129.96 107.134 132.637 109.44 133.279 112.635H140.681C140.152 106.166 134.606 101.115 125.73 100.564V95.625H121.511V100.687C113.107 101.509 107.392 106.56 107.392 113.715C107.392 120.037 111.645 124.065 118.721 125.707L121.511 126.394V140.704C117.191 140.051 114.322 137.666 113.681 134.37H106.177ZM121.477 119.138C117.326 118.181 115.076 116.212 115.076 113.265C115.076 109.957 117.506 107.482 121.511 106.762V119.138H121.477ZM126.337 127.53C131.389 128.7 133.706 130.59 133.706 133.931C133.706 137.745 130.815 140.355 125.73 140.839V127.395L126.337 127.53Z" fill="#63579E" />
                                <path d="M11.25 0C8.26631 0 5.40483 1.18526 3.29505 3.29505C1.18526 5.40483 0 8.26631 0 11.25L0 101.25C0 104.234 1.18526 107.095 3.29505 109.205C5.40483 111.315 8.26631 112.5 11.25 112.5H57.1838C57.8363 108.63 58.815 104.872 60.0863 101.25H33.75C33.75 95.2826 31.3795 89.5597 27.1599 85.3401C22.9403 81.1205 17.2174 78.75 11.25 78.75V33.75C17.2174 33.75 22.9403 31.3795 27.1599 27.1599C31.3795 22.9403 33.75 17.2174 33.75 11.25H146.25C146.25 17.2174 148.621 22.9403 152.84 27.1599C157.06 31.3795 162.783 33.75 168.75 33.75V73.44C173.025 77.265 176.816 81.63 180 86.4225V11.25C180 8.26631 178.815 5.40483 176.705 3.29505C174.595 1.18526 171.734 0 168.75 0L11.25 0Z" fill="#63579E" />
                                <path d="M112.478 57.1836L112.5 56.2498C112.498 52.3752 111.495 48.5669 109.589 45.1936C107.682 41.8204 104.937 38.9965 101.619 36.9956C98.3015 34.9947 94.523 33.8845 90.6501 33.7726C86.7771 33.6606 82.9408 34.5507 79.5129 36.3567C76.0849 38.1626 73.1813 40.8232 71.0834 44.0807C68.9856 47.3382 67.7644 51.0822 67.5383 54.9502C67.3122 58.8182 68.0888 62.6791 69.7929 66.1588C71.497 69.6386 74.0708 72.6193 77.265 74.8123C86.9823 65.5566 99.2449 59.4175 112.478 57.1836Z" fill="#63579E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_129_2368">
                                    <rect width="180" height="180" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className='text-3xl basis-1/2'>Payer en argent comptant</h2>

                    </div>
                    <div className='flex flex-wrap border-4 border-dark-color w-[300px] h-[480px] px-[32px] py-[48px] justify-center items-center'>
                        <svg className='basis-full' width="180" height="135" viewBox="0 0 180 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_129_2375)">
                                <path d="M123.75 39.875C123.75 38.3832 124.343 36.9524 125.398 35.8975C126.452 34.8426 127.883 34.25 129.375 34.25H151.875C153.367 34.25 154.798 34.8426 155.852 35.8975C156.907 36.9524 157.5 38.3832 157.5 39.875V51.125C157.5 52.6168 156.907 54.0476 155.852 55.1025C154.798 56.1574 153.367 56.75 151.875 56.75H129.375C127.883 56.75 126.452 56.1574 125.398 55.1025C124.343 54.0476 123.75 52.6168 123.75 51.125V39.875Z" fill="#63579E" />
                                <   path d="M22.5 0.5C16.5326 0.5 10.8097 2.87053 6.5901 7.0901C2.37053 11.3097 0 17.0326 0 23L0 113C0 118.967 2.37053 124.69 6.5901 128.91C10.8097 133.129 16.5326 135.5 22.5 135.5H157.5C163.467 135.5 169.19 133.129 173.41 128.91C177.629 124.69 180 118.967 180 113V23C180 17.0326 177.629 11.3097 173.41 7.0901C169.19 2.87053 163.467 0.5 157.5 0.5H22.5ZM168.75 23V79.25H11.25V23C11.25 20.0163 12.4353 17.1548 14.545 15.045C16.6548 12.9353 19.5163 11.75 22.5 11.75H157.5C160.484 11.75 163.345 12.9353 165.455 15.045C167.565 17.1548 168.75 20.0163 168.75 23ZM157.5 124.25H22.5C19.5163 124.25 16.6548 123.065 14.545 120.955C12.4353 118.845 11.25 115.984 11.25 113V101.75H168.75V113C168.75 115.984 167.565 118.845 165.455 120.955C163.345 123.065 160.484 124.25 157.5 124.25Z" fill="#63579E" />
                            </g>
                            <defs>
                                <                           clipPath id="clip0_129_2375">
                                    <rect width="180" height="135" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className='text-3xl basis-full'>Payer par carte</h2>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <div className='flex border-4 border-dark-color w-[300px] h-[96px] px-[24px] py-[16px] items-center text-center'>
                        <h2 className='text-3xl'>Utiliser une carte cadeau</h2>
                    </div>
                </div>
            </div>
            <div className='mt-24 w-full flex justify-center'>
            <NavItem name="Retourner à l'accueil" link="/" iconRight={false} className="w-1/3" onClick={clearStorage}/>
            </div>

        </main>
    )
}
export default observer(Paiement);