"use client"
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '@/src/shared/components/Button';
import { useEffect, useState } from 'react';
import { AppRoutes } from '@/src/shared/constants/AppRoutes';
import { AppLink } from '@/src/shared/components/AppLink';
import { cls } from '@/src/shared/helpers/classNames/classNames';
import { useMediaQuery } from '@/src/shared/hooks/useMediaQuery';

export const Header = () => {
	const [isOpenNavbar, setIsOpenNavbar] = useState(false)
	const isDesktop = useMediaQuery('(min-width: 1024px)')

	useEffect(() => {
		if (isDesktop) {
			setIsOpenNavbar(false)
		};
	}, [isDesktop])

	const handeleOpenNavbar = () => {
		setIsOpenNavbar((value) => !value)
	}

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
				isOpenNavbar && styles.navigation_open,
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

				{!isDesktop && (
					<Button variant='ghost' onCLick={handeleOpenNavbar}>
						<span className={styles.button_burger} />
					</Button>
				)}
			</div>
		</header>
	);
};
