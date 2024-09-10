interface Props {
	errorMessage: string;
}

const Error = ({ errorMessage }: Props) => {
	return (
		<div className="error__wrapper">
			<p className="error__wrapper__message">{errorMessage}</p>
		</div>
	);
};

export { Error };
