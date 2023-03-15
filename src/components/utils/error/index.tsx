
export const InputErrorMessage = (props: { message: string }) => {
    const { message } = props;
    return (
        <div>
            <p className="text-red-500">{message}</p>
        </div>
    );
};