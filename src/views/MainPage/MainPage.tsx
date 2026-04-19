import { HeroMain } from '@/src/widgets/hero/HeroMain';

export const MainPage = () => {
	return (
		<>
			<HeroMain />
			<section className='open_style'>
				<h2>Сецессионизм</h2>
				<div>
					<ul>
						<li>Факт 1</li>
						<li>Факт 2</li>
						<li>Факт 3</li>
						<li>Факт 4</li>
					</ul>
					<div>
						<span>Картина</span>
						<div>
							<span>автор</span>
							<span>год</span>
							<span>название карттины</span>
						</div>
						<button>Узнать больше ссылка на страницу со стилем</button>
					</div>
				</div>
			</section>
			<section>
				<span>картина, которая будет мняться каждый день</span>
				<div>
					<span>автор</span>
					<span>год</span>
					<span>название карттины</span>
					<span>название стиля</span>
				</div>
			</section>
			<section>
				<h2>Квиз</h2>
				<span>ссылка на квиз</span>
			</section>
		</>
	);
};
