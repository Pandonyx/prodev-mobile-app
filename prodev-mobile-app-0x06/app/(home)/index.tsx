import PropertyListing from "@/components/PropertyListing";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View className='flex-1 bg-gray-100'>
      {/* Search bar */}
      <View className='p-4'>
        <View className='flex-row items-center bg-white rounded-full px-4 py-2 shadow'>
          <View className='flex-1'>
            <Text className='text-gray-600 text-sm'>Where to?</Text>
            <TextInput
              className='text-base text-gray-800'
              placeholder='Location · Date · Add guest'
            />
          </View>
          <View className='w-10 h-10 bg-blue-600 rounded-full items-center justify-center ml-2'>
            <Feather
              name='search'
              size={20}
              color='white'
            />
          </View>
        </View>
      </View>

      {/* Filters */}
      <View className='h-20 bg-white'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View className='flex-row space-x-6 px-4 items-center'>
            {FILTERS.map((filter, index) => (
              <View
                key={index}
                className='items-center'>
                <Image
                  source={require("@/assets/images/mansion.png")}
                  className='w-10 h-10 mb-1'
                  resizeMode='contain'
                />
                <Text className='text-xs text-gray-700'>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Listings */}
      <ScrollView className='flex-1 px-4'>
        <PropertyListing listings={SAMPLE_DATA} />
        <View className='items-center mt-4 mb-8'>
          <TouchableHighlight className='bg-blue-600 px-6 py-2 rounded-full'>
            <Text className='text-white font-medium'>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
