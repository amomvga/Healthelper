import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#0c1520",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },

    form: {
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:10,
    },

    formLabel: {
        color:"#c9b871",
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#b1b0c9",
        height:40,
        margin:12,
        paddingLeft:10,
    },

    button:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#c9b871",
        paddingTop: 14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },

    buttonText:{
        fontSize:20,
        color:"#ffffff",
    },

    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },

});

export default styles