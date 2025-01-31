import {FiArrowRight} from 'react-icons/fi';
import {useRef} from 'react';
import {useEffect} from 'react';
import {Button} from '@/UI/Button/Button';
import {Title} from '@/UI/Title/Title';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import styles from './Hero.module.scss';

export const Hero = () => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const {push} = useRouter()

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <section className={styles.section}>
      <h1 className='visually-hidden'>Kinomore — бесплатные фильмы и сериалы</h1>
      <video
        ref={videoRef}
        className={styles.video}
        src='/trailer.mp4'
        playsInline
        muted
        autoPlay
        loop
      >
      </video>
      <div className={classNames('container', styles.container)}>
        <div className={styles.content}>
        <Title variant='h2' className={styles.title}>Доктор Стрэндж: В&nbsp;мультивселенной безумия</Title>
        <p className={styles.desc}>Продолжение магических приключений Доктора Стрэнджа в новых мистических мирах и в противостоянии с новыми врагами.</p>
        <Button onClick={() => push('/film/1219909')} endIcon={<FiArrowRight />}>
          Подробнее
        </Button>
        </div>
      </div>
    </section>
  )
}