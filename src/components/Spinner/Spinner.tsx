const Spinner = () => {
    return (
        <div
            className="flex min-h-screen items-center justify-center"
            data-testid="spinner"
        >
            <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-transparent" />
        </div>
    );
};

export default Spinner;
