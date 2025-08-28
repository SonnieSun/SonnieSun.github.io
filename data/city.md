---
title: "幻境之城：Houdini程序化城市生成"
timeline: Nov 2024 - Jan 2025
category: PCG
role: Lead Developer
main_video: https://assets.sonniesun.com/project_cybercity.MP4
main_img: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
main_img_alt: city image
overview: As lead designer, I was responsible for developing the core gameplay mechanics, quest design, character progression system, and overseeing the implementation of the open-world environment. The project involved a small team of 5 developers working over 6 months.
technologies: ["PCG", "Environments", "Houdini", "Unreal Engine 5", "Python"]
img1: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
img1_alt: img1
img2: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
img2_alt: img2
img3: https://picsum.photos/id/146/1600/800
img3_alt: img3
img4: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
img4_alt: img4
img5: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
img5_alt: img5
img6: https://assets.sonniesun.com/100x100%E5%A4%B4%E5%83%8F.jpg
img6_alt: img6
---

## 项目概述

"幻境之城"是对使用SideFX Houdini和Unreal Engine 5进行大规模程序化城市生成的技术探索...

## 技术细节

### 1. 程序化建筑生成器

系统的核心是在Houdini中构建的模块化建筑生成器。

```python
# Houdini Python示例
def create_building(parameters):
    building = create_geo()
    for floor in range(parameters["floors"]):
        create_floor(floor, parameters)
    return building