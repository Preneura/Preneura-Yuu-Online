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
import { grabbable } from "./Yuu API/Grabbable";

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
    
    const gatewayDoor = spawnPrimitive.cube(
        new Vector3(0, 1.75, -6.75),
        new Vector3(3.25, 3.50, 0.08),
        Quaternion.one,
        new Color(0.01, 0.015, 0.025),
        1,
        true,
        "Static",
        undefined
    );
    
    gatewayDoor.mesh.material.emissionColor.set(
        new Color(0.02, 0.08, 0.18)
    );
    
    gatewayDoor.mesh.material.emissionStrength.set(1.5);
    
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
    brandText.visible.set(false);
    
    const enterButton = spawnPrimitive.cube(
        new Vector3(-2.45, 1.25, -6.65),
        new Vector3(1.6, 0.45, 0.12),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        true,
        "Static",
        undefined
    );
    
    const enterButtonText = new Entity(
        new Vector3(-2.45, 1.25, -6.58),
        Quaternion.one,
        new Vector3(0.10, 0.10, 0.10),
        undefined,
        "Static"
    );
    
    enterButtonText.text.create(
        "ENTER THE METAVERSE",
        14,
        1
    );
    
    enterButtonText.text.color.set(
        new Color(0.02, 0.02, 0.025)
    );
    
    enterButtonText.text.doubleSided.set(true);
            
    const welcomeText = new Entity(
        new Vector3(-2.45, 1.70, -6.58),
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
    
        gatewayDoor.visible.set(false);
        gatewayDoor.collidable.set(false);
    
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

        energyCore.mesh.material.metallic.set(0.75);
        energyCore.mesh.material.roughness.set(0.15);
    
        energyCore.mesh.material.emissionColor.set(
            new Color(0.08, 0.25, 1)
        );
    
        energyCore.mesh.material.emissionStrength.set(4);  
        
        const energyShell = spawnPrimitive.sphere(
            48,
            32,
            new Vector3(0, 2.5, -10),
            2.15,
            Quaternion.one,
            new Color(0.08, 0.20, 1),
            0.18,
            "None",
            "Static",
            undefined
        );
    
        energyShell.mesh.material.emissionColor.set(
            new Color(0.03, 0.12, 1)
        );
    
        energyShell.mesh.material.emissionStrength.set(2);
        
        energyShell.mesh.material.metallic.set(0.25);
        energyShell.mesh.material.roughness.set(0.15);
    
        const energyShellShader = `
        shader_type spatial;
    
        render_mode unshaded, cull_disabled;
    
        void fragment() {
            float pulse = sin(TIME * 2.5) * 0.5 + 0.5;
    
        float waves =
            sin(UV.y * 35.0 + TIME * 3.0) *
            sin(UV.x * 25.0 - TIME * 2.0);
    
        waves = waves * 0.5 + 0.5;
    
        vec3 deepBlue = vec3(0.01, 0.05, 0.35);
        vec3 cyan = vec3(0.0, 0.85, 1.0);
    
        vec3 energyColor =
            mix(deepBlue, cyan, waves);
    
        energyColor += cyan * pulse * 0.25;
    
        ALBEDO = energyColor;
        EMISSION = energyColor * 1.8;
    
        ALPHA = 0.30 + waves * 0.25;
    }
    `;
    
        energyShell.mesh.shader.set(energyShellShader);
    
        const energyNodeLeft = spawnPrimitive.sphere(
            32,
            20,
            new Vector3(-1.65, 2.5, -10),
            0.28,
            Quaternion.one,
            new Color(0.05, 0.35, 1),
            1,
            "None",
            "Static",
            undefined
        );
    
        energyNodeLeft.mesh.material.emissionColor.set(
            new Color(0.05, 0.35, 1)
        );
    
        energyNodeLeft.mesh.material.emissionStrength.set(5);
    
        const energyNodeRight = spawnPrimitive.sphere(
            32,
            20,
            new Vector3(1.65, 2.5, -10),
            0.28,
            Quaternion.one,
            new Color(0.05, 0.35, 1),
            1,
            "None",
            "Static",
            undefined
        );
    
        energyNodeRight.mesh.material.emissionColor.set(
            new Color(0.05, 0.35, 1)
        );
    
        energyNodeRight.mesh.material.emissionStrength.set(5);
    
        const energyNodeShader = `
        shader_type spatial;
        
        render_mode unshaded;
        
        void fragment() {
        
            float pulse =
                sin(TIME * 4.0) * 0.5 + 0.5;
        
            float wave =
                sin(UV.y * 18.0 - TIME * 5.0) * 0.5 + 0.5;
        
            vec3 deepBlue =
                vec3(0.01, 0.10, 0.45);
    
            vec3 cyan =
                vec3(0.0, 1.0, 1.0);
        
            vec3 finalColor =
                mix(deepBlue, cyan, wave);
        
            finalColor +=
                cyan * pulse * 0.45;
        
            ALBEDO = finalColor;
        
            EMISSION =
                finalColor * (1.8 + pulse);
        }
        `;
    
        energyNodeLeft.mesh.shader.set(
            energyNodeShader
        );
    
        energyNodeRight.mesh.shader.set(
            energyNodeShader
        );
        const phase2Walkway = spawnPrimitive.cube(
            new Vector3(0, 0.10, -7),
            new Vector3(3.0, 0.25, 4.0),
            Quaternion.one,
            new Color(0.018, 0.022, 0.035),
            1,
            true,
            "Static",
            undefined
        );
    
        phase2Walkway.mesh.material.metallic.set(0.65);
        phase2Walkway.mesh.material.roughness.set(0.25);
    
        const energyChamberFloor = spawnPrimitive.cube(
            new Vector3(0, 0.10, -14),
            new Vector3(10, 0.25, 10),
            Quaternion.one,
            new Color(0.012, 0.016, 0.028),
            1,
            true,
            "Static",
            undefined
        );
    
        energyChamberFloor.mesh.material.metallic.set(0.75);
        energyChamberFloor.mesh.material.roughness.set(0.22);
    
        const energyFloorShader = `
        shader_type spatial;
        
        render_mode unshaded;
        
        void fragment() {
    
        vec2 centeredUV = UV - vec2(0.5);
    
        float distanceFromCenter = length(centeredUV);
    
        float rings =
            sin(distanceFromCenter * 65.0 - TIME * 3.0);
    
        rings = smoothstep(0.72, 1.0, rings);
    
        vec3 darkFloor = vec3(0.005, 0.012, 0.025);
    
        vec3 cyanEnergy = vec3(0.0, 0.75, 1.0);
    
        float fade =
            1.0 - smoothstep(0.05, 0.70, distanceFromCenter);
    
        vec3 finalColor =
            darkFloor +
            cyanEnergy * rings * fade * 0.75;
    
        ALBEDO = finalColor;
    
        EMISSION =
            cyanEnergy * rings * fade * 1.4;
    }
    `;
    
        energyChamberFloor.mesh.shader.set(
            energyFloorShader
        );
        
        const chamberEdgeLeft = spawnPrimitive.cube(
            new Vector3(-4.85, 0.28, -14),
            new Vector3(0.08, 0.07, 9.7),
            Quaternion.one,
            new Color(0.0, 0.65, 1.0),
            1,
            false,
            "Static",
            undefined
        );
    
        chamberEdgeLeft.mesh.material.emissionColor.set(
            new Color(0.0, 0.65, 1.0)
        );
        chamberEdgeLeft.mesh.material.emissionStrength.set(5);
    
    
        const chamberEdgeRight = spawnPrimitive.cube(
            new Vector3(4.85, 0.28, -14),
            new Vector3(0.08, 0.07, 9.7),
            Quaternion.one,
            new Color(0.0, 0.65, 1.0),
            1,
            false,
            "Static",
            undefined
        );
    
        chamberEdgeRight.mesh.material.emissionColor.set(
            new Color(0.0, 0.65, 1.0)
        );
        chamberEdgeRight.mesh.material.emissionStrength.set(5);
        
        const chamberEdgeBack = spawnPrimitive.cube(
            new Vector3(0, 0.28, -18.85),
            new Vector3(9.7, 0.07, 0.08),
            Quaternion.one,
            new Color(0.0, 0.65, 1.0),
            1,
            false,
            "Static",
            undefined
        );
        
        chamberEdgeBack.mesh.material.emissionColor.set(
            new Color(0.0, 0.65, 1.0)
        );
        chamberEdgeBack.mesh.material.emissionStrength.set(5);
    
        function createEnergyPylon(x: number, z: number) {
    
        const body = spawnPrimitive.cube(
            new Vector3(x, 2.25, z),
            new Vector3(0.45, 4.0, 0.45),
            Quaternion.one,
            new Color(0.012, 0.016, 0.025),
            1,
            true,
            "Static",
            undefined
        );
    
        body.mesh.material.metallic.set(0.85);
        body.mesh.material.roughness.set(0.18);
    
        const energyStrip = spawnPrimitive.cube(
            new Vector3(x, 2.25, z - 0.24),
            new Vector3(0.12, 3.35, 0.04),
            Quaternion.one,
            new Color(0.0, 0.75, 1.0),
            1,
            false,
            "Static",
            undefined
        );
    
        energyStrip.mesh.material.emissionColor.set(
            new Color(0.0, 0.75, 1.0)
        );
    
        energyStrip.mesh.material.emissionStrength.set(6);
    
        const crown = spawnPrimitive.sphere(
            24,
            16,
            new Vector3(x, 4.45, z),
            0.38,
            Quaternion.one,
            new Color(0.0, 0.75, 1.0),
            1,
            "None",
            "Static",
            undefined
        );
    
        crown.mesh.material.emissionColor.set(
            new Color(0.0, 0.75, 1.0)
        );
    
        crown.mesh.material.emissionStrength.set(5);
    }
    
        createEnergyPylon(-3.2, -8.2);
        createEnergyPylon(3.2, -8.2);
        
        createEnergyPylon(-3.2, -12.0);
        createEnergyPylon(3.2, -12.0);
    
        const energySpireShader = `
        shader_type spatial;
        
        render_mode unshaded, cull_disabled;
        
        void fragment() {
            float pulse = sin(TIME * 3.0 + UV.y * 10.0) * 0.5 + 0.5;
        
            float energy =
                sin(UV.y * 30.0 - TIME * 4.0) * 0.5 + 0.5;
        
            vec3 deepBlue = vec3(0.01, 0.08, 0.35);
            vec3 cyan = vec3(0.0, 0.95, 1.0);
        
            vec3 finalColor =
                mix(deepBlue, cyan, energy);
        
            finalColor += cyan * pulse * 0.30;
        
            ALBEDO = finalColor;
            EMISSION = finalColor * 2.2;
        }
        `;
        function createEnergySpire(x: number, z: number) {
    
        const spire = spawnPrimitive.cone(
            6,
            new Vector3(x, 5.35, z),
            0.85,
            Quaternion.one,
            new Color(0.0, 0.75, 1.0),
            1,
            "None",
            "Static",
            undefined
        );
    
        spire.scale = new Vector3(
            0.55,
            2.2,
            0.55
        );
    
        spire.mesh.material.emissionColor.set(
            new Color(0.0, 0.75, 1.0)
        );
    
        spire.mesh.material.emissionStrength.set(5);
    
        spire.mesh.material.metallic.set(0.35);
        spire.mesh.material.roughness.set(0.12);
        spire.mesh.shader.set(energySpireShader);
    }
    
        createEnergySpire(-3.2, -8.2);
        createEnergySpire(3.2, -8.2);
        
        createEnergySpire(-3.2, -12.0);
        createEnergySpire(3.2, -12.0);
        
        const walkwayLightLeft = spawnPrimitive.cube(
            new Vector3(-1.43, 0.28, -7),
            new Vector3(0.06, 0.06, 4.0),
            Quaternion.one,
            new Color(0.05, 0.25, 1),
            1,
            false,
            "Static",
            undefined
        );
    
        walkwayLightLeft.mesh.material.emissionColor.set(
            new Color(0.05, 0.25, 1)
        );
        
        walkwayLightLeft.mesh.material.emissionStrength.set(4);
        
        const walkwayLightRight = spawnPrimitive.cube(
            new Vector3(1.43, 0.28, -7),
            new Vector3(0.06, 0.06, 4.0),
            Quaternion.one,
            new Color(0.05, 0.25, 1),
            1,
            false,
            "Static",
            undefined
        );
    
        walkwayLightRight.mesh.material.emissionColor.set(
            new Color(0.05, 0.25, 1)
        );
        
        walkwayLightRight.mesh.material.emissionStrength.set(4);
       
        const haloShader = `
        shader_type spatial;
        
        render_mode unshaded;
        
        void fragment() {
        
            float pulse =
                sin(TIME * 4.0 + UV.y * 12.0) * 0.5 + 0.5;
        
            vec3 blue = vec3(0.02, 0.15, 0.65);
            vec3 cyan = vec3(0.0, 1.0, 1.0);
        
            vec3 finalColor =
                mix(blue, cyan, pulse);
        
            ALBEDO = finalColor;
            EMISSION = finalColor * 2.5;
        }
        `;
    
        const haloRadius = 3.0;
        const haloHeight = 5.8;
        const haloSegments = 20;
        
        for (let i = 0; i < haloSegments; i++) {
        
            const angle =
                (i / haloSegments) * Math.PI * 2;
        
            const x =
                Math.cos(angle) * haloRadius;
        
            const z =
                -10 + Math.sin(angle) * haloRadius;
        
            const haloPiece = spawnPrimitive.sphere(
                16,
                10,
                new Vector3(
                    x,
                    haloHeight,
                    z
                ),
                0.20,
                Quaternion.one,
                new Color(0.0, 0.8, 1.0),
                1,
                "None",
                "Static",
                undefined
            );
        
            haloPiece.mesh.shader.set(
                haloShader
            );
        }
    
        const energyCrystal = spawnPrimitive.cone(
            6,
            new Vector3(0, 1.25, -16.5),
            0.65,
            Quaternion.one,
            new Color(0.0, 0.85, 1.0),
            1,
            "Convex",
            "Physics",
            undefined
        );
    
        energyCrystal.scale = new Vector3(
            0.55,
            1.6,
            0.55
        );
        
        energyCrystal.mesh.material.emissionColor.set(
            new Color(0.0, 0.85, 1.0)
        );
        
        energyCrystal.mesh.material.emissionStrength.set(5);
    
        const energyCrystalShader = `
        shader_type spatial;
        
        render_mode unshaded, cull_disabled;
        
        void fragment() {
        
            float pulse =
                sin(TIME * 4.0) * 0.5 + 0.5;
        
            float flow =
                sin(UV.y * 25.0 - TIME * 5.0)
                * 0.5 + 0.5;
        
            vec3 blue =
                vec3(0.01, 0.08, 0.45);
        
            vec3 cyan =
                vec3(0.0, 1.0, 1.0);
        
            vec3 finalColor =
                mix(blue, cyan, flow);
        
            finalColor +=
                cyan * pulse * 0.35;
    
            ALBEDO = finalColor;
        
            EMISSION =
                finalColor * (2.0 + pulse);
        }
        `;
        
        energyCrystal.mesh.shader.set(
            energyCrystalShader
        );
    
        grabbable.make(
            energyCrystal,
            0.2,
            {
                onGrab: (hand) => {
                    console.log(
                        hand + " hand grabbed the Energy Crystal"
                    );
                },
        
                onRelease: (hand) => {
                    console.log(
                        hand + " hand released the Energy Crystal"
                    );
                }
            }
        );
       
    const crystalPedestalBase = spawnPrimitive.cylinder(
        32,
        new Vector3(0, 0.45, -16.5),
        1.35,
        Quaternion.one,
        new Color(0.012, 0.016, 0.028),
        1,
        true,
        "Static",
        undefined
    );
    
    crystalPedestalBase.scale = new Vector3(
        1.0,
        0.35,
        1.0
    );
    
    crystalPedestalBase.mesh.material.metallic.set(0.85);
    crystalPedestalBase.mesh.material.roughness.set(0.18);
        
    const pedestalEnergyRing = spawnPrimitive.cylinder(
        32,
        new Vector3(0, 0.72, -16.5),
        1.05,
        Quaternion.one,
        new Color(0.0, 0.75, 1.0),
        1,
        false,
        "Static",
        undefined
    );
    
    pedestalEnergyRing.scale = new Vector3(
        1.0,
        0.08,
        1.0
    );
    
    pedestalEnergyRing.mesh.material.emissionColor.set(
        new Color(0.0, 0.75, 1.0)
    );
    
    pedestalEnergyRing.mesh.material.emissionStrength.set(6);
        
    const crystalPedestalTop = spawnPrimitive.cylinder(
        32,
        new Vector3(0, 0.82, -16.5),
        0.78,
        Quaternion.one,
        new Color(0.018, 0.025, 0.045),
        1,
        true,
        "Static",
        undefined
    );
    
    crystalPedestalTop.scale = new Vector3(
        1.0,
        0.16,
        1.0
    );
    
    crystalPedestalTop.mesh.material.metallic.set(0.75);
    crystalPedestalTop.mesh.material.roughness.set(0.16);
    
    const pedestalNodePositions = [
        new Vector3(-0.85, 1.05, -16.5),
        new Vector3(0.85, 1.05, -16.5),
        new Vector3(0, 1.05, -15.65),
        new Vector3(0, 1.05, -17.35)
    ];
    
    for (const nodePosition of pedestalNodePositions) {
    
        const pedestalNode = spawnPrimitive.sphere(
            20,
            12,
            nodePosition,
            0.16,
            Quaternion.one,
            new Color(0.0, 0.85, 1.0),
            1,
            "None",
            "Static",
            undefined
        );
    
        pedestalNode.mesh.material.emissionColor.set(
            new Color(0.0, 0.85, 1.0)
        );
    
        pedestalNode.mesh.material.emissionStrength.set(5);

    const phase3GatewayLeft = spawnPrimitive.cube(
        new Vector3(-2.35, 2.6, -18.65),
        new Vector3(1.1, 4.8, 0.65),
        Quaternion.one,
        new Color(0.008, 0.012, 0.025),
        1,
        true,
        "Static",
        undefined
    );
    
    phase3GatewayLeft.mesh.material.metallic.set(0.85);
    phase3GatewayLeft.mesh.material.roughness.set(0.16);
    
    
    // Right gateway tower
    const phase3GatewayRight = spawnPrimitive.cube(
        new Vector3(2.35, 2.6, -18.65),
        new Vector3(1.1, 4.8, 0.65),
        Quaternion.one,
        new Color(0.008, 0.012, 0.025),
        1,
        true,
        "Static",
        undefined
    );
    
    phase3GatewayRight.mesh.material.metallic.set(0.85);
    phase3GatewayRight.mesh.material.roughness.set(0.16);
    
    
    // Gateway top beam
    const phase3GatewayTop = spawnPrimitive.cube(
        new Vector3(0, 5.0, -18.65),
        new Vector3(5.8, 0.55, 0.65),
        Quaternion.one,
        new Color(0.008, 0.012, 0.025),
        1,
        true,
        "Static",
        undefined
    );
    
    phase3GatewayTop.mesh.material.metallic.set(0.85);
    phase3GatewayTop.mesh.material.roughness.set(0.16);
    
    const phase3GlowLeft = spawnPrimitive.cube(
        new Vector3(-1.73, 2.65, -18.28),
        new Vector3(0.07, 4.15, 0.05),
        Quaternion.one,
        new Color(0.0, 0.85, 1.0),
        1,
        false,
        "Static",
        undefined
    );
    
    phase3GlowLeft.mesh.material.emissionColor.set(
        new Color(0.0, 0.85, 1.0)
    );
    
    phase3GlowLeft.mesh.material.emissionStrength.set(6);
    
    const phase3GlowRight = spawnPrimitive.cube(
        new Vector3(1.73, 2.65, -18.28),
        new Vector3(0.07, 4.15, 0.05),
        Quaternion.one,
        new Color(0.0, 0.85, 1.0),
        1,
        false,
        "Static",
        undefined
    );
    
    phase3GlowRight.mesh.material.emissionColor.set(
        new Color(0.0, 0.85, 1.0)
    );
    
    phase3GlowRight.mesh.material.emissionStrength.set(6);
    
    const phase3GlowTop = spawnPrimitive.cube(
        new Vector3(0, 4.68, -18.28),
        new Vector3(3.5, 0.07, 0.05),
        Quaternion.one,
        new Color(0.0, 0.85, 1.0),
        1,
        false,
        "Static",
        undefined
    );
    
    phase3GlowTop.mesh.material.emissionColor.set(
        new Color(0.0, 0.85, 1.0)
    );
    
    phase3GlowTop.mesh.material.emissionStrength.set(6);
}
