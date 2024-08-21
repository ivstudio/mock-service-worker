interface Props {
    children: React.ReactNode;
}

const ListRow = ({ children }: Props) => {
    return <div className="flex flex-col hover:text-blue-200">{children}</div>;
};

export default ListRow;
