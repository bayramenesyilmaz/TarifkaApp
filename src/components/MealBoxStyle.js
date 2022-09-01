import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    mealBox:{
        width:Dimensions.get("window").width/1.05,
        height:Dimensions.get("window").height/4,
        marginHorizontal:10,
        margin:5,
        borderRadius:10,
        borderWidth:2,
        borderColor:"gray"
    },
    image:{
        flex:1,
        justifyContent:"flex-end",
        resizeMode:'cover'
    },
    text:{
        fontSize:25,
        color:"white",
        textAlign:"right",
        fontWeight:"bold",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    }
})