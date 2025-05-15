import React, { useEffect } from 'react';
import { useFBX, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const FBXModel: React.FC = () => {
    const fbx = useFBX('/assets/3d/Waving.fbx'); // Replace with the path to your FBX file
    const { animations } = fbx; // Extract animations
    const { ref, mixer, actions } = useAnimations(animations, fbx);

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            actions[Object.keys(actions)[0]]?.play(); // Play the first animation
        }
    }, [actions]);

    useFrame((_, delta) => {
        mixer?.update(delta); // Update animation frame
    });

    return (
        <primitive
            ref={ref}
            object={fbx}
            scale={10} // Adjust the scale as needed
            position={[0, -10, 0]} // Move the model up
        />
    );
};

export default FBXModel;
