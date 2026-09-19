import React from 'react';
import Counter from '../components/Counter';
// import Counter from '@/components/Counter';

const DashboardPage = () => {

    console.log('DashboardPage render');

    return (
        <div>
            <h2>Dashboard page</h2>

            <Counter />

            <ul>
                <li>Dashboard page</li>
                <li>Dashboard page1</li>
                <li>Dashboard page 2</li>
                <li>Dashboard page3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;