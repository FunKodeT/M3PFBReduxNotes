'use client';

import React from 'react';
import {Box, Button, Link, Text, useColorMode} from '@chakra-ui/react';
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {FaGoogle, FaMoon, FaSun} from 'react-icons/fa';
import {auth} from '../firebase';
import useAuth from '../hooks/useAuth';
import {color} from 'framer-motion';

const Auth = () => {
	const {toggleColorMode, colorMode} = useColorMode();
	const {isLoggedIn, user} = useAuth();
	const handleAuth = async () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// THIS GIVES YOU A GOOGLE ACCESS TOKEN, YOU CAN USE IT TO ACCESS THE GOOGLE API
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// THE SIGNED-IN USER INFO
				const user = result.user;
				// ...
			})
			.catch((error) => {
				// HANDLE ERRORS HERE
				const errorCode = error.code;
				const errorMessage = error.message;
				// THE EMAIL OF THE USERS ACCOUNT USED
				const email = error.customData.email;
				// THE AUTHCREDENTIAL TYPE THAT WAS USED
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	return (
		<Box position={'fixed'} top="5%" right="5%">
			<Button onClick={() => toggleColorMode()}>
				{colorMode == 'dark' ? <FaSun /> : <FaMoon />}
			</Button>{' '}
			{isLoggedIn && (
				<>
					<Text color="green.500">{user.email}</Text>
					<Link color="red.500" onClick={() => auth.signOut()}>
						Logout
					</Link>
				</>
			)}
			{!isLoggedIn && (
				<Button leftIcon={<FaGoogle />} onClick={() => handleAuth()}>
					Login with Google
				</Button>
			)}
		</Box>
	);
};

export default Auth;
