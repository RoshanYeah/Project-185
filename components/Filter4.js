import React, { Component } from 'react';
import { Image, View } from 'react-native';

const Filter4 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition,
        noseBasePosition
    }
}) => {
    const transformAngle = (
        angleRad = Math.atan(
            (rightEyePosition.y - leftEyePosition.y) /
            (rightEyePosition.x - leftEyePosition.x)
        )
    ) => (angleRad * 180) / Math.PI;

    return (
        <Image
            source={require('../assets/flower-pic1.png')}
            style={{
                width: faceWidth,
                height: faceHeight,
                resizeMode: 'contain',                
                transform: [{ rotate: `${transformAngle()}deg` }]
            }}
        />
    )

}
export default Filter4