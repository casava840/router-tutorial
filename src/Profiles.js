import React from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from "./Profile";
import './Profiles.css';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/casava840" activeClassName="active">
                        casava840
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/gildong" activeClassName="active">
                        gildong
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<div>사용자를 선택해 주세요.</div>} />
                <Route path="/:username" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default Profiles;