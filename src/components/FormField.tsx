import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icons from "../constants/Icons";


interface FormFieldProps {
    title: string
    value: any
    placeholder?: string
    handleChangeText: (e: any) => void
    otherStyles?: string
}


const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className=" text-white font-bold text-lg underline">{title}</Text>

            <View className="w-full h-12 px-4 bg-white rounded-2xl border-2 border-gray-400 focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 text-zinc-900 font-semibold "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Senha" && !showPassword}
                    {...props}
                />

                {title === "Senha" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? Icons.eye : Icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;