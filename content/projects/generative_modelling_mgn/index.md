---
title: "Learning Gradients of Convex Functions with Monotone Gradient Networks"
summary: "Study and implementation of Monotone Gradient Networks (MGN) for learning gradients of convex functions, optimal transport, and generative modeling on high-dimensional data."
date: 2025-02-20
tags: ["Optimal Transport", "Generative Modeling", "Convex Optimization", "Neural Networks", "Master MVA"]
authors: ["Thomas Gravier", "Emilio Picard"]
supervisors: ["Gabriel Peyré", "Master MVA Teaching Team"]
links:
  - name: "Full Report (PDF)"
    url: "Projet_Generative_Modelling_GRAVIER_PICARD.pdf"
  - name: "Code Repository"
    url: "https://github.com/emilio-pcrd/generative_modelling"
image:
  filename: generative_mgn.jpg
  caption: "Monotone Gradient Networks (MGN) for transport-based generative modeling."
---

This project was part of the **Generative Modeling** course at **ENS Paris-Saclay – Master MVA**, focusing on the intersection of **deep learning**, **convex analysis**, and **optimal transport**.  
It aimed to explore **Monotone Gradient Networks (MGNs)** — architectures that learn gradients of convex functions to model structured transport maps between probability distributions.

---

### Objective

To understand, rederive, and implement recent architectures for **learning convex gradients** and extend them to **generative modeling** tasks.  
We analyzed and compared two recent architectures:
- **Cascaded Monotone Gradient Network (C-MGN)**
- **Modular Monotone Gradient Network (M-MGN)**

These models were originally proposed to learn monotone operators corresponding to the gradients of convex potentials, offering a principled connection between **convex optimization** and **generative transport**.

---

### Theoretical Framework

The work revisits fundamental results from **Brenier’s theorem** and **optimal transport theory**, where the optimal transport map between two continuous distributions is the **gradient of a convex function**.

We formally rederived:
- The PSD constraints on network Jacobians to ensure monotonicity  
- Theoretical proofs that **C-MGN** and **M-MGN** satisfy convex-gradient conditions  
- The connection between **Sinkhorn distances**, **Wasserstein metrics**, and **entropy-regularized OT**

---

### Experiments

#### 1. Gradient Field Approximation
We validated the architectures on synthetic convex functions (e.g. \( f(x) = x_1^4 + \frac{x_2^2}{2} + x_1x_2/2 + \dots \)).  
Both models achieved **MAE ≈ 10⁻⁵** on gradient field prediction.

#### 2. Optimal Transport Between Distributions
We trained both models to learn transport maps between:
- Gaussian → Gaussian
- Gaussian → Banana distributions  

Using **Sinkhorn loss**, the results were:
| Model | Dataset | Wasserstein Distance ↓ |
|--------|----------|-----------------------:|
| C-MGN | Gaussian | 0.12 |
| M-MGN | Gaussian | 0.09 |
| C-MGN | Banana | 0.19 |
| M-MGN | Banana | 0.17 |

#### 3. High-Dimensional Generative Modeling
- **MNIST:** mapping Gaussian noise → handwritten digits (transport-based generation).  
- **CIFAR-10:** grayscale → color image translation (optimal coupling for colorization).  
- **Domain Adaptation:** style transfer from day → sunset scenes via learned color distributions.

C-MGN produced results comparable to small VAEs, while maintaining theoretical guarantees of convexity and monotonicity.

---

### Key Findings

- **MGN models** enable stable generative training using transport-based objectives.  
- **Convex constraints** enhance interpretability and reduce mode collapse in learned mappings.  
- Successful extension of MGNs to **high-dimensional visual data** (MNIST, CIFAR-10).  
- Demonstrated structured **image-to-image translation** using optimal transport principles.

---

### Perspectives

Future work includes integrating **convolutional operators** into MGNs to better capture local spatial correlations while preserving convexity.  
This approach could serve as a bridge between **optimal transport**, **diffusion models**, and **energy-based generative modeling**.

---

### References

- Chaudhari, S., Pranav, S., Moura, J. (2023–2025). *Learning Gradients of Convex Functions with Monotone Gradient Networks.*  
- Peyré, G., Cuturi, M. (2020). *Computational Optimal Transport.*  
- Brenier, Y. (1991). *Polar Factorization and Monotone Rearrangement of Vector-Valued Functions.*  
- Cuturi, M. (2013). *Sinkhorn Distances: Lightspeed Computation of Optimal Transportation Distances.*  
- Santambrogio, F. (2015). *Optimal Transport for Applied Mathematicians.*
