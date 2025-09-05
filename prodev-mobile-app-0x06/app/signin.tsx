import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FACEBOOKLOGO, GOOGLELOGO } from "../constants";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className='flex-1 bg-white px-6'>
      {/* Header */}
      <View className='flex-row justify-between items-center mt-4'>
        <Text></Text>
        <Text
          className='text-base'
          onPress={() => router.push("/")}>
          Close
        </Text>
      </View>

      {/* Title */}
      <View className='items-center mt-10 mb-8'>
        <Text className='text-3xl font-bold'>Sign In</Text>
        <Text className='text-gray-500 mt-2'>Welcome back! Please sign in</Text>
      </View>

      {/* Form */}
      <View className='space-y-6'>
        <View>
          <Text className='text-sm font-medium mb-2'>Email</Text>
          <TextInput
            className='border border-gray-300 rounded-lg px-4 py-3'
            keyboardType='email-address'
          />
        </View>

        <View>
          <Text className='text-sm font-medium mb-2'>Password</Text>
          <TextInput
            secureTextEntry
            className='border border-gray-300 rounded-lg px-4 py-3'
          />
        </View>
      </View>

      {/* Primary button */}
      <TouchableOpacity className='bg-blue-600 rounded-full py-4 mt-8 items-center'>
        <Text className='text-white font-semibold text-lg'>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot password */}
      <Text className='text-blue-600 text-center mt-4'>Forgot Password?</Text>

      {/* Divider */}
      <View className='flex-row items-center my-8'>
        <View className='flex-1 h-px bg-gray-300' />
        <Text className='mx-3 text-gray-500'>or continue with</Text>
        <View className='flex-1 h-px bg-gray-300' />
      </View>

      {/* Social buttons */}
      <View className='flex-row space-x-4 justify-center'>
        <TouchableOpacity className='flex-row items-center border border-gray-300 rounded-full px-6 py-3 space-x-3'>
          <Image source={GOOGLELOGO} />
          <Text className='font-medium'>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row items-center border border-gray-300 rounded-full px-6 py-3 space-x-3'>
          <Image source={FACEBOOKLOGO} />
          <Text className='font-medium'>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className='flex-row justify-center mt-10'>
        <Text className='text-gray-600'>Don’t have an account? </Text>
        <Text
          className='text-blue-600 font-medium'
          onPress={() => router.push("/join")}>
          Join Now
        </Text>
      </View>
    </View>
  );
}
