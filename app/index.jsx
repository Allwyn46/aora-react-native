import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {

    return (
        <View style={styles.container}>
            <Text className="text-3xl text-white font-pbold">We are back bitches</Text>
            <StatusBar style="auto" />
            <Link href="/home" className='text-blue-500 mt-5 font-plight'>Go to Profile</Link>
        </View>
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
