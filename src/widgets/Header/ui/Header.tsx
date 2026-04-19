"use client"
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '@/src/shared/components/Button';
import { useState } from 'react';
import { AppRoutes } from '@/src/shared/constants/AppRoutes';
import { AppLink } from '@/src/shared/components/AppLink';
import { cls } from '@/src/shared/helpers/classNames/classNames';

export const Header = () => {
	const [isOpenNavbar, setIsOpenNavbar] = useState(false)

	const handeleOpenNavbar = () => {
		setIsOpenNavbar((value) => !value)
	}

	// console.log(isOpenNavbar);

	return (
		<header className={cls('p-2', styles.header)}>
			<Link
				href={AppRoutes.mainPage}
			>
				<Image
					src={'/icons/logo/logo_dark.svg'}
					alt='logo'
					width={105}
					height={32}
					className={styles.logo}
					fetchPriority='high'
					loading='eager'
				/>
			</Link>


			<nav className={cls(
				styles.navigation,
				'xl:flex',
				isOpenNavbar && styles.navigation_mobile
			)}>
				<AppLink color='neutral' href={AppRoutes.stylesPage}>Стили</AppLink>
				<AppLink color='neutral' href={AppRoutes.quizPage}>Квиз</AppLink>
				<AppLink color='neutral' href={AppRoutes.glossaryPage}>Глоссарий</AppLink>
			</nav>

			<div className={styles.actions}>
				<Button variant='filled' color='primary' onCLick={() => { }}>Вход</Button>
				<Button variant='ghost' onCLick={() => { }}>
					<Image src={'./icons/theme/light_theme.svg'} width={32} height={32} alt='theme' />
				</Button>
				<Button variant='ghost' onCLick={() => { }}>RU</Button>

				<Button classNames='xl:hidden' variant='ghost' onCLick={handeleOpenNavbar}>
					<span className={styles.button_burger} />
				</Button>
			</div>
		</header>
	);
};
