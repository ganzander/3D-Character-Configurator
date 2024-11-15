import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useCharacterAnimations } from "../context/characterAnimationsContext";

export default function Woman(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/Woman-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);
  const { setAnimations, animationIndex } = useCharacterAnimations();

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group
          name="SM_Chr_Developer_Female_02"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <skinnedMesh
            castShadow
            name="Mesh019"
            geometry={nodes.Mesh019.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_1"
            geometry={nodes.Mesh019_1.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_1.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_2"
            geometry={nodes.Mesh019_2.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_2.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_3"
            geometry={nodes.Mesh019_3.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_3.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_4"
            geometry={nodes.Mesh019_4.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_4.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_5"
            geometry={nodes.Mesh019_5.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_5.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_6"
            geometry={nodes.Mesh019_6.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_6.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_7"
            geometry={nodes.Mesh019_7.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_7.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_8"
            geometry={nodes.Mesh019_8.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_8.skeleton}
          />
          <skinnedMesh
            castShadow
            name="Mesh019_9"
            geometry={nodes.Mesh019_9.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Mesh019_9.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Woman-transformed.glb");
