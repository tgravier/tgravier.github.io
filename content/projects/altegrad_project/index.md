---
title: "Advanced Learning for Text and Graph Data (ALTEGRAD)"
summary: "Graph generation challenge using a Neural Graph Generator with diffusion and variational autoencoders. Our final model, based on SAGEConv and a modified decoder, achieved the 3rd best result among ENS, Polytechnique, Ponts, and Dauphine teams."
date: 2024-12-10
tags: ["Graph Neural Networks", "Latent Diffusion", "Graph Generation", "Variational Autoencoders", "Master MVA"]
authors: ["Thomas Gravier", "Clémentine Lauvergne"]
supervisors: ["Michalis Vazirgiannis"]
image:
  filename: featured.jpg
  caption: "Neural Graph Generator architecture: VAE encoder with SAGEConv, latent diffusion process, and growing MLP decoder for conditional graph generation"
---

This project was conducted as part of the **Advanced Learning for Text and Graph Data** course in the Master MVA at ENS Paris-Saclay.  
The objective of the challenge was to generate graphs with specified structural properties using the **Neural Graph Generator (NGG)** architecture from Evdaimon *et al.* (2024), combining a **Variational Autoencoder (VAE)** for structural encoding and a **latent diffusion process** for conditional graph generation.

---

### Approach

Our work focused on systematically improving the NGG baseline through controlled experiments on each architectural component:

- **Encoder:** replaced GIN with **SAGEConv**, achieving higher accuracy while maintaining stability on small graphs (<50 nodes).  
  Alternative tests with **GAT** and **TransformerConv** confirmed the superiority of SAGEConv.  
- **Decoder:** introduced a *growing MLP* architecture that progressively expands hidden dimensions to match adjacency matrices and injected feature conditioning for better generalization.  
- **Denoiser:** experimented with a **1D-UNet** inspired by *Stable Diffusion (Rombach et al., 2021)* to improve latent denoising, showing strong results albeit high computational cost.  
- **Training:** applied a **temperature scheduler** for Gumbel-Softmax and fine-tuned β-VAE coefficients for stable convergence.  
- **Inference:** developed a **rejection mechanism** based on Mean Absolute Error (MAE) between generated and target graph features to select optimal candidates.

---

### Results

| Component | Modification | Impact |
|------------|--------------|--------|
| Encoder | GIN → SAGEConv | Improved accuracy and stability |
| Decoder | Growing MLP + feature conditioning | Better reconstruction |
| Denoiser | 1D-UNet prototype | Higher denoising accuracy (non-scalable) |
| Inference | Rejection mechanism (MAE) | Enhanced final score selection |

The final model achieved a **MAE of 0.05**, ranking **3rd best overall** among top French institutions (ENS, École Polytechnique, Ponts, and Dauphine).  
This validated the importance of robust conditioning and architectural alignment in graph generation tasks.

---

### References

- I. Evdaimon *et al.*, *Neural Graph Generator: Feature-conditioned graph generation using latent diffusion models*, 2024.  
- R. Rombach *et al.*, *High-resolution image synthesis with latent diffusion models*, CVPR 2021.
