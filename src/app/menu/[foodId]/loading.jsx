import { Span } from 'next/dist/trace';
import React from 'react';

const MenuLoading = () => {
    return (
        <div>
          <span className="loading loading-spinner text-warning"></span>
        </div>
    );
};

export default MenuLoading;