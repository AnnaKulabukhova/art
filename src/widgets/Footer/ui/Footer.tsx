import Image from 'next/image';
import styles from './Footer.module.scss'
import Link from 'next/link';
import { AppRoutes } from '@/src/shared/constants/AppRoutes';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image
				src={'/icons/logo/logo_dark.svg'}
				alt='logo'
				width={105}
				height={32}
				className={styles.logo}
				fetchPriority='low'
				loading='lazy'
			/>
			<div className='flex gap-3 flex-col'>
				<Link href={AppRoutes.stylesPage}>Стили</Link>
				<Link href={AppRoutes.quizPage}>Квиз</Link>
				<Link href={AppRoutes.glossaryPage}>Глоссарий</Link>
				<Link href={AppRoutes.literaturePage}>Использованная литература</Link>
			</div>
		</footer>
	);
};
