'use client'
import React, {useRef, useEffect, JSX} from 'react'
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
        <dialog ref={modalRef} className='fixed top-50 left-50 -translate-50 z-10 backdrop:bg-black/50'>
            <div className="size-96 bg-red-900">

                <button
                    className={'absolute top-2 right-2 text-white size-6 bg-black font-bold flex justify-center items-center rounded-full aspect-square cursor-pointer'}
                    onClick={closeModal}><X/>
                </button>
                {children}
            </div>
        </dialog>
    ) : null


    return dialog
}
export default Modal
