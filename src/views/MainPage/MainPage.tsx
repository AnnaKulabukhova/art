import Link from 'next/link';

export const MainPage = () => {
	return (
		<>
			"Главная страница"
			<Link href='/categories'>Categories </Link>
		</>
	);
};
