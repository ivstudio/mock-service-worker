interface Props {
    children: React.ReactNode;
}
const ListLabels = ({ children }: Props) => {
    return <ul className="flex gap-1 text-sm">{children}</ul>;
};

export default ListLabels;
