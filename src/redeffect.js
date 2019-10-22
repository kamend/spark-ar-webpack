const D = require('Diagnostics');
const Scene = require('Scene');
const Shaders = require('Shaders');
const Materials = require("Materials");
const R = require("Reactive");
const CameraInfo = require('CameraInfo');
const Textures = require('Textures');
const Time = require('Time');

const mat = Materials.get("material0");
const cameraTexture = Textures.get("cameraTexture0");
const uvs = Shaders.fragmentStage(Shaders.vertexAttribute({'variableName': Shaders.VertexAttribute.TEX_COORDS}));


export const filteredTexture = R.pack4(1,0,0,1);