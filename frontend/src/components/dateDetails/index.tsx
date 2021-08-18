import {Container} from './styles'
type DateDetailsProps = {
  date: string
}

export const DateDetails = ({date}: DateDetailsProps) => {
  return <Container> criado em: {date} </Container>
}