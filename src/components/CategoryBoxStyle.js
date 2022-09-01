import { StyleSheet } from "react-native"

export default StyleSheet.create({
    categoryBox:{
        backgroundColor:"white",
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:5,
        flexDirection:"row",
        alignItems:"center",
        height:80,
        paddingLeft:10
    },
    image:{
        width:80,
        height:80,
        resizeMode:"contain",
        marginRight:10,
    },
    text:{
        fontSize:20,
        color:"black"
    }
})