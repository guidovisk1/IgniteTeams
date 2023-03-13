import { Container, Icon, Title } from "./styles"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps &  {
    title : string
}

export function GroupCard({title, ...rest} : Props){
    return(
        <Container {...rest}>
            <Icon color='#00875F' size={32} weight= {'fill'}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}
