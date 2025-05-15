import React from 'react';
import '../App.css';
import { Canvas } from '@react-three/fiber';
import FBXModel from './FbxModel';
import { OrbitControls } from '@react-three/drei';

const Header: React.FC = () => {
    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Prateek Upadhayay</span>
                </h1>
                <p className="header-subtitle">Full Stack Developer</p>
                <button 
                    className="btn btn-primary" 
                    onClick={() => window.open('https://github.com/Prateekupadhaya', '_blank')}
                    >
                    Visit My Works
                </button>

            </div>
            {/* FBX Model */}
            <div style={{ width: '400px', height: '400px', marginRight: '90px' }}>
            <Canvas camera={{ position: [0, 7, 20], fov: 50 }}>
    <ambientLight intensity={1.2} />
    <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
    <spotLight position={[0, 15, 10]} angle={0.3} intensity={2} penumbra={1} castShadow />
    <pointLight position={[10, 10, 10]} intensity={1} castShadow />

    <FBXModel />
    <OrbitControls 
    enableZoom={false}  // Disable zoom if not needed
    enablePan={false}   // Disable panning
    minPolarAngle={Math.PI / 2} // Lock vertical movement
    maxPolarAngle={Math.PI / 2} // Lock vertical movement
/></Canvas>

            </div>
        </header>
    );
};

export default Header;