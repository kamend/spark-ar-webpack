const D = require('Diagnostics');
const R = require('Reactive');
const Shaders = require('Shaders');
const Materials = require('Materials');

import { ChuckClose} from './chuckclose';
import { filteredTexture as redEffect } from './redeffect';

const mat = Materials.get("material0");
const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE

mat.setTexture(R.mul(ChuckClose(32,4,"material0", "cameraTexture0"),redEffect), {textureSlotName: textureSlot});

