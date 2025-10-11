---
title: "Simple Bot Animation"
timeline: Aug 2025
category: Animation
role: Sole Developer
main_video: https://assets.sonniesun.com/p10_main.mp4
main_img: https://assets.sonniesun.com/p10_00.png
main_img_alt: animation screenshot
overview: SimpleBot focuses on creating a complete character animation system — from hand-keyed animation in Maya to in-engine implementation in Unreal Engine 5.
technologies: ["Unreal Engine 5.4", "Maya"]
img_type: 2
img1: https://assets.sonniesun.com/p10_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p10_02.png
img2_alt: img2
---

## Project Overview

SimpleBot focuses on creating a complete character animation system — from hand-keyed animation in Maya to in-engine implementation in Unreal Engine 5. The project covers the full workflow of producing core locomotion and idle animations, then integrating them into a functional gameplay prototype with animation states and player input logic. It serves as a foundational study in animation principles, state machines, and engine integration.

## Technical Breakdown

### 01 Walk Cycle Animation

<img src="https://assets.sonniesun.com/p10_c_01.jpg" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 600px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_02.gif" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Achieved a natural, rhythmic walk cycle.
- Created a keyframed walk cycle emphasizing leg swing motion and weight shift. Added body and head rotation to avoid stiffness and convey balance.

### 02 Run Cycle Animation

<img src="https://assets.sonniesun.com/p10_c_04.jpg" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 600px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_05.gif" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed a run cycle with stronger leg extensions and brief airborne phases to emphasize motion.
- Adjusted the animation curves in Maya for smoother momentum.

### 03 Sneak Movement

<img src="https://assets.sonniesun.com/p10_c_07.jpg" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 600px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_08.gif" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_09.png" alt="Markdown Pic 09" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Derived from the walk cycle but lowered the center of gravity and re-timed mid-step poses to give a cautious, deliberate feel.

### 04 Idle Animation I — Kick Motion

<img src="https://assets.sonniesun.com/p10_c_10_1.gif" alt="Markdown Pic 10_1" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_11_1.png" alt="Markdown Pic 11_1" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_10.gif" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_11.png" alt="Markdown Pic 11" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Animated a playful kick motion as a custom idle action, adding personality to the otherwise minimal robot design.
- Made idle poses feel dynamic and characterful.

### 05 Idle Animation II — Stretch Motion

<img src="https://assets.sonniesun.com/p10_c_12.gif" alt="Markdown Pic 12" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_13.png" alt="Markdown Pic 13" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Added variation to idle animations to prevent visual monotony.
- Created a stretching animation, incorporating upper-body rotation and leg extension for more organic movement.

### 06 Integration into Unreal Engine 5
- Linked all animations into a responsive gameplay system.

<img src="https://assets.sonniesun.com/p10_c_14.png" alt="Markdown Pic 14" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_15.png" alt="Markdown Pic 15" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Set up player input controls (walk, run, crouch, jump).

<img src="https://assets.sonniesun.com/p10_c_16.png" alt="Markdown Pic 16" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p10_c_17.png" alt="Markdown Pic 17" style="display: block; max-width: min(100%, 800px); height: auto;" />

-  Imported all animations and connected them through Animation Blueprints and a State Machine.
-  Used conditional checks in the Animation Blueprint (e.g., IsFalling, IsSneaking) to dynamically transition between states.
- Ensured animation blending for smooth transitions between movement types.


## Takeaways

1. Gained hands-on experience with the full animation pipeline from Maya to Unreal Engine.
2. Learned to design natural, stylized motion using keyframe animation and curve refinement.
3. Built a functioning animation state machine capable of handling complex player inputs.
4. Strengthened understanding of animation logic, timing, and engine integration for gameplay systems.
5. Explored how subtle idle variations can add personality and liveliness to game characters.
