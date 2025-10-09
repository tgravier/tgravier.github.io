---
title: "Multi-marginal temporal Schrödinger Bridge Matching for video generation from unpaired data"
authors:
- admin
- Thomas Boyer
- Auguste Genovesio
date: "2025-10-02T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-10-02T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["preprint"]

# Publication name and optional abbreviated publication name.
publication: "Under review at ICLR 2026"
publication_short: "Under review at ICLR 2026"

abstract: "Many natural dynamic processes -- such as in vivo cellular differentiation or disease progression -- can only be observed through the lens of static sample snapshots. While challenging, reconstructing their temporal evolution to decipher underlying dynamic properties is of major interest to scientific research. Existing approaches enable data transport along a temporal axis but are poorly scalable in high dimension and require restrictive assumptions to be met. To address these issues, we propose Multi-Marginal temporal Schrödinger Bridge Matching (MMtSBM) for video generation from unpaired data, extending the theoretical guarantees and empirical efficiency of Diffusion Schrödinger Bridge Matching by deriving the Iterative Markovian Fitting algorithm to multiple marginals in a novel factorized fashion. Experiments show that MMtSBM retains theoretical properties on toy examples, achieves state-of-the-art performance on real world datasets such as transcriptomic trajectory inference in 100 dimensions, and for the first time recovers couplings and dynamics in very high dimensional image settings. Our work establishes multi-marginal Schrödinger bridges as a practical and principled approach for recovering hidden dynamics from static data."

# Summary. An optional shortened abstract.
summary: "We propose Multi-Marginal temporal Schrödinger Bridge Matching (MMtSBM) for video generation from unpaired data, extending Diffusion Schrödinger Bridge Matching to multiple marginals with theoretical guarantees and empirical efficiency."

tags:
- Machine Learning
- Schrödinger Bridge
- Video Generation
- Optimal Transport
- Diffusion Models

featured: true

hugoblox:
  ids:
    arxiv: 2510.01894v1

links:
- type: code
  url: https://github.com/tgravier/MMDSBM-pytorch
- type: website
  url: https://mmdsbm.notion.site/

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Multi-marginal temporal Schrödinger Bridge Matching framework'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

**Status**: Under review at ICLR 2026

This work addresses the challenge of reconstructing temporal evolution from static sample snapshots in dynamic processes. We introduce Multi-Marginal temporal Schrödinger Bridge Matching (MMtSBM), a novel approach that extends Diffusion Schrödinger Bridge Matching to handle multiple marginals in a principled and efficient manner.

## Key Contributions

- Extension of Schrödinger Bridge Matching to multiple marginals
- Novel factorized Iterative Markovian Fitting algorithm
- State-of-the-art performance on transcriptomic trajectory inference
- First successful recovery of dynamics in very high dimensional image settings

## Applications

- Video generation from unpaired data
- Cellular differentiation trajectory inference
- Disease progression modeling
- High-dimensional temporal dynamics recovery

**arXiv**: [2510.01894](https://arxiv.org/abs/2510.01894)
