import { View, Text, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PropertyListingProps } from "@/interfaces";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <ImageBackground
      source={require("@/assets/images/sample-image.png")}
      className='h-60 w-full rounded-xl overflow-hidden mb-4'
      imageStyle={{ borderRadius: 16 }}>
      {/* Overlay */}
      <View className='flex-1 bg-black/40 p-4 justify-between'>
        {/* Favorite button */}
        <View className='items-end'>
          <View className='bg-black/50 rounded-full p-2'>
            {favorite ? (
              <FontAwesome
                name='heart'
                size={24}
                color='#E50000'
              />
            ) : (
              <EvilIcons
                name='heart'
                size={32}
                color='white'
              />
            )}
          </View>
        </View>

        {/* Info group */}
        <View className='flex-row justify-between items-center'>
          {/* Left side: rating + details */}
          <View className='flex-row items-center'>
            <MaterialIcons
              name='star-rate'
              size={28}
              color='#FAC02B'
            />
            <Text className='text-white text-lg font-semibold ml-1'>
              {rate}
            </Text>
          </View>

          {/* Right side: property info */}
          <View className='ml-4 flex-1'>
            <Text className='text-white text-lg font-bold'>{propertyName}</Text>
            <Text className='text-gray-200 text-sm'>
              {location.street}, {location.city}, {location.country}
            </Text>
          </View>

          {/* Price */}
          <View className='ml-2'>
            <Text className='text-white text-lg font-semibold'>
              {currency}
              {amount}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;
