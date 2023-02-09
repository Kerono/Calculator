import React, { FC } from 'react';

type Props = {
	number: number;
	onClick?: (n: number) => void;
	isWide?: boolean;
};

const NumberButton: FC<Props> = ({ number, onClick, isWide }) => {
	return (
		<div
			className={`button ${isWide ? 'wide' : ''}`}
			onClick={() => onClick && onClick(number)}
		>
			{number}
		</div>
	);
}

export { NumberButton };
