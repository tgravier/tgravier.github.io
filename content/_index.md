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

  # === COLLABORATORS ===
  - block: markdown
    id: collaborators
    content:
      title: 'Collaborators'
      subtitle: ''
      text: |-
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; justify-items: center; margin: 2rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://thethomasboyer.github.io/" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Thomas Boyer" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Thomas Boyer</div>
              <div style="font-size: 0.8rem; color: #6b7280;">IBENS - ENS Ulm</div>
            </a>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://www.ibens.bio.ens.psl.eu/spip.php?rubrique47" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Auguste Genovesio" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Auguste Genovesio</div>
              <div style="font-size: 0.8rem; color: #6b7280;">IBENS - ENS Ulm</div>
            </a>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://github.com/emilio-pcrd" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Emilio Picard" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Emilio Picard</div>
              <div style="font-size: 0.8rem; color: #6b7280;">Sony CSL - Sorbonne Université</div>
            </a>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://www.linkedin.com/in/cl%C3%A9mentine-lauvergne-4114b1297/" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Clémentine Lauvergne" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Clémentine Lauvergne</div>
              <div style="font-size: 0.8rem; color: #6b7280;">ENS Paris-Saclay<br/>Dauphine Université </div>
            </a>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://github.com/rosaliemillner" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Rosalie Millner" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Rosalie Millner</div>
              <div style="font-size: 0.8rem; color: #6b7280;">ENS Paris-Saclay<br/>Dauphine Université</div>
            </a>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <a href="https://www.linkedin.com/in/bl-gorce/" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center;">
              <img src="https://github.com/github.png" alt="Blandine Gorce" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.8rem; border: 3px solid #047857; display: block;">
              <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.2rem;">Blandine Gorce</div>
              <div style="font-size: 0.8rem; color: #6b7280;">ENS Paris-Saclay<br/>Sorbonne Université</div>
            </a>
          </div>
        </div>
    design:
      columns: '1'

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
