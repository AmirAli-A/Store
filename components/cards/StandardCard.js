import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardsStyle from './AmazingOffersCards.module.scss';
import Picture from '../pictures/Picture';
import LinkButton from '../button/LinkButton'
import style from './StandardCard.module.scss'
const StandardCard = (props) => {
  return (
    <div>
        <Card className={style.card}>
            <CardContent>
                <>
                 <Picture src={props.src} href={props.href} className={props.PictureClassName}/>
                </>
                <LinkButton href={props.href} value={props.value} className={props.linkButtonClassName}/>
            </CardContent>
        </Card>
    </div>
  )
}

export default StandardCard