interface Props {
    children: React.ReactNode;
}

const List = ({ children }: Props) => {
    const test = 'test';
    return (
        <section className="mx-auto flex max-w-3xl flex-col rounded-lg border border-gray-800 bg-gray-950">
            {children}
        </section>
    );
};

export default List;
