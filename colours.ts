#!/usr/bin/env node

import { generateColorRampWithCurve, colorUtils, utils } from "rampensau";

const colorRamp = generateColorRampWithCurve({
	hueList: utils.scaleSpreadArray(
		colorUtils.colorHarmonies.splitComplementary(180),
		6,
	),
	sRange: [0.05, 0.55],
	lRange: [0.2, 1],
	curveAccent: 0.05,
	curveMethod: "lamé",
});

const [black, darkBlue, purple, pink, lightBlue, white] = colorRamp.map(
	([h, s, l]) =>
		colorUtils.colorToCSS([colorUtils.harveyHue(h), s, l], "oklch"),
);

console.log({
	black,
	"dark-blue": darkBlue,
	purple,
	pink,
	"light-blue": lightBlue,
	white,
});

const grayRamp = generateColorRampWithCurve({
	hueList: utils.scaleSpreadArray(
		colorUtils.colorHarmonies.monochromatic(180),
		6,
	),
	sRange: [0, 1],
	lRange: [0.1, 0.9],
	curveAccent: 0,
	curveMethod: "lamé",
});

const [blackGray, darkGray, gray, lightGray, whiteGray] = grayRamp.map(
	([h, s, l]) =>
		colorUtils.colorToCSS([colorUtils.harveyHue(h), s, l], "oklch"),
);

console.log({
	blackGray,
	darkGray,
	gray,
	lightGray,
	whiteGray,
});
