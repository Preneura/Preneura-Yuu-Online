import { Color } from "./Yuu API/Basic Types/Color";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { SkyDome } from "./Yuu API/SkyDome";
import { Entity } from "./Yuu API/Entity";

registerStart(start);

function start() {
    inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));

    console.log("Welcome to Yuu Online!");

SkyDome.skyMaterial.setProceduralSkyMaterial(
    new Color(0.002, 0.004, 0.015), // Near-black upper sky
    new Color(0.025, 0.015, 0.07),  // Deep blue-purple horizon
    0.35,
    new Color(0.003, 0.003, 0.008), // Near-black below
    new Color(0.12, 0.025, 0.008),  // Very subtle orange-red horizon
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

    // Back feature wall
spawnPrimitive.cube(
    new Vector3(0, 2.25, -6.82),
    new Vector3(7.8, 4, 0.12),
    Quaternion.one,
    new Color(0.015, 0.015, 0.025),
    1,
    true,
    "Static",
    undefined
);
    // Feature wall orange border - left
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

// Feature wall orange border - right
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

// Feature wall orange border - top
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

// Feature wall orange border - bottom
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
    
    // Metaverse Inspired back-wall text test
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
}
