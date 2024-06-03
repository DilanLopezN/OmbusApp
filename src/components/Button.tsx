import { Button as NativeButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
    title: string
    buttonColor: string
    pressedColor: string
    borderColor: string
    textColor: string
    outlineBorder: boolean
}

export function Button({ title, buttonColor, pressedColor, outlineBorder, borderColor, textColor, ...rest }: Props) {
    return (
        <NativeButton
            w="full"
            h={10}
            rounded="md"

            _pressed={{
                bg: pressedColor
            }}
            bg={buttonColor}
            borderWidth={outlineBorder === true ? 1 : 0}
            borderColor={borderColor}
            {...rest}
        >
            <Text
                color={textColor}
                fontFamily="heading"
                fontSize="sm"
            >
                {title}
            </Text>
        </NativeButton>
    )
}