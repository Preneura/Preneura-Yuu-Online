import { Color } from "./Yuu API/Basic Types/Color";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";

registerStart(start);

function start() {
    inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));

    console.log("Welcome to Yuu Online!");

    spawnPrimitive.cube(
        new Vector3(0, 0.5, -3),
        new Vector3(1, 1, 1),
        Quaternion.one,
        new Color(1, 0.4, 0),
        1,
        true,
        "Static",
        undefined
    );
    
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
        new Vector3(0.06, 0.12, 7.6),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(3.78, 0.42, -3),
        new Vector3(0.06, 0.12, 7.6),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );

    spawnPrimitive.cube(
        new Vector3(0, 0.42, -6.78),
        new Vector3(7.6, 0.12, 0.06),
        Quaternion.one,
        new Color(1, 0.25, 0),
        1,
        false,
        "Static",
        undefined
    );
}
