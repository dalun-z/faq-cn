import React from 'react';
import '../css/Doc.css'

function BoxContent({ children }) {
    const [header, content] = React.Children.toArray(children);

    return (
        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
            <summary className="px-4 py-6">{header}</summary>
            <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                {content}
            </div>
        </details>
    );
}

export default BoxContent;
