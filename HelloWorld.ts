import { Color } from "./Yuu API/Basic Types/Color";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { SkyDome } from "./Yuu API/SkyDome";
import { Entity } from "./Yuu API/Entity";
import { DefaultParticles } from "./Yuu API/Particles/DefaultParticles";
import { PlayParticles } from "./Yuu API/Particles/PlayParticles";

registerStart(start);

function start() {
    inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));

    console.log("Welcome to Yuu Online!");

SkyDome.skyMaterial.setProceduralSkyMaterial(
    new Color(0.002, 0.004, 0.015),
    new Color(0.025, 0.015, 0.07),
    0.35,
    new Color(0.003, 0.003, 0.008),
    new Color(0.12, 0.025, 0.008), 
    0.25
);

SkyDome.ambientLight.baseColor.set(
    new Color(0.35, 0.38, 0.48)
);

SkyDome.ambientLight.energy.set(0.65);

SkyDome.ambientLight.skyColorContribution.set(0.15);
    
    spawnPrimitive.cube(
        new Vector3(0, 0.10, -3),
        new Vector3(8, 0.3, 8),
        Quaternion.one,
        new Color(0.05, 0.05, 0.07),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(-3.9, 0.75, -3),
        new Vector3(0.2, 1, 8),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.9, 0.75, -3),
        new Vector3(0.2, 1, 8),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 0.75, -6.9),
        new Vector3(8, 1, 0.2),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(-3.78, 0.42, -3),
        new Vector3(0.06, 0.05, 7.6),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.78, 0.42, -3),
        new Vector3(0.06, 0.05, 7.6),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 0.42, -6.78),
        new Vector3(7.6, 0.05, 0.06),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(-3.65, 2.25, 0.65),
        new Vector3(0.5, 4, 0.5),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.65, 2.25, 0.65),
        new Vector3(0.5, 4, 0.5),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 4.15, 0.65),
        new Vector3(7.8, 0.4, 0.5),
        Quaternion.one,
        new Color(0.03, 0.03, 0.04),
        1,
        true,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(-3.38, 2.15, 0.65),
        new Vector3(0.04, 3.8, 0.08),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.38, 2.15, 0.65),
        new Vector3(0.04, 3.8, 0.08),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 3.91, 0.65),
        new Vector3(6.72, 0.04, 0.08),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    // ========================================
// PHASE 2 GATEWAY WALL
// ========================================

// Left side of feature wall
spawnPrimitive.cube(
    new Vector3(-2.75, 2.25, -6.82),
    new Vector3(2.3, 4, 0.12),
    Quaternion.one,
    new Color(0.015, 0.015, 0.025),
    1,
    true,
    "Static",
    undefined
);

// Right side of feature wall
spawnPrimitive.cube(
    new Vector3(2.75, 2.25, -6.82),
    new Vector3(2.3, 4, 0.12),
    Quaternion.one,
    new Color(0.015, 0.015, 0.025),
    1,
    true,
    "Static",
    undefined
);

// Top beam above gateway
spawnPrimitive.cube(
    new Vector3(0, 3.75, -6.82),
    new Vector3(3.2, 1, 0.12),
    Quaternion.one,
    new Color(0.015, 0.015, 0.025),
    1,
    true,
    "Static",
    undefined
);

    spawnPrimitive.cube(
        new Vector3(-3.35, 2.25, -6.74),
        new Vector3(0.035, 3.55, 0.04),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.35, 2.25, -6.74),
        new Vector3(0.035, 3.55, 0.04),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 4.01, -6.74),
        new Vector3(6.735, 0.035, 0.04),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 0.49, -6.74),
        new Vector3(6.735, 0.035, 0.04),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );
    
    const brandText = new Entity(
        new Vector3(0, 2.2, -6.75),
        Quaternion.one,
        new Vector3(0.70, 0.70, 0.70),
        undefined,
        "Static"
    );

    brandText.text.create(
        "METAVERSE INSPIRED",
        60,
        2
    );

    brandText.text.color.set(
        new Color(1, 0.25, 0)
    );

    brandText.text.outline.color.set(
        new Color(0, 0, 0)
    );

    brandText.text.doubleSided.set(true);

    const enterButton = spawnPrimitive.cube(
        new Vector3(0, 1.15, -6.65),
        new Vector3(2.4, 0.45, 0.12),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        true,
        "Static",
        undefined
    );

    const enterButtonText = new Entity(
        new Vector3(0, 1.15, -6.58),
        Quaternion.one,
        new Vector3(0.10, 0.10, 0.10),
        undefined,
        "Static"
    );

    enterButtonText.text.create(
        "ENTER THE METAVERSE",
        20,
        1
    );

    enterButtonText.text.color.set(
        new Color(0.02, 0.02, 0.025)
    );

    enterButtonText.text.doubleSided.set(true);
        
const welcomeText = new Entity(
    new Vector3(0, 1.65, -6.58),
    Quaternion.one,
    new Vector3(0.10, 0.10, 0.10),
    undefined,
    "Static"
);

welcomeText.text.create(
    "WELCOME TO METAVERSE INSPIRED",
    20,
    1
);

welcomeText.text.color.set(
    new Color(1, 0.25, 0)
);

welcomeText.text.outline.color.set(
    new Color(0, 0, 0)
);

welcomeText.text.doubleSided.set(true);

welcomeText.visible.set(false);
    enterButton.rayClick.initialize(false);

    enterButton.rayClick.setClickFunction(() => {
    console.log("Welcome to Metaverse Inspired!");

    enterButton.mesh.color.set(
    new Color(0.15, 0.15, 0.18),
    1
    );

    enterButtonText.text.display.set(
        "WELCOME"
    );

    welcomeText.visible.set(true);

        const orangeParticles =
            DefaultParticles.getColoredWaterFountainParticlesProperties(
            new Color(1, 0.25, 0)
    );

        PlayParticles.atPosForDuration(
            new Vector3(0, 0.5, -5.8),
            orangeParticles,
            3000
    );
});
     // ========================================
// PHASE 2 - ENERGY CORE
// ========================================

const energyCore = spawnPrimitive.sphere(
    48,
    32,
    new Vector3(0, 2.5, -10),
    1.5,
    Quaternion.one,
    new Color(0.12, 0.35, 1),
    1,
    "None",
    "Static",
    undefined
);

// Give the sphere a futuristic material
energyCore.mesh.material.metallic.set(0.75);
energyCore.mesh.material.roughness.set(0.15);

// Make the sphere self-illuminated
energyCore.mesh.material.emissionColor.set(
    new Color(0.08, 0.25, 1)
);

energyCore.mesh.material.emissionStrength.set(4);    
}
