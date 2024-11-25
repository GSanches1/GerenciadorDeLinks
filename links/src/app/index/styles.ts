import {StyleSheet} from "react-native"
import {colors} from "@/styles/colors"


export const styles = StyleSheet.create({
    container: {
        flex: 1, //enable all content to use full page.
        paddingTop: 62,
        // justifyContent: "center", //it brings all content to use the center of the page
        // alignItems: "center" //this one centralizes the content on the center of the page.
    },
    
    title: {
        color: colors.green[900],
        fontSize: 22,
    },
    
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom:32,
    },

    logo: {
        height:32,
        width:38,
    },
})