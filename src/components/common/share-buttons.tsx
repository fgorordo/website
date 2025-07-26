"use client";

import { FC } from 'react';
import { EmailIcon, EmailShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, ThreadsIcon, ThreadsShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';

interface ShareButtonsProps {
    url: string;
    title: string
}

export const ShareButtons: FC<ShareButtonsProps> = ({ url, title }) => {
    return (
        <div>
            <p className='font-bold text-xs mb-2'>Comparte en redes sociales:</p>
            <div className='w-full flex gap-4'>
                <WhatsappShareButton url={url} title={title}>
                    <WhatsappIcon round={true} size={32} />
                </WhatsappShareButton>
                <TwitterShareButton url={url} title={title}>
                    <XIcon round={true} size={32} />
                </TwitterShareButton>
                <ThreadsShareButton url={url} title={title}>
                    <ThreadsIcon round={true} size={32}/>
                </ThreadsShareButton>
                <EmailShareButton url={url} title={title}>
                    <EmailIcon round={true} size={32} />
                </EmailShareButton>
            </div>
        </div>
    )
} 