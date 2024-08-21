import React from 'react';

interface Props {
    children?: React.ReactNode;
    url: string;
    title: string;
    subText?: string;
}

const ListItemLink = ({ children, url, title, subText }: Props) => {
    return (
        <a
            className="border-b border-gray-800 px-3 py-2 hover:bg-gray-900"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
        >
            <h3 className="mb-2 truncate text-sm font-bold text-white">
                {title}
            </h3>
            {children}
            {subText ? (
                <span className="text-xs text-gray-500">{subText}</span>
            ) : null}
        </a>
    );
};

export default ListItemLink;
