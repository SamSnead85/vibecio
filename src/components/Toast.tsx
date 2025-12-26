import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toast() {
    return (
        <HotToaster
            position="bottom-right"
            toastOptions={{
                duration: 3000,
                style: {
                    background: 'var(--color-zinc-800)',
                    color: 'var(--color-zinc-100)',
                    border: '1px solid var(--color-zinc-700)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                },
                success: {
                    iconTheme: {
                        primary: '#c9a55c',
                        secondary: 'white',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: 'white',
                    },
                },
            }}
        />
    );
}

// Toast helper functions - to be used with react-hot-toast
export const toastStyles = {
    success: {
        style: {
            background: 'rgba(16, 185, 129, 0.1)',
            borderColor: 'rgba(16, 185, 129, 0.3)',
        },
    },
    error: {
        style: {
            background: 'rgba(239, 68, 68, 0.1)',
            borderColor: 'rgba(239, 68, 68, 0.3)',
        },
    },
};
