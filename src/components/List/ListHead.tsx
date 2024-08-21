interface Props {
    title: string;
}

const ListHead = ({ title }: Props) => {
    return (
        <header className="sticky top-0 border-b border-gray-800 bg-gray-950 p-3">
            <h2 className="text-base font-bold text-white">{title}</h2>
        </header>
    );
};

export default ListHead;
