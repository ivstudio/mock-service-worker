interface Props {
    label: string;
    style?: React.CSSProperties;
}

const ListLabelItem = ({ label, style }: Props) => {
    return (
        <li className="rounded-full px-2 text-xs font-semibold" style={style}>
            {label}
        </li>
    );
};

export default ListLabelItem;
