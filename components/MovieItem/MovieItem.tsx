import {FC} from 'react'
import {MovieFavorite} from '../MovieFavorite/MovieFavorite'
import {IMovie} from '@/types/IMovie'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MovieItem.module.scss'

interface MovieItemProps {
    item: IMovie
}

export const MovieItem: FC<MovieItemProps> = ({item}) => {

    const {poster, description, names, year, movieLength, rating, shortDescription} = item;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href={`/film/${item.id}`}>
                    <a className={styles.imageContainer}>
                        <Image
                            layout='fill'
                            src={poster.previewUrl}
                            alt={description}
                        />
                    </a>
                </Link>
                <div className={styles.text}>
                    <Link href={`/film/${item.id}`}>
                        <a className={styles.title}>{names[0].name}</a>
                    </Link>
                    <span className={styles.info}>{year}{movieLength && `, ${movieLength} мин.`}</span>
                    <Link href={`/film/${item.id}`}>
                        <a className={styles.desc}>{shortDescription ? shortDescription : description}</a>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.rating}>
                    {rating.kp}
                </span>
                <MovieFavorite id={item.id} variant='text' />
            </div>
        </div>
    )
}
