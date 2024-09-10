import { ReactNode } from "react";

interface Props {
	classNameText?: string;
	children?: ReactNode;
}

const Paragraph = ({ children, classNameText }: Props) => {
	return <p className={classNameText}>{children}</p>;
};

export { Paragraph };
