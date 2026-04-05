"use client"
import Image from 'next/image';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/src/shared/components/Button';
import { useState } from 'react';
import { AppRoutes } from '@/src/shared/constants/AppRoutes';

export const Header = () => {
	const [isOpenNavbar, setIsOpenNavbar] = useState(false)

	const handeleOpenNavbar = () => {
		setIsOpenNavbar((value) => !value)
	}

	console.log(isOpenNavbar);

	return (
		<header className={clsx('p-2', styles.header)}>
			<Link
				href={AppRoutes.mainPage}
			>
				<Image
					src={'/icons/logo/logo_light.svg'}
					alt='logo'
					width={92}
					height={28}
					className={styles.logo}
				/>
			</Link>
			{isOpenNavbar && (
				<nav className={styles.navigation}>
					<Link href={AppRoutes.stylesPage}>Стили</Link>
					<Link href={AppRoutes.quizPage}>Квиз</Link>
					<Link href={AppRoutes.glossaryPage}>Глоссарий</Link>
				</nav>
			)}

			<div className={styles.actions}>
				<Button variant='filledPrimary' onCLick={() => { }}>Вход</Button>
				<Button variant='filledSecondary' onCLick={() => { }}>Тема</Button>
				<Button variant='outlinePrimary' onCLick={() => { }} >Язык</Button>
				<Button variant='ghost' onCLick={handeleOpenNavbar}>
					<span className={styles.button_burger} />
				</Button>
			</div>
		</header >
	);
};
