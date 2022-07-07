import React, {useRef, useEffect} from "react";
import { ReactThreeFiber, Canvas, useFrame, extend, useThree, useLoader } from 'react-three-fiber';
import * as THREE from 'three';




const Bulb = (props) => {

  const ref = useRef();
  const {scene} = useThree();

  useEffect(()=> {
    if (scene.lights) {
      scene.lights.push(ref)
    } else {
      scene.lights = [ref]
    }
  })

  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        intensity={1}
        shadow-mapSize-height = {2**10}
        shadow-mapSize-width = {2**10}
        shadow-radius = {10}
        transparent
        opacity={1}
        />
      <sphereBufferGeometry args={[0.2,20,20]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export default Bulb;