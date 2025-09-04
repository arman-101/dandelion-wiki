'use client';

import React, { useState } from 'react';

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('General Feedback');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Submitting...');
        
        const formData = { email, reason, message };

        try {
            const response = await fetch('https://formspree.io/f/mrblljzn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Thank you for your feedback!');
                setEmail('');
                setReason('General Feedback');
                setMessage('');
                setTimeout(() => {
                    onClose();
                    setStatus('');
                }, 2000);
            } else {
                setStatus('Oops! There was a problem submitting your feedback.');
            }
        } catch {
            setStatus('Oops! There was a problem submitting your feedback.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    <XIcon />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Give Feedback</h2>
                
                {status ? (
                    <p className="text-center text-lg text-gray-800 dark:text-gray-200">{status}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                placeholder="So I can reply to you" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason</label>
                            <select id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="w-full px-3 pr-8 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                                <option>General Feedback</option>
                                <option>Content Suggestion</option>
                                <option>Wiki Error</option>
                                <option>Bug Report</option>
                            </select>
                            {reason === 'Wiki Error' && (
                                <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-2 p-2 bg-yellow-50 dark:bg-gray-700 rounded-md">
                                    Please be specific! Include the page title or URL where you found the error.
                                </p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Details</label>
                            <textarea 
                                id="message" 
                                rows={4} 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                placeholder="Tell me what you think..." 
                                required 
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}