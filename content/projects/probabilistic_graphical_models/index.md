---
title: "Probabilistic Graphical Models – Generative vs Discriminative Robustness in Medical Imaging"
summary: "Comparative study of generative and discriminative classifiers under adversarial and non-adversarial perturbations on medical imaging data. Implementation of GBZ and DBX models and evaluation against gradient-based and natural perturbations."
date: 2025-01-08
tags: ["Probabilistic Graphical Models", "Generative Models", "Adversarial Robustness", "Medical Imaging", "Master MVA"]
authors: ["Thomas Gravier", "Rosalie Millner", "Emilio Picard"]
supervisors: ["Francis Bach"]
image:
  filename: pgm_generative_vs_discriminative.jpg
  caption: "Robustness comparison between generative (GBZ) and discriminative (DBX) classifiers under adversarial attacks"
links:
  - name: "Code Repository"
    url: "https://github.com/rosaliemillner/PGM_project"
---

This project was carried out as part of the **Probabilistic Graphical Models** course taught by **Francis Bach** at ENS Paris-Saclay within the Master MVA program.  
The work focused on exploring whether **generative classifiers** can offer greater robustness than discriminative ones when applied to **medical imaging tasks**, particularly under both *adversarial* and *non-adversarial* perturbations.

---

### Context and Objective

Inspired by the paper *“Are Generative Classifiers More Robust to Adversarial Attacks?”* (Li, Bradshaw & Sharma, 2019),  
we sought to evaluate and reproduce its conclusions in the context of **MRI and CT medical image classification**,  
where model reliability is crucial due to potential real-world implications of misclassification.

Two models were implemented from scratch:

- **Generative Classifier (GBZ model)** — modeling the joint distribution \( p(x, y) = p(x|y)p(y) \), trained via VAE-based ELBO.  
- **Discriminative Classifier (DBX / ResNet18)** — modeling \( p(y|x) \), trained for conditional classification.

Both were evaluated for their robustness to **adversarial** (FGSM, PGD, One-Pixel) and **non-adversarial** (brightness, contrast) perturbations.

---

### Methodology

- **Dataset:** *Medical MNIST* (≈50,000 grayscale images, 6 classes — AbdomenCT, BreastMRI, ChestCT, CXR, Hand, HeadCT).  
- **Attacks implemented:**
  - *FGSM* (Fast Gradient Sign Method)  
  - *PGD* (Projected Gradient Descent)  
  - *One-Pixel* black-box perturbation  
  - Non-adversarial: brightness and contrast changes  

- **Training setup:**
  - GBZ model trained via ELBO (reconstruction + KL + classification loss)  
  - ResNet18 fine-tuned on ImageNet weights  
  - Both models trained for 15 epochs on NVIDIA RTX 4050 GPU  

---

### Results

| Attack Type | Metric | ResNet18 (DBX) | GBZ (Generative) |
|--------------|---------|----------------|------------------|
| Clean | Accuracy | 0.999 | 0.998 |
| FGSM (ε=0.1) | Accuracy | 0.68 | 0.78 |
| FGSM (ε=0.03) | Accuracy | 0.82 | 0.91 |
| PGD (ε=0.1) | Accuracy | 0.61 | 0.88 |
| One-Pixel | Accuracy | 0.995 | 0.997 |
| Brightness | Accuracy | 0.83 | 0.83 |
| Contrast | Accuracy | 0.73 | 0.88 |

Generative classifiers consistently exhibited **higher robustness** to both gradient-based and perceptual perturbations.  
The results confirm that modeling \( p(x, y) \) rather than \( p(y|x) \) yields better generalization under noisy or corrupted inputs,  
especially when data manifolds are complex or multimodal.

---

### Theoretical Framework

The **GBZ model** introduces a latent variable \( z \) to jointly encode class and feature dependencies:

\[
p(x, z, y) = p(z)p(y|z)p(x|z)
\]

Training maximizes the **Evidence Lower Bound (ELBO):**

\[
\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{KL}(q_\phi(z|x) || p(z)) + \mathcal{L}_{class}
\]

This formulation ensures robust latent representations that better capture intra-class variability.

---

### Analysis and Discussion

- **Generative models** exhibited smaller accuracy degradation across all tested perturbations.  
- **Discriminative models**, though highly accurate on clean data, were significantly more vulnerable to adversarial gradients.  
- Visualizations of the **latent space** (via PCA) showed that GBZ embeddings maintained strong class separation even after perturbations.  
- The **One-Pixel attack** had negligible effect on both models due to the dataset’s intrinsic class separability.

These findings suggest that **generative models provide a natural defense** against adversarial instability in high-stakes contexts such as medical imaging.

---

### References

- Li, Y., Bradshaw, J., & Sharma, Y. (2019). *Are Generative Classifiers More Robust to Adversarial Attacks?*  
- Goodfellow, I., Shlens, J., & Szegedy, C. (2015). *Explaining and Harnessing Adversarial Examples.*  
- Kingma, D. P., & Welling, M. (2014). *Auto-Encoding Variational Bayes.*  
- Su, J., Vargas, D. V., & Sakurai, K. (2019). *One Pixel Attack for Fooling Deep Neural Networks.*  
- Tsai, M.-J. et al. (2023). *Adversarial Attacks on Medical Image Classification.*  
