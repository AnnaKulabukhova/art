import { AppLink } from "@/src/shared/components/AppLink"
import { AppRoutes } from "@/src/shared/constants/AppRoutes"
import Image from "next/image"
import styles from './HeroMain.module.scss'
import { Text } from "@/src/shared/components/Text"

export const HeroMain = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
        <Image
          className={styles.hero_image}
          src={'/pictures/jackson_pollock/number_one1.jpg'}
          fill
          sizes="(min-width: 1920px) 1920px, 100vw"
          priority
          alt='Джексон Поллок Номер 1'
        />
        <div className={styles.heading}>
          <Text tag='h1' variant="title" weight="700" className={'title'}>Свременное искусство</Text>
          <Text tag="p" variant="suptitle" className='subtitle'>Подзаголовок совремменного искусства</Text>
          <AppLink variant='filled' color='neutral' href={AppRoutes.stylesPage}>
            Начать изучение
          </AppLink>
        </div>
      </div>
    </section>
  )
} 