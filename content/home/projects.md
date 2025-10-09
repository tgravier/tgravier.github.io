---
title: "Projects"
date: 2025-03-15
type: landing

# Section design
design:
  spacing: "3rem"

# Page sections
sections:
  - block: collection
    content:
      title: "Selected Research Projects"
      text: |
        This page highlights a selection of my research and applied machine learning projects carried out during the **Master MVA (Mathematics, Vision, Learning)** at **ENS Paris-Saclay**, and subsequent independent work.  
        Each project blends rigorous mathematical modeling with practical implementations in deep learning, probabilistic reasoning, and optimal transport.  
        Together, they form a coherent research trajectory oriented toward **generative modeling, learning theory, and robust machine intelligence**.

        Topics explored include:
        - **Optimal Transport & Schrödinger Bridges** for generative dynamics  
        - **Graph Neural Networks** and latent diffusion models  
        - **Audio and Signal Processing** for end-to-end waveform modeling  
        - **Probabilistic and Topological Learning** for interpretability and structure inference  
        - **Computational Statistics** and theoretical optimization methods  

      filters:
        folders:
          - altegrad_project
          - computational_statistics
          - generative_modelling_mgn
          - mallat_transport_denoising
          - probabilistic_graphical_models
          - topological_data_analysis
          - wave_unet_source_separation
    design:
      view: article-grid
      fill_image: true
      columns: 3
      show_date: false
      show_read_more: true
      show_read_time: false
---
---
title: "Research Projects"
subtitle: ""
weight: 40  # position sur la page d'accueil (plus grand = plus bas)
widget: portfolio
content:
  title: "Research Projects"
  text: |
    A selection of applied mathematics and machine learning projects carried out during the **Master MVA** at ENS Paris-Saclay and subsequent independent research.  
    The projects showcase work on **generative modeling**, **probabilistic reasoning**, **signal processing**, and **optimal transport**.

  filters:
    folders:
      - project  # affichera tout ce qui est dans content/project/
design:
  columns: 3
  view: article-grid
  fill_image: true
  show_date: false
  show_read_more: true
---
