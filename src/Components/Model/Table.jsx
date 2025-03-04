import { OrbitControls, Stage, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { useEffect } from "react";

export default function Table({
  colorTable,
  colorChair,
  colorPlate,
  textureTable,
}) {
  const model = useGLTF("./dining_scene.glb");

  model.scene.rotation.y = Math.PI / 2;

  const tx = useTexture("./map/1.jpg");

  model.scene.children[0].children[0].children[0].children[1].children[0].material.map =
    tx;
  model.scene.children[0].children[0].children[0].children[0].children[0].material.map =
    tx;

  let chairMaterial =
    model.scene.children[0].children[0].children[0].children[0].children[0]
      .material;
  const newColor = new THREE.Color(colorChair);

  useEffect(() => {
    gsap.to(chairMaterial.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
      duration: 2,
      ease: "linear",
    });
  }, [colorChair]);

  let tableMaterial =
    model.scene.children[0].children[0].children[0].children[1].children[0]
      .material;
  const newColorTable = new THREE.Color(colorTable);

  useEffect(() => {
    gsap.to(tableMaterial.color, {
      r: newColorTable.r,
      g: newColorTable.g,
      b: newColorTable.b,
      duration: 2,
      ease: "linear",
    });
  }, [colorTable]);

  let plateMaterial =
    model.scene.children[0].children[0].children[0].children[22].children[0]
      .material;
  const newColorPlate = new THREE.Color(colorPlate);

  useEffect(() => {
    gsap.to(plateMaterial.color, {
      r: newColorPlate.r,
      g: newColorPlate.g,
      b: newColorPlate.b,
      duration: 2,
      ease: "linear",
    });
  }, [colorPlate]);

  return (
    <>
      <OrbitControls makeDefault rotateSpeed={0.4} />
      <Stage environment="city" intensity={11}>
        <primitive object={model.scene} />
      </Stage>
    </>
  );
}
