import { NativeModules } from 'react-native';

const { RNAdyenCSE } = NativeModules

export const encrypt = (cardDetail, publicKey) => {
    const { holderName, number, cvc, expiryMonth, expiryYear } = cardDetail
    token = RNAdyenCSE.encrypt(holderName, number, cvc, expiryMonth, expiryYear, publicKey)
    return token
}
