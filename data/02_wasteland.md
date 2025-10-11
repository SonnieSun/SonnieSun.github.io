---
title: "Wasteland"
timeline: Mar 2025 - Apr 2025
category: PCG
role: Sole Developer
main_video: https://assets.sonniesun.com/p02_main.mp4
main_img: https://assets.sonniesun.com/p02_00.png
main_img_alt: city layout image
overview: Wasteland is a procedural generation (PCG) project focused on creating a large-scale abandoned town environment. The goal was to design automated PCG tools for buildings, roads, moss, and vines, while also controlling atmosphere and mood through lighting, fog, and VFX.
technologies: ["Unreal Engine 5.4"]
img_type: 1
img1: https://assets.sonniesun.com/p02_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p02_02.png
img2_alt: img2
img3: https://assets.sonniesun.com/p02_03.png
img3_alt: img3
img4: https://assets.sonniesun.com/p02_04.png
img4_alt: img4
img5: https://assets.sonniesun.com/p02_05.png
img5_alt: img5
img6: https://assets.sonniesun.com/p02_06.png
img6_alt: img6
---

## Project Overview

Wasteland is a procedural generation (PCG) project focused on creating a large-scale abandoned town environment. The goal was to design automated PCG tools for buildings, roads, moss, and vines, while also controlling atmosphere and mood through lighting, fog, and VFX. By combining spline-based generation, randomization systems, and Niagara particle effects, the project simulates a ruined, oppressive environment that feels both expansive and immersive, suitable for cinematic or game-ready scenes.

## Technical Breakdown

### 01 Building Generation Tool

<img src="https://assets.sonniesun.com/p02_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_01_1.png" alt="Markdown Pic 01_1" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_02.png" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Used splines to define the outlines of outside and center zones.
- Secondary buildings were generated around the town perimeter

<img src="https://assets.sonniesun.com/p02_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_04.png" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_05.png" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />

- The central area was reserved for core structures
- PCG scatter placement ensured varied distribution while avoiding overlaps.
- Efficiently populated both outer and inner town areas while preserving visual hierarchy.

### 02 Road Generation Tool
- Created flexible roads that integrate with the environment without disrupting buildings unnaturally.

<img src="https://assets.sonniesun.com/p02_c_06_1.png" alt="Markdown Pic 06_1" style="display: block; max-width: min(100%, 500px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 500px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_06_2.png" alt="Markdown Pic 06_2" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_07.png" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Roads were spline-driven
- Built modular road segments as level assets
- Added adjustable parameters (amount and random seed of garbage, rocks, debris, vegetation).

<img src="https://assets.sonniesun.com/p02_c_08_1.png" alt="Markdown Pic 08_1" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_08.png" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_09_1.png" alt="Markdown Pic 09_1" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_09_2.png" alt="Markdown Pic 09_2" style="display: block; max-width: min(100%, 800px); height: auto;" />

- PCG ensured buildings avoided road intersections automatically.
- Generated foliage, destroyed cars, and broken street lamp around the road.

### 03 Moss Generation Tool

<img src="https://assets.sonniesun.com/p02_c_10.png" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_11.png" alt="Markdown Pic 11" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_11_1.png" alt="Markdown Pic 11_1" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Implemented a PCG moss system using Arrow components to determine the growing direction. 
- Moss would spawn on certain sides of buildings and rocks, creating naturalistic decay.
- Made environmental surfaces feel aged and weathered.
- Added adjustable parameters (scale, amount, and random seed of moss).

### 04 Vine Generation Tool

- Generated vines that follow architectural structures while looking organic.

<img src="https://assets.sonniesun.com/p02_c_12.png" alt="Markdown Pic 12" style="display: block; max-width: min(100%, 600px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_13.png" alt="Markdown Pic 13" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_13_1.png" alt="Markdown Pic 13_1" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Developed a vine tool driven by splines
- Randomized length, thickness, and hanging branches. 
- Large and small corner angles were handled differently to avoid unnatural bends, producing more believable growth patterns.

### 05 Base Layout & Camera Design

<img src="https://assets.sonniesun.com/p02_c_14.png" alt="Markdown Pic 14" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Used geometric primitives to block out the layout. 
- Chose a short focal length wide-angle camera, positioned low and tilted upward, framing central buildings on both sides to create an oppressive atmosphere.

### 06 Fog & Overcast Lighting

<img src="https://assets.sonniesun.com/p02_c_15.png" alt="Markdown Pic 15" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_16.png" alt="Markdown Pic 16" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Combined HDRI, Sky Light, Volumetric Fog, and a Directional Light to simulate an overcast, cloudy day. 
- This lighting design emphasized desolation and hopelessness, capturing the bleak mood of an abandoned settlement.
- Composed a cinematic town scene that conveys despair and scale.

### 07 Flock of Birds VFX

<img src="https://assets.sonniesun.com/p02_c_17.png" alt="Markdown Pic 17" style="display: block; max-width: min(100%, 500px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_18.png" alt="Markdown Pic 18" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p02_c_19.gif" alt="Markdown Pic 19" style="display: block; max-width: min(100%, 300px); height: auto;" />

- Created a Niagara particle system simulating circling flocks of birds, including wing-flapping animations
- Enhanced the sense of decay and emptiness through subtle environmental motion.

## Takeaways

1. Learned to design modular PCG tools for urban environments, including buildings, roads, moss, and vines.
2. Developed techniques for spline-based generation that balance automation with artistic intent.
3. Gained experience in environmental storytelling through composition, lighting, and fog.
4. Explored how Niagara particle effects can reinforce mood and immersion in procedural scenes.
5. Strengthened ability to create large-scale, cohesive environments with a strong cinematic atmosphere.
