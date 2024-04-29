import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView >
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                    <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
                    <Text className="text-3xl text-white font-psemibold mt-10">
                        Register
                    </Text>

                    {/* USERNAME FIELD */}

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />

                    {/* EMAIL FIELD */}

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    {/* PASSWORD FIELD */}

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap-2 mt-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Already have an account?
                        </Text>
                        <Link href="/login" className='text-lg font-psemibold text-secondary'>Login</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({})