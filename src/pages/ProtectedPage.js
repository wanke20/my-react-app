import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const navigate = useNavigate();

    const isAuthed = true;

    useEffect(() => {
        if (!isAuthed) {
            navigate('/');
        }
    });

    return (
        <h1>Only authed users should be able to see this!</h1>
    )

};