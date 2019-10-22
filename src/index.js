const D = require('Diagnostics');
const R = require('Reactive');
const Shaders = require('Shaders');
const Materials = require('Materials');

import { filteredTexture as chuckCloseEffect } from './chuckclose';
import { filteredTexture as redEffect } from './redeffect';

const mat = Materials.get("material0");
const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE

mat.setTexture(R.mul(chuckCloseEffect,redEffect), {textureSlotName: textureSlot});

