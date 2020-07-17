import React from 'react';

type Props = {
	iamgeStyles?: React.CSSProperties;
};

export const UnderDevelopment = (props: Props) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<img
				style={{ ...props.iamgeStyles }}
				src={process.env.PUBLIC_URL + '/images/under-development.png'}
				alt=""
			/>
		</div>
	);
};
