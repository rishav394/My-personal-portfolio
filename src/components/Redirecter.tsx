import React, { useEffect } from 'react';

type Props = {
	to: string;
};

export const Redirector = (props: Props) => {
	useEffect(() => {
		// @ts-ignore
		window.location = props.to;
	}, [props]);

	return (
		<div
			style={{
				backgroundImage: 'url("/images/rocket.jpg")',
				height: '100vh',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			{/* <img src="/images/rocket.jpg" /> */}
		</div>
	);
};
