import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          className='flex-1 justify-center w-full h-full'
          resizeMode='cover'>
          <View className='flex-1'>
            {/* Logo */}
            <View className='w-full items-center p-5 mb-12 mt-10'>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text group */}
            <View className='items-center px-6'>
              <Text className='text-white font-extrabold text-4xl text-center mb-3'>
                Find your favorite place here
              </Text>
              <Text className='text-white text-lg font-light text-center'>
                The best prices for over 2
              </Text>
              <Text className='text-white text-lg font-light text-center'>
                million properties worldwide
              </Text>
            </View>

            {/* Buttons at bottom */}
            <View className='absolute bottom-0 w-full'>
              {/* Button group */}
              <View className='flex-row gap-5 px-5'>
                <Link
                  href='/join'
                  asChild>
                  <TouchableOpacity className='flex-1 bg-white border-2 border-white rounded-full py-4 items-center'>
                    <Text className='text-black text-lg font-light'>
                      Join here
                    </Text>
                  </TouchableOpacity>
                </Link>

                <Link
                  href='/signin'
                  asChild>
                  <TouchableOpacity className='flex-1 border-2 border-white rounded-full py-4 items-center'>
                    <Text className='text-white text-lg font-light'>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>

              {/* Continue to home */}
              <View className='items-center py-5'>
                <Link
                  href='/(home)'
                  asChild>
                  <TouchableOpacity>
                    <Text className='text-white'>Continue to home</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
