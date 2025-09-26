---
title: "Hillside Generation"
timeline: Dec 2024 - Feb 2025
category: PCG
role: Sole Developer
main_video: https://assets.sonniesun.com/p08_main.mp4
main_img: https://assets.sonniesun.com/p08_00.png
main_img_alt: hillside environment image
overview: Hillside Generation explores procedural content generation (PCG) in Unreal Engine to create natural environments such as rocky cliffs, dense forests, and roadside vegetation. The project focuses on developing custom PCG tools—for rocks, forests, and multi-layer foliage—that automate repetitive environment building tasks while maintaining artistic control.
technologies: ["Unreal Engine 5.4"]
img_type: 1
img1: https://assets.sonniesun.com/p08_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p08_02.png
img2_alt: img2
img3: https://assets.sonniesun.com/p08_03.png
img3_alt: img3
img4: https://assets.sonniesun.com/p08_04.png
img4_alt: img4
img5: https://assets.sonniesun.com/p08_05.png
img5_alt: img5
img6: https://assets.sonniesun.com/p08_06.png
img6_alt: img6
---

## Project Overview

Hillside Generation explores procedural content generation (PCG) in Unreal Engine to create natural environments such as rocky cliffs, dense forests, and roadside vegetation. The project focuses on developing custom PCG tools—for rocks, forests, and multi-layer foliage—that automate repetitive environment building tasks while maintaining artistic control. By combining blueprint-driven randomization, spline-based placement, and Niagara effects, the project achieves scalable scene generation that remains visually diverse and efficient.

## Technical Breakdown

### 01 Rock Generation Tool
Challenge: Placing large numbers of rocks manually is inefficient and repetitive.

<img src="https://assets.sonniesun.com/p08_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_02.png" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Built an automated rock generation tool that randomizes position, rotation, and scale within set ranges.
- Introduced a public length parameter to extend rock formations, enabling the rapid creation of continuous cliffside structures.

### 02 Forest Generation Tool

<img src="https://assets.sonniesun.com/p08_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_04.png" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Generated dense forests while maintaining natural variation and respecting scene constraints.
- Designed a forest tool with scatter placement that automatically spawns tall trees, moss, and small rocks.
- Integrated spline-based road definition so the system avoids placing trees along paths.

### 03 Multi-Layer Foliage Tool
Challenge: Large-scale foliage placement often creates visible repetition.

<img src="https://assets.sonniesun.com/p08_c_05.png" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_07.png" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Created a multi-layer foliage tool with spline-controlled areas. 
- Randomized the shape, position, rotation, and scale of primary, mid-layer, and ground plants, ensuring natural variety in large-scale generation.

### 04 Cliff Scene Assembly

<img src="https://assets.sonniesun.com/p08_c_08.png" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 800px); height: auto;" />

-  Used cubes as placeholders to block out near, secondary, and distant rock positions.

<img src="https://assets.sonniesun.com/p08_c_09.png" alt="Markdown Pic 09" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Replaced them with auto-generated assets. 

<img src="https://assets.sonniesun.com/p08_c_10.png" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_11.png" alt="Markdown Pic 11" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_12.png" alt="Markdown Pic 12" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Added vegetation, adjusted lighting and fog, and refined the overall atmosphere.
- Built a visually convincing cliffside environment with depth.

### 05 Forest Scene Assembly
Challenge: Ensuring large-scale forest placement feels cohesive.

<img src="https://assets.sonniesun.com/p08_c_13.png" alt="Markdown Pic 13" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Blocked out height ranges with cylinders.

<img src="https://assets.sonniesun.com/p08_c_14.png" alt="Markdown Pic 14" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Generated full forests using the PCG forest tool to match the predefined zones.

### 06 Roadside Driving Scene
- Created a dynamic scene with both natural detail and vehicle integration.

<img src="https://assets.sonniesun.com/p08_c_15.png" alt="Markdown Pic 15" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_16.png" alt="Markdown Pic 16" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Defined car and road positions with geometric placeholders

<img src="https://assets.sonniesun.com/p08_c_17.png" alt="Markdown Pic 17" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Auto-generated surrounding vegetation

<img src="https://assets.sonniesun.com/p08_c_18.png" alt="Markdown Pic 18" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Added small details (branches, rocks, moss) to enhance ground realism.

### 07 Debris Splash Effects
- Implemented a Niagara system to simulate branches and pebbles scattering as the car’s tires roll over them, adding a dynamic, physical layer to the environment.

<img src="https://assets.sonniesun.com/p08_c_19.png" alt="Markdown Pic 19" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p08_c_20.gif" alt="Markdown Pic 20" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Enhanced immersion in the driving scene.

## Takeaways
1. Gained practical experience in procedural content generation for natural environments.
2. Learned to design custom PCG tools that balance automation with artistic control.
3. Developed efficient workflows for cliff, forest, and road scene assembly using blueprint-driven generation.
4. Strengthened skills in spline-based placement, randomized asset variation, and atmosphere refinement.
5. Explored the integration of VFX (Niagara) with PCG workflows to bring environments to life dynamically.
