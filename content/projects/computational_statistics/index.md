---
title: "Computational Statistics – Gradient Boosting and Stochastic Sampling"
summary: "Reimplementation and theoretical study of Gradient Boosting as functional optimization, following Biau & Cadre (Annals of Statistics, 2021). Additional experiments explored stochastic gradient descent, MALA sampling, and temperature-based optimization."
date: 2025-01-08
tags: ["Computational Statistics", "Gradient Boosting", "Monte Carlo Methods", "Stochastic Optimization", "Master MVA"]
authors: ["Thomas Gravier", "Théotime Le Hellard"]
supervisors: ["Stéphanie Allassonnière"]
image:
  filename: featured.jpg
  caption: "Gradient Boosting ensemble method: combining weak learners (decision trees) into a strong predictor through functional optimization"
---

This project was carried out during the **Computational Statistics** course taught by Prof. **Stéphanie Allassonnière** (Sorbonne Université, CNRS) in the Master MVA program at ENS Paris-Saclay.  
It combined a theoretical paper presentation and a complete reimplementation of **Gradient Boosting** as a *functional optimization procedure*, following *Gérard Biau & Benoît Cadre, Optimization by Gradient Boosting (Annals of Statistics, 2021)*.

---

### Main Project – Functional Gradient Boosting

We implemented Gradient Boosting entirely **from scratch**, using **decision trees as weak learners**, to validate the convergence results proven in the reference paper.  
The theoretical framework formalizes boosting as an instance of **functional gradient descent** over the expected loss functional:

\[
C(F) = \mathbb{E}[\psi(F(X), Y)]
\]

Two algorithms were studied:
1. Taylor-based functional updates ensuring convergence when the loss satisfies bounded derivative and Lipschitz conditions.  
2. Regularized updates ensuring avoidance of overfitting in finite-sample regimes.

The final implementation included:
- Tree complexity control scaling as \( \text{max\_depth} \propto \log_2(n) \)
- Regularization term \( \gamma_n = 1/n \)
- Gradient stabilization for convergence to \( F^* \)

**Empirical Results:**  
On the *Iris* and *Wine Quality* datasets, our custom implementation achieved accuracy comparable to Scikit-learn’s Gradient Boosting while respecting theoretical convergence bounds.

---

### Secondary Project – Sampling and Stochastic Optimization

In addition to the main project, we explored several **computational sampling and optimization techniques** relevant to statistical learning:

- **Temperature-based sampling** for exploring multimodal loss landscapes.  
- **Stochastic gradient descent** variants with adaptive learning rates.  
- **MALA (Metropolis-Adjusted Langevin Algorithm)** sampling for posterior approximation.  
- Empirical study of **optimal parameter tuning** for stability and convergence in noisy gradient regimes.

These complementary experiments provided practical insight into how stochastic optimization interacts with regularization, convergence speed, and model generalization.

---

### References
- G. Biau & B. Cadre (2021). *Optimization by Gradient Boosting*. Annals of Statistics.  
- R. Neal (2011). *MCMC Using Hamiltonian Dynamics*. Handbook of Markov Chain Monte Carlo.  
- S. Allassonnière (2024). *Computational Statistics — Lecture Notes, MVA Program*.
