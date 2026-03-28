import Image from 'next/image';
import styles from './Header.module.scss';
import clsx from 'clsx';

export const Header = () => {
	return (
		<header className={clsx('p-2', styles.header)}>
			<Image
				src={'/icons/logo/logo_light.svg'}
				alt='logo'
				width={92}
				height={28}
			/>
		</header>
	);
};
