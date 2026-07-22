import { Quaternion } from "../Basic Types/Quaternion";
import { Vector3 } from "../Basic Types/Vector3";
import { Entity } from "../Entity";


export type PlayAudioOptions = {
  volume: number,
  pitch: number,
  maxDistance: number,
  unitSize: number,
}

export const PlayAudio = {
  atPos: playAudioAtPos,
  global: playAudioGlobal,
}


function playAudioAtPos(filePath: string, pos: Vector3, options: Partial<PlayAudioOptions>) {
  playAudioAtPosInternal(filePath, pos, options, true);
}

function playAudioGlobal(filePath: string, options: Partial<PlayAudioOptions>) {
  playAudioAtPosInternal(filePath, Vector3.zero, options, false);
}


function playAudioAtPosInternal(filePath: string, pos: Vector3, options: Partial<PlayAudioOptions>, isSpatial: boolean) {
  const musicEntity = new Entity(pos, Quaternion.one, Vector3.one, undefined, 'Empty');
  const audioID = Godot.node.create.audio(musicEntity.nodeID ?? -1, isSpatial);

  if (audioID) {
    const didSet = Godot.node.audio.stream.setFromFilePath(audioID, filePath);

    if (didSet) {
      Godot.node.audio.volume.set(audioID,  options.volume ?? -6);
      Godot.node.audio.pitch.set(audioID,  options.pitch ?? 1);
      Godot.node.audio.maxDistance.set(audioID, options.maxDistance ?? 16);
      Godot.node.audio.unitSize.set(audioID, options.unitSize ?? 5);
    
      Godot.node.audio.playFromStart(audioID);
    }
  }
}