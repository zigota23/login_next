import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Card from '../components/Card'
import HTag from '../components/HTag'
import Tag from '../components/Tag'


export default function Home() {
  return (
    <div>
      <Button color='primary'>Узнать подробнее</Button>
      <HTag type='h3'>Курсы по Photoshop</HTag>
      <Tag type='gray'>Web дизайн</Tag>
      <Card title='Начальный' money={110000} star={1}/>
    </div>
  )
}
