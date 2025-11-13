---
title: "Nexus"
timeline: Apr 2025 - Sep 2025
category: Game
role: Sole Developer
main_video: https://assets.sonniesun.com/00_Videos/04_Nexus.mp4
main_img: https://assets.sonniesun.com/03_Nexus/p03_0.png
main_img_alt: game demo image
overview: Nexus is a third-person cyberpunk stealth game prototype developed in Unreal Engine. The player controls Molly, a rogue operative who must infiltrate a futuristic apartment complex, evade patrolling enemies, and steal a crystal hidden inside a secured vault. 
technologies: ["Unreal Engine 5.4", "Unreal Engine 5.6"]
img_type: 1
img1: https://assets.sonniesun.com/03_Nexus/p03_1.png
img1_alt: img1
img2: https://assets.sonniesun.com/03_Nexus/p03_2.png
img2_alt: img2
img3: https://assets.sonniesun.com/03_Nexus/p03_3.png
img3_alt: img3
img4: https://assets.sonniesun.com/03_Nexus/p03_4.png
img4_alt: img4
img5: https://assets.sonniesun.com/03_Nexus/p03_5.png
img5_alt: img5
img6: https://assets.sonniesun.com/03_Nexus/p03_6.png
img6_alt: img6
---

## Project Overview

Nexus is a third-person cyberpunk stealth game prototype developed in Unreal Engine. The player controls Molly, a rogue operative who must infiltrate a futuristic apartment complex, evade patrolling enemies, and steal a crystal hidden inside a secured vault.
The project combines AI-driven stealth gameplay, cinematic environment lighting, and stylized post-processing effects to create a tense and atmospheric experience. 
Download the playable build here:

<a href="https://drive.google.com/file/d/1AU1EmMez9vqaMZnTlUelg3rj1hE-Age7/view?usp=drive_link" target="_blank" style="color:#ffffff;">Google Drive</a> 

## Technical Breakdown

### 01 Third-Person Player Framework

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/03_Nexus/p03_c_02.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Built a third-person character blueprint and animation state machine supporting walking, sneaking, and transitions between them, ensuring fluid gameplay and natural animation blending.

### 02 Enemy AI Behavior
- Designed enemies that react intelligently to the player’s presence.

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_03.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Created an AI patrol system with visual and auditory detection. Enemies smoothly transition from patrolling to chasing once they detect the player, pursuing until the player hides or escapes.

### 03 “Super Vision” Skill Design

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_04.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Implemented a post-processing material effect that outlines enemies’ sight and hearing ranges in a stylized “hacker” visual overlay, 
- Represented Molly’s enhanced perception and reinforced the cyberpunk aesthetic and gameplay clarity.

### 04 Environment Construction

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_05.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/03_Nexus/p03_c_06.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/03_Nexus/p03_c_07.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/03_Nexus/p03_c_08.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed multiple interior spaces (hallways, living room, study, bathroom) 
- Used practical light sources such as lamps and windows. 
- Added neon trims and reflective surfaces to accentuate futuristic details while maintaining low-intensity, high-contrast lighting for mood and stealth.

### 05 Interactive Elements
- Added interactive sequences such as:

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_10.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Automatic door opening when the player approaches

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_11.gif" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Capture animation when caught by enemies
- These interactions enhance immersion and narrative flow.

### 06 User Interface

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_12.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Integrated start menu.

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_13.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Integrated tutorial prompts.

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_14.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

-  Integrated interaction prompts.

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_15.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Integrated end menu.

### 07 Sound Design
- Aligned audio cues with both action and pacing.

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_16.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Used Animation Notifies for precise timing of enemy footsteps

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_17.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Used blueprint Play Sound functions for environmental interactions.

### 08 Packaging and Deployment

<img src="https://assets.sonniesun.com/03_Nexus/p03_c_19.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/03_Nexus/p03_c_18.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Packaged the entire project into an executable build (.exe) using Unreal’s Package Project workflow for distribution and playtesting.


## Takeaways

1. Strengthened skills in AI-driven gameplay design, post-processing effects, and interactive environment scripting.
2. Learned how to combine lighting, sound, and atmosphere to enhance stealth gameplay tension.
3. Gained deeper understanding of animation state machines, blueprint scripting, and player feedback systems in Unreal Engine.
4. Explored how visual design choices (neon lighting, perception overlays) can reinforce both gameplay clarity and thematic tone.
5. Completed a full prototype pipeline — from design and implementation to packaging — reflecting a complete, self-contained game experience.
