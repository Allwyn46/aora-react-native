import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>

                {/* LOGO AND IMAGE SECTION */}

                <View className="w-full justify-center items-center min-h-[95vh] px-4">
                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' />
                    <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode='contain' />

                    {/* TEXT SECTION */}

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-pbold text-center">
                            Discover Endless Possibilities with {''}
                            <Text className="text-secondary-200">
                                Aora
                            </Text>
                        </Text>
                        <Image source={images.path}
                            className="w-[130px] h-[15px] absolute -bottom-2 left-36"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/login')}
                        containerStyles="w-full mt-7"
                    />
                </View>

            </ScrollView>

            {/* FOR THE NOTIFICATION PANEL COLOR IN THE TOP */}

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
