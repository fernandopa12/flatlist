import { View,FlatList,Text } from "react-native";

export default ()=>{
    const produtos = [
        {
            id:'001',
            nome:'Smartphone Samsung',
            preco:'R$200'
        },
        {
            id:'002',
            nome:'Smarphone Apple',
            preco:'R$250'
        },
        {
            id:'003',
            nome:'Smartphone Redmi',
            preco:'R$300'
        },
        {
            id:'004',
            nome:'Smartphone LG',
            preco:'R$400'
        }
    ]

    return(
    <View>
        <FlatList
            data={produtos}
            keyExtractor={item=>item.id}
            renderItem={({item})=><Text>{item.nome} PREÇO:{item.preco}</Text>}

        />
    </View>
    )
}