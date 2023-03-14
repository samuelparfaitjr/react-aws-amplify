import React from 'react';
import './App.scss';
import logo from './assets/logo.png';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react';

type Props = {
  signOut?: () => void;
};

function App({ signOut }: Props) {
  return (
    <View className='app__container'>
      <Card>
        <Image src={logo} className='app__logo' alt='Sign out'></Image>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
