import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function Office(props) {
  const { section } = props;
  const { nodes, materials } = useGLTF('models/scene.gltf');
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  const textureSmileyFace = useTexture("textures/smiley-face.jpg");

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration: 0.8,
    });
    }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
  });

  return (
    <group {...props} dispose={null}>
      <mesh 
        name="Screen" 
        geometry={nodes.Screen.geometry}
        position={[1.292, 1.042, -0.425]} 
        rotation={[3.11, 0.665, -3.09]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <mesh 
        name="Screen2" 
        geometry={nodes.Screen2.geometry}
        position={[1.208, 1.042, 0.569]} 
        rotation={[2.72, 1.374, -2.713]}
      >
        <meshBasicMaterial map={textureSmileyFace} toneMapped={false} />
      </mesh>
      <group name="Plane" position={[-0.001, 0, 0]}>
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} />
        <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={textureMaterial} />
      </group>
      <motion.group 
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="Guitar" 
        position={[-1.618, -0.033, -1.551]}
      >
        <mesh name="Mesh1_Model_1001" geometry={nodes.Mesh1_Model_1001.geometry} material={textureMaterial} />
        <mesh name="Mesh1_Model_1001_1" geometry={nodes.Mesh1_Model_1001_1.geometry} material={textureMaterial} />
        <mesh name="Mesh1_Model_1001_2" geometry={nodes.Mesh1_Model_1001_2.geometry} material={textureMaterial} />
        <mesh name="Mesh1_Model_1001_3" geometry={nodes.Mesh1_Model_1001_3.geometry} material={textureMaterial} />
        <mesh name="Mesh1_Model_1001_4" geometry={nodes.Mesh1_Model_1001_4.geometry} material={textureMaterial} />
        <mesh name="Mesh1_Model_1001_5" geometry={nodes.Mesh1_Model_1001_5.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={textureMaterial} position={[0.634, 0.681, -0.122]} rotation={[Math.PI, -1.568, Math.PI]} />
      <motion.group 
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="Plant" 
        position={[1.121, 0.333, 1.564]}
      >
        <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_2" geometry={nodes.mesh24448074_2.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Table" geometry={nodes.Table.geometry} material={textureMaterial} position={[1.015, -0.04, -0.002]} />
      <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={textureMaterial} position={[0.634, 0.704, 0.34]} rotation={[-Math.PI / 2, 0, -1.546]} />
      <mesh name="Mousepad" geometry={nodes.Mousepad.geometry} material={textureMaterial} position={[0.634, 0.69, 0.328]} rotation={[-Math.PI / 2, 0, 0]} />
      <motion.group 
        scale={[0, 0, 0]}
        animate={{
          scale: section === 0 ? 1 : 0,
        }}
        name="OfficeChair" 
        position={[0.021, -0.007, 0.127]} rotation={[-Math.PI / 2, 0, 1.465]}
      >
        <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Blackboard" geometry={nodes.Blackboard.geometry} material={textureMaterial} position={[1.974, 1.914, 0]} rotation={[0, -1.571, 0]} />
      <mesh name="Text" geometry={nodes.Text.geometry} material={textureMaterial} position={[1.961, 2.279, -1.004]} rotation={[1.582, 0, Math.PI / 2]} scale={0.198} />
      <group name="Monitor-L" position={[1.292, 1.042, -0.425]} rotation={[3.11, 0.665, -3.09]}>
          <mesh name="mesh66998423" geometry={nodes.mesh66998423.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_1" geometry={nodes.mesh66998423_1.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_2" geometry={nodes.mesh66998423_2.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_3" geometry={nodes.mesh66998423_3.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_4" geometry={nodes.mesh66998423_4.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_5" geometry={nodes.mesh66998423_5.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_6" geometry={nodes.mesh66998423_6.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_7" geometry={nodes.mesh66998423_7.geometry} material={textureMaterial} />
          <mesh name="mesh66998423_8" geometry={nodes.mesh66998423_8.geometry} material={textureMaterial} />
        </group>
        <group name="Monitor-R" position={[1.208, 1.042, 0.569]} rotation={[2.72, 1.374, -2.713]}>
          <mesh name="mesh66998423002" geometry={nodes.mesh66998423002.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_1" geometry={nodes.mesh66998423002_1.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_2" geometry={nodes.mesh66998423002_2.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_3" geometry={nodes.mesh66998423002_3.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_4" geometry={nodes.mesh66998423002_4.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_5" geometry={nodes.mesh66998423002_5.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_6" geometry={nodes.mesh66998423002_6.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_7" geometry={nodes.mesh66998423002_7.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_8" geometry={nodes.mesh66998423002_8.geometry} material={textureMaterial} />
          <mesh name="mesh66998423002_9" geometry={nodes.mesh66998423002_9.geometry} material={textureMaterial} />
        </group>
    </group>
  )
}

useGLTF.preload('models/scene.gltf');
useTexture.preload('textures/baked.jpg');

