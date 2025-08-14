#!/usr/bin/env node

import { generateColorRampWithCurve, colorUtils, utils } from "rampensau";

const hueList = utils.scaleSpreadArray(
	colorUtils.colorHarmonies.splitComplementary(180),
	6,
);

const ramp = generateColorRampWithCurve({
	hueList,
	sRange: [0.05, 0.55],
	lRange: [0.2, 1],
	curveAccent: 0.05,
	curveMethod: "lamé",
});

const [black, darkBlue, purple, pink, lightBlue, white] = ramp.map(
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
