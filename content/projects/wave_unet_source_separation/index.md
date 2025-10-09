---
title: "Deep Learning & Signal Processing – Wave-U-Net Source Separation"
summary: "Reimplementation of Wave-U-Net for joint speech and noise separation directly in the time domain. Developed an end-to-end 1D U-Net architecture trained from scratch for robust audio source separation."
date: 2025-01-15
tags: ["Deep Learning", "Signal Processing", "Source Separation", "Audio", "Wave-U-Net", "Master MVA"]
authors: ["Thomas Gravier"]
supervisors: ["Thomas Courtat"]
links:
  - name: "Full Report (PDF)"
    url: "https://github.com/tgravier/MVA-Portfolio/tree/master/01_semester_1/Signal_Processing/Project"
  - name: "Code Repository"
    url: "https://github.com/tgravier/MVA-Portfolio/tree/master/01_semester_1/Signal_Processing/Project"
image:
  filename: featured.jpg
  caption: "Audio source separation: decomposing mixed signals into voice and noise components using Wave-U-Net architecture."
---

This project was completed within the **Deep Learning & Signal Processing** course taught by **Thomas Courtat** at ENS Paris-Saclay (Master MVA).  
It explored end-to-end learning approaches for **audio source separation**, combining concepts from classical signal processing and modern deep architectures.

---

### Objective

Estimate the **voice** and **noise** components from a mixed audio signal using a single-channel input.  
Each dataset sample contains:
- `mix_snr_XX.wav`: mixture of voice and noise  
- `voice.wav`: clean speech  
- `noise.wav`: background noise  

The goal was to **jointly reconstruct** both signals directly in the waveform domain.

---

### Approach – *Wave-U-Net from Scratch*

We reimplemented the **Wave-U-Net** architecture (*Stoller et al., ISMIR 2018*) entirely from scratch in PyTorch, adapting it to our dataset and computational constraints.

#### Motivation
- Avoid the limitations of STFT-based models (e.g., phase recovery issues).  
- Model transients and harmonics directly in the waveform.  
- Improve interpretability by reconstructing time-domain signals without spectrogram inversion.

#### Architecture
- **1D U-Net** structure with skip connections.  
- **12 convolutional layers** in encoder–decoder configuration (stride-2).  
- Channel progression: 16 → 512.  
- **Dual-output head** for voice and noise prediction.  
- **Loss:** hybrid **MSE + SI-SDR** with L1 regularization on latent features.

---

### Training and Evaluation
- **Optimizer:** AdamW (lr=1e-4)  
- **Batch size:** 4  
- **Epochs:** 100  
- **Augmentation:** SNR sampling, waveform slicing, normalization.  
- **Metrics:** SDR, SIR, and SI-SDR.

| Metric | Voice | Noise | Average |
|---------|-------:|------:|--------:|
| SDR (dB) | **9.8** | **10.1** | **10.0** |
| SI-SDR (dB) | **9.2** | **9.5** | **9.35** |

Our reimplementation reached **performance on par with the original paper**, despite reduced data size and compute.  
Listening tests and spectrogram analysis confirmed **clear separation** of speech and noise with minimal artifacts.

---

### Insights and Contributions
- Full PyTorch reimplementation of **Wave-U-Net** adapted to small datasets.  
- Demonstrated that **time-domain modeling** surpasses frequency masking for this task.  
- Stabilized training via careful normalization and dynamic loss weighting.  
- Achieved high perceptual quality without explicit spectral priors.

---

### References
- Stoller, D., Ewert, S., Dixon, S. (2018). *Wave-U-Net: A Multi-Scale Neural Network for End-to-End Audio Source Separation.* ISMIR 2018.  
- Hershey, J., Chen, Z., Le Roux, J. (2016). *Deep Clustering: Discriminative Embeddings for Segmentation and Separation.* ICASSP 2016.  
- Jansson, A. *et al.* (2017). *Singing Voice Separation with Deep U-Net Convolutional Network.* ISMIR 2017.  
- Courtat, T. (2024). *Deep Learning & Signal Processing – Course Notes, Master MVA.*
