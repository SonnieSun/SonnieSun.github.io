---
title: "Lost"
timeline: Feb 2025 - Apr 2025
category: Game
role: Sole Developer
main_video: https://assets.sonniesun.com/p09_main.mp4
main_img: https://assets.sonniesun.com/p05_03.png
main_img_alt: game demo image
overview: Lost is a first-person horror shooter demo developed in Unreal Engine, focusing on immersive atmosphere and interactive gameplay. The project combines core FPS mechanics—movement, aiming, shooting, reloading—with horror storytelling elements such as eerie lighting, sudden interactions, and atmospheric sound design.
technologies: ["Unreal Engine 5.4", "Maya", "Cinema4D"]
img1: https://assets.sonniesun.com/p09_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p09_02.png
img2_alt: img2
img3: https://assets.sonniesun.com/p09_03.png
img3_alt: img3
img4: https://assets.sonniesun.com/p09_04.png
img4_alt: img4
img5: https://assets.sonniesun.com/p09_05.png
img5_alt: img5
img6: https://assets.sonniesun.com/p09_06.png
img6_alt: img6
---

## Project Overview

Lost is a first-person horror shooter demo developed in Unreal Engine, focusing on immersive atmosphere and interactive gameplay. The project combines core FPS mechanics—movement, aiming, shooting, reloading—with horror storytelling elements such as eerie lighting, sudden interactions, and atmospheric sound design. By integrating post-processing effects, dynamic enemy AI, and environment-driven scares, the demo creates a cohesive experience blending action gameplay with psychological tension.

## Technical Breakdown

### 01 Building the First-Person Framework

<img src="https://assets.sonniesun.com/p09_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Established a smooth and responsive first-person system with basic weapon mechanics.

<img src="https://assets.sonniesun.com/p09_c_02.png" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Implemented a first-person character blueprint and animation state machine to support walking, running, aiming, shooting, and reloading with corresponding animations.

### 02 Simulating Weapon Feedback

<img src="https://assets.sonniesun.com/p09_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Conveyed impactful shooting through visual and gameplay feedback.
- Added camera shake for recoil to simulate realistic hit feedback.

<img src="https://assets.sonniesun.com/p09_c_04.png" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 800px); height: auto;" />

- designed a bullet blueprint with velocity and damage properties.

### 03 Enemy Behavior Implementation

<img src="https://assets.sonniesun.com/p09_c_05.png" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed AI that reacts believably to player actions.
- Developed enemy logic with health bars, death detection, and animations

<img src="https://assets.sonniesun.com/p09_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 500px); height: auto;" />

- Developed vision-based detection that triggers pursuit and attack behaviors.

### 04 Environment Design

<img src="https://assets.sonniesun.com/p09_c_07.png" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p09_c_08.png" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Created a frightening yet coherent environment.

<img src="https://assets.sonniesun.com/p09_c_09.png" alt="Markdown Pic 09" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p09_c_10.png" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p09_c_11.png" alt="Markdown Pic 11" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Used hospital-horror assets to construct a Chinese-style apartment.
- Refined with lighting, decals, and adjusted materials for a unified dilapidated look and oppressive atmosphere.

### 05 Post-Processing Effects
- Enhanced immersion with horror-style visual distortions, using both material shaders and C++ code, finalizing a layered post-processing pipeline.

<img src="https://assets.sonniesun.com/p09_c_12.png" alt="Markdown Pic 12" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed camera-based blur effects.

<img src="https://assets.sonniesun.com/p09_c_13.png" alt="Markdown Pic 13" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed camera-based fisheye effects.

<img src="https://assets.sonniesun.com/p09_c_14.png" alt="Markdown Pic 14" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed camera-based vignette effects.

<img src="https://assets.sonniesun.com/p09_c_15.png" alt="Markdown Pic 15" style="display: block; max-width: min(100%, 800px); height: auto;" />


### 06 Interactive Horror Events

<img src="https://assets.sonniesun.com/p09_c_16.gif" alt="Markdown Pic 16" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Added unpredictable, atmospheric scares.

<img src="https://assets.sonniesun.com/p09_c_17.gif" alt="Markdown Pic 17" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Implemented interactions such as lights flickering or turning red, doll drops, doors slamming, and flashlight strobing during encounters, heightening tension.

### 07 User Interface

<img src="https://assets.sonniesun.com/p09_c_18.png" alt="Markdown Pic 18" style="display: block; max-width: min(100%, 200px); height: auto;" />

- Integrated enemy health bars.

<img src="https://assets.sonniesun.com/p09_c_19.png" alt="Markdown Pic 19" style="display: block; max-width: min(100%, 200px); height: auto;" />

- Integrated flashlight toggle prompts.

### 08 Sound Design
- Aligned audio cues with both action and horror pacing.

<img src="https://assets.sonniesun.com/p09_c_20.png" alt="Markdown Pic 20" style="display: block; max-width: min(100%, 200px); height: auto;" />

- Used Animation Notifies for precise timing of shooting sounds

<img src="https://assets.sonniesun.com/p09_c_21.png" alt="Markdown Pic 21" style="display: block; max-width: min(100%, 200px); height: auto;" />

- Used blueprint Play Sound functions for environmental interactions.

### 09 Packaging & Deployment

<img src="https://assets.sonniesun.com/p09_c_22.png" alt="Markdown Pic 22" style="display: block; max-width: min(100%, 300px); height: auto;" />

- Delivered a standalone playable demo.
- Successfully packaged the project using Unreal Engine’s Package Project tool to produce a functional executable.

## Takeaways
1. Strengthened ability to design FPS gameplay systems, from character controllers to weapon mechanics.
2. Learned to balance horror atmosphere with interactive gameplay, ensuring both tension and playability.
3. Gained practical experience in AI behavior scripting, environment storytelling, and post-processing effects.
4. Improved workflow for integrating sound, VFX, and UI into a unified experience.
5. Completed the full pipeline of a demo production, including packaging and deployment, which provided insight into preparing game projects for distribution.
