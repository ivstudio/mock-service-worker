interface Props {
    message: string;
}

const NoDataMessage = ({ message }: Props) => {
    return (
        <div className="flex h-screen items-center justify-center">
            <h2 className="text-lg font-bold">{message}</h2>
        </div>
    );
};

export default NoDataMessage;
