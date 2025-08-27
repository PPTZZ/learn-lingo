'use client'
import React, {JSX, useEffect, useRef} from 'react'
import {useRouter, useSearchParams} from "next/navigation";
import {X} from 'lucide-react'

const Modal = ({children, ac}: { children: React.ReactNode, ac: string }) => {
    const modalRef = useRef<null | HTMLDialogElement>(null)
    const router = useRouter()
    const params = useSearchParams()
    const showModal = params.get('ac')

    useEffect(() => {
        if (showModal === ac) {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal]);
    const closeModal = () => {
        modalRef.current?.close()
        router.push('/')
    }


    const dialog: JSX.Element | null = showModal === ac ? (
        <dialog ref={modalRef}
                className='backdrop:bg-black/50 p-16 rounded-2xl fixed top-1/2 left-1/2 -translate-1/2 z-50'>
            <div className=" bg-white p-16 w-[35.375rem] h-[37.5rem]">
                <button
                    className={'absolute top-2 right-2 text-black bg-white font-bold flex justify-center items-center aspect-square cursor-pointer'}
                    onClick={closeModal}><X/>
                </button>
                {children}
            </div>
        </dialog>
    ) : null


    return dialog
}
export default Modal
