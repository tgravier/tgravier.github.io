---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  spacing: '6rem'

sections:
  # === HEADER ===
  - block: resume-biography-3
    id: about
    content:
      username: admin
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  # === RESEARCH ===
  - block: markdown
    id: research
    content:
      title: '🔬 Research Focus'
      subtitle: ''
      text: |-
        My research lies at the intersection of **optimal transport**, **diffusion models**, and **generative modeling**. I am particularly interested in building both the theoretical foundations and practical algorithms for **multi-marginal problems** in machine learning.

        ## Current Work
        - **Multi-marginal Schrödinger Bridge Matching**: Extending diffusion models to handle multiple marginal distributions, with applications to video generation and temporal dynamics inference  
        - **Optimal Transport Theory**: Mathematical foundations of generative models and their applications to biological data analysis  
        - **Information Geometry**: Geometric perspectives on learning algorithms and optimization

        ## Research Interests
        - Generative Modeling & Diffusion Processes  
        - Optimal Transport & Wasserstein Distances  
        - Information Geometry & Geometric Deep Learning  
        - Applications to Computational Biology  
        - Mathematical Foundations of AI  

        Currently seeking a **PhD position (CIFRE or academic)** in **applied mathematics and machine learning**.
    design:
      columns: '1'

  # === PUBLICATIONS ===
  - block: collection
    id: publications
    content:
      title: Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  # === PROJECTS (now just below Publications) ===
  - block: collection
    id: projects
    content:
      title: Research Projects
      text: |
        Here are several **research and coding projects** carried out during my year in the **Master MVA (Mathematics, Vision, Learning)** at ENS Paris-Saclay and my research period at ENS Ulm.  
        For a more exhaustive list, including technical reports and code, visit the GitHub repository:  
        [github.com/tgravier/MVA-Portfolio](https://github.com/tgravier/MVA-Portfolio/)
      filters:
        folders:
          - projects
    design:
      view: article-grid
      fill_image: false
      columns: 3

  # === EXPERIENCE ===
  - block: resume-experience
    id: experience
    content:
      title: Experience
      username: admin
    design:
      date_format: 'January 2006'
      is_education_first: false

  # === SKILLS ===
  - block: resume-skills
    id: skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false

  # === AWARDS ===
  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: admin
---
