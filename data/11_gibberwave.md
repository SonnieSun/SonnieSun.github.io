---
title: "Gibberwave"
timeline: Oct 2025
category: Game
role: Programmer
main_game: https://itch.io/embed-upload/15205997?color=000000
main_img: https://assets.sonniesun.com/p11_00.jpg
main_img_alt: game screenshot
overview: Gibberwave is a narrative-driven text adventure game developed during a Game Jam, where I served as the programmer. Collaborated with two designers, one artist, and one sound designer to develop a 72-hour game jam project. Implemented gameplay systems, UI flow, and overall integration in Unity. Available on Ludum Dare 58 <a href="https://ldjam.com/events/ludum-dare/58/gibberwave" target="_blank" style="color:#ffffff;">https://ldjam.com/events/ludum-dare/58/gibberwave</a> or on Itch <a href="https://yiwaii.itch.io/gibberwave" target="_blank" style="color:#ffffff;">https://yiwaii.itch.io/gibberwave</a>
technologies: ["Ludum Dare 58", "Game Jam", "Unity"]
img_type: 2
img1: https://assets.sonniesun.com/p11_01.png
img1_alt: img1
img2: https://assets.sonniesun.com/p11_02.png
img2_alt: img2
---

## Project Overview

Gibberwave is a narrative-driven text adventure game developed during a Game Jam, where I served as the programmer. The player takes on the role of the only unaffected outsider in Blabber Town, deciphering nonsensical phrases influenced by alien signals. By converting these distorted dialogues into purified energy, the player gradually restores normality to the town.
I was fully responsible for all programming work, including the dialogue and gameplay systems, UI design and transitions, localization framework, adaptive resolution, and multi-platform builds. The project was developed in Unity (C#), with a focus on creating smooth narrative interactions and responsive user experience within the limited jam timeframe.

Available on Ludum Dare 58: 

<a href="https://ldjam.com/events/ludum-dare/58/gibberwave" target="_blank" style="color:#ffffff;">https://ldjam.com/events/ludum-dare/58/gibberwave</a> 

or on Itch: 

<a href="https://yiwaii.itch.io/gibberwave" target="_blank" style="color:#ffffff;">https://yiwaii.itch.io/gibberwave</a>

## Technical Breakdown

### 01 Multi-language Support and UI Localization

<img src="https://assets.sonniesun.com/p11_c_01.png" alt="Markdown Pic 01" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_02.png" alt="Markdown Pic 02" style="display: block; max-width: min(100%, 800px); height: auto;" />

- The game featured both Chinese and English text, requiring seamless localization without manual duplication.
- Implemented a JSON-based localization system in C#, dynamically switching UI elements and dialogue text in real time based on player language settings.

### 02 Dynamic Dialogue System with Typing and Branching

<img src="https://assets.sonniesun.com/p11_c_03.png" alt="Markdown Pic 03" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_04.png" alt="Markdown Pic 04" style="display: block; max-width: min(100%, 800px); height: auto;" />

- Designed a typewriter-style dialogue effect and a modular system to manage NPC interactions, allowing easy customization of text speed, pauses, and branching choices.

### 03 Core Gameplay – Detecting “Abnormal” Phrases

<img src="https://assets.sonniesun.com/p11_c_05.png" alt="Markdown Pic 05" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_06.png" alt="Markdown Pic 06" style="display: block; max-width: min(100%, 800px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_07.png" alt="Markdown Pic 07" style="display: block; max-width: min(100%, 800px); height: auto;" />

- The main gameplay loop required identifying “abnormal” sentences from NPC dialogues, involving logic-heavy data checks and responsive UI.
- Built a data-driven dialogue system using JSON, managing dynamic text display, scoring, and feedback animations to ensure clear player feedback for correct and incorrect choices.

### 04 Adaptive Resolution and Fullscreen Display

<img src="https://assets.sonniesun.com/p11_c_08.png" alt="Markdown Pic 08" style="display: block; max-width: min(100%, 800px); height: auto;" />

```c#
public class FixedAspectRatio : MonoBehaviour
{
    public float targetAspect = 16.0f / 9.0f;
    private Camera mainCamera;
    
    void Start()
    {
        CanvasScaler canvasScaler = GameObject.Find("Canvas").GetComponent<CanvasScaler>();
        
        float ratio = (float)Screen.width / (float)Screen.height;

        if (ratio < targetAspect)
        {
            canvasScaler.matchWidthOrHeight = 0;
        }

        else if (ratio > targetAspect)
        {
            canvasScaler.matchWidthOrHeight = 1;
        }
    }
}
```

- The UI layout needed to remain consistent across varying screen ratios and platforms.
- Implemented a 16:9 enforced display by adding adaptive black bars and responsive canvas alignment in C#, ensuring visual consistency across Windows, WebGL, and macOS builds.

### 05 Multi-Platform Deployment

<img src="https://assets.sonniesun.com/p11_c_10.png" alt="Markdown Pic 10" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_11.png" alt="Markdown Pic 11" style="display: block; max-width: min(100%, 400px); height: auto;" />
<img src="https://assets.sonniesun.com/p11_c_12.png" alt="Markdown Pic 12" style="display: block; max-width: min(100%, 400px); height: auto;" />

- Packaged the game for Windows, Mac, and HTML5 platforms while maintaining stable performance and consistent UI scaling.
- Configured Unity’s build pipeline for cross-platform deployment, debugging platform-specific issues, and ensuring smooth performance across devices.

## Takeaways

1. Through Gibberwave, I gained hands-on experience in narrative system design, UI localization, and cross-platform optimization under tight deadlines.
2. This project strengthened my ability to integrate game logic with storytelling, improved my understanding of data-driven dialogue systems, and taught me how to maintain technical quality within jam-style time constraints.
3. It also deepened my appreciation for how UI responsiveness and pacing contribute to immersion in text-based games.
