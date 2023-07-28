import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const FormsNavBar = () => (
    <ul>
        <li>
            <Link to="/forms/controlled">Controlled</Link>
        </li>
        <li>
            <Link to="/forms/uncontrolled">Uncontrolled</Link>
        </li>
        <Outlet />
    </ul>
)