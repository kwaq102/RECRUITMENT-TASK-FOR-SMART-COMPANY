import { ReactNode } from "react";

interface Props {
	href: string;
	classNameText?: string;
	children?: ReactNode;
}

const MyLink = ({ children, classNameText, href }: Props) => {
	return (
		<a href={href} className={classNameText}>
			{children}
		</a>
	);
};

export { MyLink };
