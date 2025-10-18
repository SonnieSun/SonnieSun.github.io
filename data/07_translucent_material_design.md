---
title: "Translucent Material Design"
timeline: Oct 2024
category: Rendering
role: Sole Developer
main_video: https://assets.sonniesun.com/p07_main.mp4
main_img: https://assets.sonniesun.com/p07_lantern_03.png
main_img_alt: translucent material image
overview: his project explores the design and implementation of various subsurface scattering (SSS) materials within Unreal Engine. Materials such as skin, jade, rubber, leaves, candles, lanterns, and crystals share the unique property of being translucent—allowing light to scatter beneath the surface while remaining opaque in form.
technologies: ["Unreal Engine 5.1"]
img_type: 1
img1: https://assets.sonniesun.com/p07_crystal_02.png
img1_alt: img1
img2: https://assets.sonniesun.com/p07_lantern_02.png
img2_alt: img2
img3: https://assets.sonniesun.com/p07_candle_02.png
img3_alt: img3
img4: https://assets.sonniesun.com/p07_jade_01.png
img4_alt: img4
img5: https://assets.sonniesun.com/p07_candle_01.png
img5_alt: img5
img6: https://assets.sonniesun.com/p07_lantern_01.png
img6_alt: img6
---

## Project Overview

This project explores the design and implementation of various subsurface scattering (SSS) materials within Unreal Engine. Materials such as skin, jade, rubber, leaves, candles, lanterns, and crystals share the unique property of being translucent—allowing light to scatter beneath the surface while remaining opaque in form. To achieve these effects, I compared and applied two shading models: Subsurface, which provides a quick solution without requiring extra assets, and Subsurface Profile, which enables finer control for subtle translucency, such as candle wax and human skin.

## Technical Breakdown

### 01 Understanding SSS Materials
Different SSS materials behave differently, requiring accurate visual representation.

<img src="https://assets.sonniesun.com/p07_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Experimented with both Subsurface and Subsurface Profile shading models to balance performance and visual quality, selecting the most suitable approach for each material type.

### 02 Candle Material
Reproducing the warm, glowing translucency of wax.

<img src="https://assets.sonniesun.com/p07_c_02.png" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 600px); height: auto;" />

- Integrated color and normal maps

<img src="https://assets.sonniesun.com/p07_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Fine-tuned Subsurface Profile parameters to control scattering color and depth, simulating realistic candle wax thickness.

### 03 Lantern Material
Creating controllable variations in lantern translucency.

<img src="https://assets.sonniesun.com/p07_c_04.png" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Implemented Subsurface Color parameters and exposed them for easy adjustment of translucency color and UV mapping during scene setup.

### 04 Jade Material
Achieving the layered, multi-tonal green typical of jade.

<img src="https://assets.sonniesun.com/p07_c_05.png" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p07_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p07_c_07.png" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Combined Base Color, Normal, and Subsurface maps with baked vertex colors, using them as masks to simulate subtle color shifts in creases and surface details.

### 05 Crystal Material
Simulating realistic transparency and internal light scattering.

<img src="https://assets.sonniesun.com/p07_c_08.png" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 600px); height: auto;" />

- Defined Index of Refraction (IOR) and roughness maps

<img src="https://assets.sonniesun.com/p07_c_09.png" alt="Markdown Pic 09" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p07_c_10.png" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Created a smooth gradient of transparency, enhancing the crystal’s refractive and luminous quality.


## Takeaways

1. Gained a deeper understanding of how Subsurface vs. Subsurface Profile shaders differ, and when to apply each.
2. Developed workflows for simulating realistic translucency across multiple material types, from organic (jade, skin, wax) to inorganic (crystals).
3. Learned how to balance aesthetic fidelity and performance in translucent material rendering.
4. Enhanced ability to fine-tune parameters and expose controls, ensuring reusability and flexibility across different assets and scenes.