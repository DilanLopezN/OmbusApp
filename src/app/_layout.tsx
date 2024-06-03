import { Stack, Slot } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { THEME } from "../theme";

export default function RootLayout() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Stack >
        <Stack.Screen options={{ headerShown: false }} name="index" />
      </Stack>
    </NativeBaseProvider>
  );
}
