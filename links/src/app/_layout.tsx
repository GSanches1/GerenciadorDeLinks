//this archive is to set some mods that will be shown in app by default
//example: background color.

import {Stack} from "expo-router"
import {colors} from "@/styles/colors"

export default function Layout(){

    const backgroundColor = colors.gray[950]
    return(
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor}
            }}
        />
    )        
}

