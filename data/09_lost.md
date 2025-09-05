---
title: "Lost"
timeline: Feb 2025 - Apr 2025
category: Game
role: Independent Developer
main_video: https://assets.sonniesun.com/project_cybercity.MP4
main_img: https://assets.sonniesun.com/p05_03.png
main_img_alt: game demo image
overview: As lead designer, I was responsible for developing the core gameplay mechanics, quest design, character progression system, and overseeing the implementation of the open-world environment. The project involved a small team of 5 developers working over 6 months.
technologies: ["PCG", "Environments", "Houdini", "Unreal Engine 5", "Python"]
img1: https://assets.sonniesun.com/p05_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p05_02.png
img2_alt: img2
img3: https://assets.sonniesun.com/p05_03.png
img3_alt: img3
img4: https://assets.sonniesun.com/p05_04.png
img4_alt: img4
img5: https://assets.sonniesun.com/p05_05.png
img5_alt: img5
img6: https://assets.sonniesun.com/p05_06.png
img6_alt: img6
---

## Project Overview

"幻境之城"是对使用SideFX Houdini和Unreal Engine 5进行大规模程序化城市生成的技术探索...

## Technical Breakdown

### 1 Composition & Visual Design

<!-- 构图草稿 -->
![Markdown标志](https://markdown-here.com/img/icon256.png "Markdown Logo")

- Challenge: Managing a large-scale city environment while maintaining depth, readability, and a strong cyberpunk aesthetic.

- Solution:
    - Applied modular modeling and hierarchical layout to achieve clear foreground, midground, and background layers.
    - Referenced cinematic photography techniques (leading lines, symmetry, light–dark contrast) to guide the viewer’s eye.
    - Positioned neon signs and billboards strategically to establish visual focal points.

### 2 Nighttime Lighting & Atmospherics

<!-- 灯光 -->
![Markdown标志](https://markdown-here.com/img/icon256.png "Markdown Logo")

- Challenge: Creating a convincing night scene with volumetric fog, neon lighting, and reflective surfaces.

- Solution:
    - Utilized Volumetric Fog and Exponential Height Fog in UE5 to create layered atmospheric depth.
    - Combined point lights and area lights to simulate neon and street lighting, enhanced with Lumen for global illumination.
    - Applied post-processing effects such as Bloom and Color Grading to strengthen mood and color harmony.

### 3 Hologram & Billboard Materials

<!-- PLUS：HUD的制作细节 -->
![Markdown标志](https://markdown-here.com/img/icon256.png "Markdown Logo")

- Challenge: Designing glowing holographic projections and animated billboards with strong sci-fi aesthetics while keeping performance in mind.

- Solution:
    - Built emissive materials with Fresnel edge glow to enhance the holographic feel.
    - Added shader animations for flickering text, scanlines, and distortion effects.
    - Optimized transparency blending to reduce performance overhead.

### 4 Animated Sci-fi Road Material

<!-- PLUS：刘光效果制作细节 -->
- Challenge: Roads needed dynamic flowing light effects to fit the futuristic theme.

- Solution:

    - Created animated materials using UV panning combined with gradient masks.
    - Layered multiple light streaks with different speeds and intensities via Lerp nodes.
    - Adjusted brightness and timing to integrate smoothly with the overall city lighting.

### 5 Sci-fi Portal VFX

<!-- PLUS：传送门制作细节 -->
- Challenge: Designing a portal with strong sci-fi energy and visual impact.

- Solution:
    - Used Niagara particle systems for swirling particles and energy bursts.
    - Applied World Position Offset in materials to simulate spatial distortion.
    - Combined animated shaders with particle effects to create dynamic energy fluctuations inside the portal.

## Takeaways

- Gained experience in balancing artistic direction with real-time performance optimization.
- Developed a deeper understanding of fog–light interaction and dynamic materials in cyberpunk aesthetics.
- Future improvements could include further optimizing holograms and particle effects for lower-end hardware.
